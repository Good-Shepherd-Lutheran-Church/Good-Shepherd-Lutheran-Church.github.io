enum IsVisModes {
	complete,
	any,
	completeX,
	completeY
}

export default function isVis(element: HTMLElement, mode: IsVisModes = IsVisModes.completeY) {
	const { top, bottom, left, right } = element.getBoundingClientRect();
	if (!window) {
		console.error("Non-Fatal: isVis() couldn't find window.");
		return;
	}
	const topTest = top >= 0 && top <= window.innerHeight;
	const bottomTest = bottom >= 0 && bottom <= window.innerHeight;
	const leftTest = left >= 0 && left <= window.innerWidth;
	const rightTest = right >= 0 && right <= window.innerWidth;

	switch (mode) {
		case IsVisModes.complete:
			return topTest && bottomTest && leftTest && rightTest;
		case IsVisModes.any:
			return topTest || bottomTest || leftTest || rightTest;
		case IsVisModes.completeX:
			return leftTest && rightTest;
		case IsVisModes.completeY:
			return topTest && bottomTest;
	}
}
