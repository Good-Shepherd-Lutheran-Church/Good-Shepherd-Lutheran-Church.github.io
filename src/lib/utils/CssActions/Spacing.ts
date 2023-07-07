export default function Spacing(node: HTMLElement, spacing: Spacing) {
	node.style.marginInlineStart =
		spacing.marginInlineStart || spacing.marginInline || spacing.margin || '0px';
	node.style.marginInlineEnd =
		spacing.marginInlineEnd || spacing.marginInline || spacing.margin || '0px';
	node.style.marginBlockStart =
		spacing.marginBlockStart || spacing.marginBlock || spacing.margin || '0px';
	node.style.marginBlockEnd =
		spacing.marginBlockEnd || spacing.marginBlock || spacing.margin || '0px';
	node.style.paddingInlineStart =
		spacing.paddingInlineStart || spacing.paddingInline || spacing.padding || '0px';
	node.style.paddingInlineEnd =
		spacing.paddingInlineEnd || spacing.paddingInline || spacing.padding || '0px';
	node.style.paddingBlockStart =
		spacing.paddingBlockStart || spacing.paddingBlock || spacing.padding || '0px';
	node.style.paddingBlockEnd =
		spacing.paddingBlockEnd || spacing.paddingBlock || spacing.padding || '0px';
}
