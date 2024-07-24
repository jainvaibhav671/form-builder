import { useEffect, useMemo, useState } from "react";

export default function useSystemTheme() {
	const query = "(prefers-color-scheme: dark)";

	const mediaQuery = useMemo(() => window.matchMedia(query), []);
	const [isDark, setIsDark] = useState(mediaQuery.matches);

	useEffect(() => {
		const onChange = () => setIsDark(mediaQuery.matches);
		mediaQuery.addEventListener("change", onChange);

		return () => mediaQuery.removeEventListener("change", onChange);
	}, [mediaQuery]);

	return isDark ? "dark" : "light";
}
