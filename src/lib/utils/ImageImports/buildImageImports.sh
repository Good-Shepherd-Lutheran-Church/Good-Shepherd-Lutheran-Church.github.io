> ImageImports.ts
while getopts "b:" options;
do
  case "${options}" in
  b) basePath=${OPTARG};;
  esac
done

cat << EOFuncs >> ImageImports.ts;
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
						return \`"\${deleteWords.split(' ')[0]}" \${i + 1}x\`;
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
		throw new Error(\`Fatal: \${searchString} did not match any image filename in \${this}.\`);
	}

	exact(searchString: string, useFilename = false): ImageEntry {
		if (useFilename) {
			for (const entry of this.data) {
				if (entry.filename === searchString) {
					return entry;
				}
			}
			throw new Error(\`Fatal: \${searchString} did not match any image filename in \${this}.\`);
		} else {
			for (const entry of this.data) {
				if (entry.basename === searchString) {
					return entry;
				}
			}
			throw new Error(\`Fatal: \${searchString} did not match any image filename in \${this}.\`);
		}
	}
  data: ImageEntry[];
  averageAr: number;
}
EOFuncs

cat imageImportsData | while read line || [[ -n $line ]];
do
  IFS=", " read -a lineArray <<< "$line";
  cat << EOF >> ImageImports.ts;
const ${lineArray[0]}Srcsets: GlobImportString = import.meta.glob(
	'${basePath}${lineArray[1]}*.{png,jpg,jpeg,webp}',
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

const ${lineArray[0]}Srcs: GlobImportString = import.meta.glob(
	'${basePath}${lineArray[1]}*.{png,jpg,jpeg,webp}',
	{
		query: {
			w: '700',
			format: 'webp'
		},
		eager: true,
		import: 'default'
	}
);

const ${lineArray[0]}Thumbs: GlobImportString = import.meta.glob(
	'${basePath}${lineArray[1]}*.{png,jpg,jpeg,webp}',
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

const ${lineArray[0]}Metas: GlobImportMeta = import.meta.glob(
	'${basePath}${lineArray[1]}*.{png,jpg,jpeg,webp}',
	{
		query: {
			as: 'meta:height;width'
		},
		eager: true,
		import: 'default'
	}
);

export const ${lineArray[0]} = new ImageDirectory(
	${lineArray[0]}Srcsets,
	${lineArray[0]}Srcs,
	${lineArray[0]}Thumbs,
	${lineArray[0]}Metas,
	'${basePath}${lineArray[1]}'
);

EOF
done