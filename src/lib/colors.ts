/* eslint-disable no-fallthrough */
import { readable } from 'svelte/store';

interface ColorParts extends Record<string, number | undefined> {
	red: number;
	green: number;
	blue: number;
	alpha?: number;
}

/**
 * @description - Gets color parts from string and returns ColorParts object
 * @param color - Any rgb, rgba, #0ff, #0fff, #00ffff, #00ffffff
 * @returns ColorParts
 */
function getColorParts(color: string) {
	const colorParts: ColorParts = { red: 0, blue: 0, green: 0 };
	// Handle hex code colors
	if (color.startsWith('#')) {
		switch (color.length) {
			// Cases are +1 because of leading #.
			// Concats expand 3 or 4 digit hex codes to 6 or 8 digits for math.
			// Divide by 255 because alpha is 0 -> 1.
			case 5:
				colorParts.alpha = parseInt(color[4].concat(color[4]), 16) / 255;
			case 4:
				colorParts.red = parseInt(color[1].concat(color[1]), 16);
				colorParts.green = parseInt(color[2].concat(color[2]), 16);
				colorParts.blue = parseInt(color[3].concat(color[3]), 16);
				break;
			case 9:
				colorParts.alpha = parseInt(color.substring(7, 9), 16) / 255;
			case 7:
				colorParts.red = parseInt(color.substring(1, 3), 16);
				colorParts.green = parseInt(color.substring(3, 5), 16);
				colorParts.blue = parseInt(color.substring(5, 7), 16);
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

export function changeOpacity(color: string, alpha = 0.2) {
	const parts: ColorParts = getColorParts(color);
	return `rgba(${parts.red}, ${parts.green}, ${parts.blue}, ${alpha})`;
}

export const colors = readable({
	lightTheme: {
		primaryColor: '#fff',

		get primaryColorLight() {
			return shiftColor(this.primaryColor, 1.2);
		},

		get primaryColorDark() {
			return shiftColor(this.primaryColor, 0.8);
		},

		get primaryColorTransparent() {
			return changeOpacity(this.primaryColor);
		},

		secondaryColor: 'rgb(2, 86, 147)',

		get secondaryColorLight() {
			return shiftColor(this.secondaryColor, 1.2);
		},

		get secondaryColorDark() {
			return shiftColor(this.secondaryColor, 0.8);
		},

		get secondaryColorTransparent() {
			return changeOpacity(this.secondaryColor);
		},

		textPrimaryColor: 'rgb(80, 80, 80)',
		textSecondaryColor: 'rgb(200, 200, 200)',
		borderColor: 'gray'
	},
	darkTheme: {}
});
