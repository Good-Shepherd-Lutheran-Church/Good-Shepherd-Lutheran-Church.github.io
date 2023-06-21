interface ImageEntry {
	filename: string;
	basename: string;
	srcset: string;
	imageSet: string;
	src: string;
	thumb: string;
	ar: number;
}

type GlobImportString = Record<string, string>;
type GlobImportMeta = Record<string, { width: number; height: number }>;

export class ImageDirectory {
	constructor(
		srcsets: GlobImportString,
		srcs: GlobImportString,
		thumbs: GlobImportString,
		metas: GlobImportMeta,
		pathToClip: string
	) {
		this.data = Object.entries(srcsets).map(([k, v]) => {
			return {
				filename: k.replace(pathToClip, ''),
				basename: k.replace(pathToClip, '').replace(/\.jpg|\.jpeg|\.png|\.webp|\.svg/g, ''),
				srcset: v,
				imageSet: v
					.split(', ')
					.map((deleteWords, i) => {
						return `"${deleteWords.split(' ')[0]}" ${i + 1}x`;
					})
					.join(', '),
				src: srcs[k],
				thumb: thumbs[k],
				ar: metas[k].width / metas[k].height
			};
		});
		this.averageAr =
			this.data.map((entry) => entry.ar).reduce((a, b) => a + b, 0) / this.data.length;
	}

	fuzz(searchString: string): ImageEntry {
		for (const entry of this.data) {
			if (entry.filename.includes(searchString)) {
				return entry;
			}
		}
		throw new Error(`Fatal: ${searchString} did not match any image filename in ${this}.`);
	}

	exact(searchString: string, useFilename = false): ImageEntry {
		if (useFilename) {
			for (const entry of this.data) {
				if (entry.filename === searchString) {
					return entry;
				}
			}
			throw new Error(`Fatal: ${searchString} did not match any image filename in ${this}.`);
		} else {
			for (const entry of this.data) {
				if (entry.basename === searchString) {
					return entry;
				}
			}
			throw new Error(`Fatal: ${searchString} did not match any image filename in ${this}.`);
		}
	}
	data: ImageEntry[];
	averageAr: number;
}
const mainLandingSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const mainLandingSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const mainLandingThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const mainLandingMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const mainLanding = new ImageDirectory(
	mainLandingSrcsets,
	mainLandingSrcs,
	mainLandingThumbs,
	mainLandingMetas,
	'/src/lib/assets/images/'
);

const churchLandingSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchLandingSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchLandingThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchLandingMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/church/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const churchLanding = new ImageDirectory(
	churchLandingSrcsets,
	churchLandingSrcs,
	churchLandingThumbs,
	churchLandingMetas,
	'/src/lib/assets/images/church/'
);

const schoolLandingSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/school/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const schoolLandingSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/school/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const schoolLandingThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/school/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const schoolLandingMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/school/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const schoolLanding = new ImageDirectory(
	schoolLandingSrcsets,
	schoolLandingSrcs,
	schoolLandingThumbs,
	schoolLandingMetas,
	'/src/lib/assets/images/school/'
);

const churchAboutSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/about/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchAboutSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/about/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchAboutThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/about/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchAboutMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/church/about/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const churchAbout = new ImageDirectory(
	churchAboutSrcsets,
	churchAboutSrcs,
	churchAboutThumbs,
	churchAboutMetas,
	'/src/lib/assets/images/church/about/'
);

const churchDirectorySrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchDirectorySrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchDirectoryThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchDirectoryMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/church/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const churchDirectory = new ImageDirectory(
	churchDirectorySrcsets,
	churchDirectorySrcs,
	churchDirectoryThumbs,
	churchDirectoryMetas,
	'/src/lib/assets/images/church/directory/'
);

const lifeTogetherSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/life-together-collage/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const lifeTogetherSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/life-together-collage/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const lifeTogetherThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/life-together-collage/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const lifeTogetherMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/life-together-collage/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const lifeTogether = new ImageDirectory(
	lifeTogetherSrcsets,
	lifeTogetherSrcs,
	lifeTogetherThumbs,
	lifeTogetherMetas,
	'/src/lib/assets/images/life-together-collage/'
);

const directorySrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const directorySrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const directoryThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const directoryMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/directory/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const directory = new ImageDirectory(
	directorySrcsets,
	directorySrcs,
	directoryThumbs,
	directoryMetas,
	'/src/lib/assets/images/directory/'
);

const schoolProgramsSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/school/programs/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const schoolProgramsSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/school/programs/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const schoolProgramsThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/school/programs/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const schoolProgramsMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/school/programs/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const schoolPrograms = new ImageDirectory(
	schoolProgramsSrcsets,
	schoolProgramsSrcs,
	schoolProgramsThumbs,
	schoolProgramsMetas,
	'/src/lib/assets/images/school/programs/'
);

const churchMinistriesSrcsets: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/ministries/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'srcset',
			w: '500;900;1200;1500',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchMinistriesSrcs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/ministries/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchMinistriesThumbs: GlobImportString = import.meta.glob(
	'/src/lib/assets/images/church/ministries/*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '100',
			h: '100',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const churchMinistriesMetas: GlobImportMeta = import.meta.glob(
	'/src/lib/assets/images/church/ministries/*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const churchMinistries = new ImageDirectory(
	churchMinistriesSrcsets,
	churchMinistriesSrcs,
	churchMinistriesThumbs,
	churchMinistriesMetas,
	'/src/lib/assets/images/church/ministries/'
);
