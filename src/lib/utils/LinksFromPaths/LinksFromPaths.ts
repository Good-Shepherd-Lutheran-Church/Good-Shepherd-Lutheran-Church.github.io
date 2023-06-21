class Directory {
	constructor(params: { parent: Directory | null; subdirectories: Directory[]; name: string }) {
		this.parent = params.parent;
		this.subdirectories = params.subdirectories;
		this.name = params.name;
	}
	parent: Directory | null;
	subdirectories: Directory[];
	name: string;

	public get currentPath(): string {
		const segments = ['/'];
		// eslint-disable-next-line @typescript-eslint/no-this-alias
		let currentLocation: Directory | null = this;
		while (currentLocation.parent !== null) {
			segments.unshift(currentLocation.name);
			segments.unshift('/');
			currentLocation = currentLocation.parent;
		}
		return segments.join('');
	}
}

export default class LinksFromPaths {
	constructor(pathStrings?: string[]) {
		this.pathStrings = pathStrings ? pathStrings : this._fromSvelteRoutes();
		this._buildDirectories();
		this._fromSvelteRoutes();
	}

	pathStrings: string[];
	rootDirectory = new Directory({
		parent: null,
		subdirectories: [],
		name: 'root'
	});

	_buildDirectories() {
		for (const path of this.pathStrings) {
			const pathSegments = path.split('/').filter((word) => word !== '');
			let currentDirectory = this.rootDirectory;
			for (const segment of pathSegments) {
				const matchedSubdirectories = currentDirectory.subdirectories.filter(
					(dir) => dir.name === segment
				);
				switch (matchedSubdirectories.length) {
					case 0: {
						const newLength = currentDirectory.subdirectories.push(
							new Directory({
								parent: currentDirectory,
								subdirectories: [],
								name: segment
							})
						);
						currentDirectory = currentDirectory.subdirectories[newLength - 1];
						continue;
					}
					case 1: {
						currentDirectory = matchedSubdirectories[0];
						continue;
					}
					default: {
						throw new Error(
							`Fatal: Found duplicate ${segment} subdirectory entries in ${currentDirectory}`
						);
					}
				}
			}
		}
	}

	_fromSvelteRoutes() {
		const wholePaths = import.meta.glob('/src/routes/**/+page.svelte', { as: 'url', eager: true });
		return Object.keys(wholePaths).map((wholePath) => {
			return wholePath.replace(/\.\.\/|\.\/|src\/|routes\/|\+page\.svelte/g, '');
		});
	}
}
