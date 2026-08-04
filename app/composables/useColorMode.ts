export type ColorMode = 'light' | 'dark';

const COLOR_MODE_STORAGE_KEY = 'therkiller-color-mode';
const DARK_MODE_MEDIA_QUERY = '(prefers-color-scheme: dark)';

const isColorMode = (value: string | null): value is ColorMode => {
	return value === 'light' || value === 'dark';
};

const getColorModeMediaQuery = (): MediaQueryList | undefined => {
	try {
		return window.matchMedia(DARK_MODE_MEDIA_QUERY);
	} catch {
		return undefined;
	}
};

const getSystemColorMode = (mediaQuery?: MediaQueryList): ColorMode => {
	return mediaQuery?.matches ? 'dark' : 'light';
};

const getStoredColorMode = (): ColorMode | null => {
	try {
		const storedColorMode = window.localStorage.getItem(COLOR_MODE_STORAGE_KEY);
		return isColorMode(storedColorMode) ? storedColorMode : null;
	} catch {
		return null;
	}
};

const storeColorMode = (colorMode: ColorMode) => {
	try {
		window.localStorage.setItem(COLOR_MODE_STORAGE_KEY, colorMode);
	} catch {
		// The current-session preference still works when storage is unavailable.
	}
};

const applyColorMode = (colorMode: ColorMode) => {
	const rootElement = document.documentElement;

	rootElement.dataset.theme = colorMode;
	rootElement.style.colorScheme = colorMode;
	rootElement.classList.remove('light', 'dark');
	rootElement.classList.add(colorMode);
};

export const useColorMode = () => {
	const colorMode = useState<ColorMode>('color-mode', () => 'dark');
	const followsSystemColorMode = useState(
		'color-mode-follows-system',
		() => true
	);

	let colorModeMediaQuery: MediaQueryList | undefined;

	const handleSystemColorModeChange = (event: MediaQueryListEvent) => {
		if (!followsSystemColorMode.value) {
			return;
		}

		colorMode.value = event.matches ? 'dark' : 'light';
		applyColorMode(colorMode.value);
	};

	const toggleColorMode = () => {
		const rootColorMode = document.documentElement.dataset.theme;
		const currentColorMode = isColorMode(rootColorMode ?? null)
			? rootColorMode
			: colorMode.value;
		const nextColorMode = currentColorMode === 'dark' ? 'light' : 'dark';

		followsSystemColorMode.value = false;
		colorMode.value = nextColorMode;
		applyColorMode(nextColorMode);
		storeColorMode(nextColorMode);
	};

	onMounted(() => {
		const storedColorMode = getStoredColorMode();
		colorModeMediaQuery = getColorModeMediaQuery();
		followsSystemColorMode.value = storedColorMode === null;
		colorMode.value =
			storedColorMode ?? getSystemColorMode(colorModeMediaQuery);
		applyColorMode(colorMode.value);

		try {
			colorModeMediaQuery?.addEventListener(
				'change',
				handleSystemColorModeChange
			);
		} catch {
			colorModeMediaQuery = undefined;
		}
	});

	onBeforeUnmount(() => {
		try {
			colorModeMediaQuery?.removeEventListener(
				'change',
				handleSystemColorModeChange
			);
		} catch {
			// The listener was not registered when the media-query API is unavailable.
		}
	});

	return {
		colorMode: readonly(colorMode),
		toggleColorMode,
	};
};
