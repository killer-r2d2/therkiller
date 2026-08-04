import {
	COLOR_MODE_STORAGE_KEY,
	DARK_MODE_MEDIA_QUERY,
} from '~/utils/colorMode';

const colorModeInitializer = `(() => {
	const root = document.documentElement;
	let colorMode = 'light';

	try {
		colorMode = window.matchMedia(${JSON.stringify(DARK_MODE_MEDIA_QUERY)}).matches ? 'dark' : 'light';
	} catch {}

	try {
		const storedColorMode = window.localStorage.getItem(${JSON.stringify(COLOR_MODE_STORAGE_KEY)});
		if (storedColorMode === 'light' || storedColorMode === 'dark') {
			colorMode = storedColorMode;
		}
	} catch {}

	root.dataset.theme = colorMode;
	root.style.colorScheme = colorMode;
	root.classList.remove('light', 'dark');
	root.classList.add(colorMode);
})();`;

export const useColorModeHead = () => {
	useHead({
		meta: [{ name: 'color-scheme', content: 'light dark' }],
		script: [
			{
				key: 'color-mode-initializer',
				innerHTML: colorModeInitializer,
			},
		],
	});
};
