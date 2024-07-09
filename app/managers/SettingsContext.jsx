"use client";

import { useState, useEffect, useContext, createContext } from "react";
import { useTheme } from "next-themes";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
	const ISSERVER = typeof window === "undefined";
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(theme === "dark" || false);
	const [isChatAutoSpeak, setIsChatAutoSpeak] = useState(
		ISSERVER ? localStorage.getItem("chatAutoSpeak") === "true" : false
	);
	const [isVoiceAutoSpeak, setIsVoiceAutoSpeak] = useState(
		ISSERVER ? localStorage.getItem("voiceAutoSpeak") === "true" : true
	);
	// fast: "models/gemini-1.5-flash-latest"
	// slow: "models/gemini-1.5-pro-latest"
	const [modalOption, setModalOption] = useState(
		"models/gemini-1.5-flash-latest"
	);

	useEffect(() => {
		setMounted(true);
	}, []);

	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		setIsDarkMode(localStorage.getItem("theme") === "dark");
		setIsChatAutoSpeak(localStorage.getItem("chatAutoSpeak") === "true");
		setIsVoiceAutoSpeak(localStorage.getItem("voiceAutoSpeak") === "true");
		//console.log("init: ", localStorage.getItem("theme"));
		//console.log(localStorage.getItem("theme") === "dark");
		//}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && isDarkMode !== null) {
			let html = document.documentElement;
			html.classList.remove("light");
			html.classList.remove("dark");
			html.setAttribute("data-theme", isDarkMode ? "dark" : "light");
			html.classList.add(theme);

			localStorage.setItem("theme", isDarkMode ? "dark" : "light");
			console.log("Theme set to: ", localStorage.getItem("theme"));
		}
	}, [theme]);

	useEffect(() => {
		if (typeof window !== "undefined" && isDarkMode !== null) {
			localStorage.setItem("chatAutoSpeak", isChatAutoSpeak ? "true" : "false");
			localStorage.setItem(
				"voiceAutoSpeak",
				isVoiceAutoSpeak ? "true" : "false"
			);
		}
	}, [isChatAutoSpeak, isVoiceAutoSpeak]);

	useEffect(() => {
		if (isDarkMode == true) {
			setTheme("dark");
		} else {
			setTheme("light");
		}
	}, [isDarkMode]);

	const context = {
		isDarkMode,
		setIsDarkMode,
		isChatAutoSpeak,
		setIsChatAutoSpeak,
		isVoiceAutoSpeak,
		setIsVoiceAutoSpeak,
		modalOption,
		setModalOption,
	};

	if (!mounted) {
		return null;
	}

	return (
		<SettingsContext.Provider value={context}>
			{children}
		</SettingsContext.Provider>
	);
};

export const useSettings = () => {
	const context = useContext(SettingsContext);
	if (context === undefined) {
		throw new Error("useSettings must be used within a SettingsProvider");
	}
	return context;
};
