/* eslint-disable no-fallthrough */
import { readable } from 'svelte/store';

interface ColorParts {
	[key: string]: number | undefined;
	red: number;
	green: number;
	blue: number;
	alpha?: number;
}

function getColorParts(color: string) {
	const colorParts: ColorParts = { red: 0, blue: 0, green: 0 };
	if (color.startsWith('#')) {
		switch (color.length) {
			case 5:
				colorParts.alpha = parseFloat(color[4]);
			case 4:
				colorParts.red = parseInt(color[1], 16) * 17;
				colorParts.green = parseInt(color[2], 16) * 17;
				colorParts.blue = parseInt(color[3], 16) * 17;
				break;
			case 9:
				colorParts.alpha = parseFloat(color.substring(7, 9));
			case 7:
				colorParts.red = parseInt(color.substring(1, 3), 16) * 17;
				colorParts.green = parseInt(color.substring(3, 5), 16) * 17;
				colorParts.blue = parseInt(color.substring(5, 7), 16) * 17;
				break;
		}
	} else if (color.startsWith('rgba')) {
		const trimmedColor = color
			.replace(/ /g, '')
			.replace(/rgba\(|\)/g, '')
			.split(',');
		colorParts.red = parseInt(trimmedColor[0], 10);
		colorParts.green = parseInt(trimmedColor[1], 10);
		colorParts.blue = parseInt(trimmedColor[2], 10);
		colorParts.alpha = parseFloat(trimmedColor[3]);
	} else if (color.startsWith('rgb')) {
		const trimmedColor = color
			.replace(/ /g, '')
			.replace(/rgb\(|\)/g, '')
			.split(',');
		colorParts.red = parseInt(trimmedColor[0], 10);
		colorParts.green = parseInt(trimmedColor[1], 10);
		colorParts.blue = parseInt(trimmedColor[2], 10);
	}
	return colorParts;
}

export function shiftColor(color: string, proportion: number) {
	const parts: ColorParts = getColorParts(color);

	for (const part in parts) {
		const checkedPart = parts[part];
		if (checkedPart === undefined) {
			return;
		}
		if (part === 'alpha') {
			parts[part] = checkedPart;
		} else {
			parts[part] = Math.round(checkedPart * proportion);
		}
		if (checkedPart > 255) {
			parts[part] = 255;
		}
	}

	return `rgb${parts.alpha !== undefined ? 'a' : ''}(${parts.red}, ${parts.green}, ${parts.blue}${
		parts.alpha !== undefined ? ', ' + parts.alpha.toString() : ''
	})`;
}

export const colors = readable({
	lightTheme: {
		primaryColor: 'white',

		get primaryColorLight() {
			return shiftColor(this.primaryColor, 1.2);
		},

		get primaryColorDark() {
			return shiftColor(this.primaryColor, 0.8);
		},

		secondaryColor: 'rgb(2, 86, 147)',

		get secondaryColorLight() {
			return shiftColor(this.secondaryColor, 1.2);
		},

		get secondaryColorDark() {
			return shiftColor(this.secondaryColor, 0.8);
		},

		textPrimaryColor: 'rgb(80, 80, 80)',
		textSecondaryColor: 'rgb(200, 200, 200)',
		borderColor: 'gray'
	},
	darkTheme: {}
});
