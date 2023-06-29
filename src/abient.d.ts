interface ImageEntry {
	filename: string;
	basename: string;
	srcset: string;
	imageSet: string;
	src: string;
	thumb: string;
	ar: number;
}

interface LinkEntry {
	href: string;
	text: string;
	target?: '_self' | '_blank';
}

interface MaxSize {
	below: string;
	above: string;
}

interface FontIcon {
	class: string;
	text: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type BPNames = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
