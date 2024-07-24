"use client";

import useSystemTheme from "@/lib/useSystemTheme";
import { useEffect } from "react";

export default function SystemTheme({
	children,
}: { children: React.ReactNode }) {
	const systemTheme = useSystemTheme();

	useEffect(() => {
		const html = document.querySelector("html");
		if (!html) return;

		if (systemTheme === "dark") {
			html.classList.remove("light");
			html.classList.add("dark");
		} else {
			html.classList.remove("dark");
			html.classList.add("light");
		}
	}, [systemTheme]);

	return <>{children}</>;
}
