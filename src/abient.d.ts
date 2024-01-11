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

type OneThruTwelve = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type OneThruSix = 1 | 2 | 3 | 4 | 5 | 6;

type Spacing = {
	margin?: string;
	marginInline?: string;
	marginInlineStart?: string;
	marginInlineEnd?: string;
	marginBlock?: string;
	marginBlockStart?: string;
	marginBlockEnd?: string;

	padding?: string;
	paddingInline?: string;
	paddingInlineStart?: string;
	paddingInlineEnd?: string;
	paddingBlock?: string;
	paddingBlockStart?: string;
	paddingBlockEnd?: string;
};

declare module '*.png?w=300&format=webp';
