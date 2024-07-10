"use client";

import { useState, useEffect, useContext, createContext } from "react";
import { useTheme } from "next-themes";
import { setCookie, getCookie, hasCookie } from "cookies-next";

const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	const checkItem = (item, cond) => {
		//try {
		// 	if (ISSERVER) {
		// 		return localStorage.getItem(item) === (cond || "true");
		// 	}
		// 	return false;
		// } catch (error) {
		// 	console.log("Error: ", error);
		// 	return false;
		// }
		if (hasCookie(item)) {
			return getCookie(item) === (cond || "true");
		}
		return item === "voiceAutoSpeak";
	};

	// const setItem(item, value){
	// 	setCookie(item, value);
	// }

	const [isDarkMode, setIsDarkMode] = useState(theme === "dark" || false);
	const [isChatAutoSpeak, setIsChatAutoSpeak] = useState(
		checkItem("chatAutoSpeak")
	);
	const [isVoiceAutoSpeak, setIsVoiceAutoSpeak] = useState(
		checkItem("voiceAutoSpeak")
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
		setIsDarkMode(checkItem("theme", "dark"));
		setIsChatAutoSpeak(checkItem("chatAutoSpeak"));
		setIsVoiceAutoSpeak(checkItem("voiceAutoSpeak"));
		//}
	}, []);

	useEffect(() => {
		if (typeof window !== "undefined" && isDarkMode !== null) {
			let html = document.documentElement;
			html.classList.remove("light");
			html.classList.remove("dark");
			html.setAttribute("data-theme", isDarkMode ? "dark" : "light");
			html.classList.add(theme);

			//localStorage.setItem("theme", isDarkMode ? "dark" : "light");
			setCookie("theme", isDarkMode ? "dark" : "light");
			console.log("Theme set to: ", localStorage.getItem("theme"));
		}
	}, [theme]);

	useEffect(() => {
		// if (typeof window !== "undefined" && isDarkMode !== null) {
		// 	localStorage.setItem("chatAutoSpeak", isChatAutoSpeak ? "true" : "false");
		// 	localStorage.setItem(
		// 		"voiceAutoSpeak",
		// 		isVoiceAutoSpeak ? "true" : "false"
		// 	);
		// }
		setCookie("chatAutoSpeak", isChatAutoSpeak ? "true" : "false");
		setCookie("voiceAutoSpeak", isVoiceAutoSpeak ? "true" : "false");
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
