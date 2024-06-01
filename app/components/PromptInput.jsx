"use client";

import { useEffect, useRef } from "react";
import Textarea from "react-textarea-autosize";
import { IoMdSend } from "react-icons/io";
import { Spinner } from "flowbite-react";
import { useChat } from "../managers/chatContext";
import { runTextPrompt } from "../middleware/gemini";

async function handleSendPrompt(prompt) {
	let result = await runTextPrompt(prompt);
	return {
		user: prompt,
		bot: result,
	};

	// return new Promise((resolve, reject) => {
	// 	setTimeout(() => {
	// 		resolve({
	// 			user: prompt,
	// 			bot: "This is a test response. Please implement your backend calls here.",
	// 		});
	// 	}, 1000);
	// });
}

export default function PromptInput() {
	const { inputText, setInputText, appendChatlog, isLoading, setIsLoading } =
		useChat();
	const buttonRef = useRef(null);
	//const [inputValue, setInputValue] = useState("");
	//const [isLoading, setIsLoading] = useState(false);

	const handlePrompt = async () => {
		let response =
			(await handleSendPrompt(inputText)) ||
			"An error has occurred. Please try again";
		if (response) {
			setInputText("");
			console.log(response);
			appendChatlog(response.user, response.bot);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.shiftKey && event.key === "Enter") {
				event.preventDefault();
				if (buttonRef.current) {
					buttonRef.current.click();
				}
			}
		};

		document.addEventListener("keydown", handleKeyDown);

		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<div className="fixed w-full bottom-5 py-1 pt-10 -mb-5 bg-gradient-to-t text-black from-white to-transparent">
			<div className="lg:px-24 md:px-16 px-4">
				<div className="flex px-2 text-center text-wrap overflow-hidden align-middle justify-center">
					<Textarea
						value={inputText}
						tabIndex={0}
						rows={1}
						id="prompt-input"
						placeholder="Bạn muốn hỏi gì?"
						disabled={isLoading}
						spellCheck={true}
						className="rounded-lg resize-none p-4 my-2 bg-gray-200 dark:bg-gray-700  grow overflow-visible"
						onChange={(e) => {
							e.preventDefault();
							let newInputValue = e.target.value;
							setInputText(newInputValue);
						}}
					/>

					<div className="relative text-xl flex flex-col px-2 overflow-hidden max-h-60 bg-background">
						{isLoading ? (
							<div className="p-2 mt-2">
								<Spinner aria-label="Default status example" size={"lg"} />
							</div>
						) : (
							<button
								className="rounded-md bg-blue-700 hover:bg-blue-800 text-white p-2 mt-2 disabled:bg-gray-500 disabled:hover:bg-gray-600"
								style={{ alignSelf: "flex-start" }}
								type="submit"
								id="submit-prompt"
								disabled={inputText.length === 0}
								ref={buttonRef}
								onClick={() => {
									handlePrompt();

									setIsLoading(true);
								}}
							>
								<IoMdSend />
							</button>
						)}
					</div>
				</div>
				<p className="text-xs p-0 m-0 text-center">
					Shift + Enter để gửi. Thông tin có thể đưa ra một cách không chính
					xác, hãy xác minh câu trả lời của AI.
				</p>
			</div>
		</div>
	);
}
