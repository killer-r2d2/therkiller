export type ColorMode = 'light' | 'dark';

export const COLOR_MODE_STORAGE_KEY = 'therkiller-color-mode';
export const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

export const isColorMode = (value: string | null): value is ColorMode => {
	return value === 'light' || value === 'dark';
};
