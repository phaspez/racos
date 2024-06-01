"use client";

import { useChat } from "../managers/chatContext";
import { CiChat1 } from "react-icons/ci";

export function ChatGetStartedPreviewPrompt({ prompt }) {
	const { setInputText } = useChat();

	const handleClick = () => {
		setInputText(prompt);
		document.getElementById("prompt-input").focus();
	};

	return (
		<button
			className="chat-response hover:bg-black/10 transition-all duration-100 rounded-lg p-3"
			onClick={handleClick}
		>
			<div className="flex items-center gap-2">
				<span className="text-black">
					<CiChat1 />
				</span>
				<p className=" text-left">{prompt}</p>
			</div>
		</button>
	);
}
