"use client";

import { useChat } from "ai/react";
import PromptInput from "./PromptInput";
import ChatResponse from "./ChatResponse";
import Textarea from "react-textarea-autosize";
import { IoMdSend } from "react-icons/io";
import { Spinner } from "flowbite-react";
import { useEffect, useRef } from "react";
import ChatGetStarted from "./ChatGetStarted";

export default function ChatContainer() {
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		isLoading,
		setInput,
	} = useChat();
	const buttonRef = useRef(null);

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
		<div className="w-full pt-0">
			{messages.length === 0 ? <ChatGetStarted /> : null}
			<div className="flex flex-col w-full pt-6 pb-24 mx-auto stretch px-10">
				{messages.map((m) => (
					<ChatResponse response={m} key={m.id} />
				))}
			</div>

			<div className="fixed w-full bottom-5 py-1 pt-1 -mb-5 bg-gradient-to-t text-black from-white to-transparent">
				<div className="lg:px-24 md:px-16 px-4">
					<form onSubmit={handleSubmit}>
						<div className="flex px-2 text-center text-wrap overflow-hidden align-middle justify-center">
							<Textarea
								value={input}
								tabIndex={0}
								rows={1}
								id="prompt-input"
								placeholder="Bạn muốn hỏi gì?"
								//disabled={isLoading}
								spellCheck={true}
								className="rounded-lg w-full resize-none p-4 my-2 bg-gray-200 dark:bg-gray-700  grow overflow-visible"
								onChange={handleInputChange}
							/>

							<div className="relative text-xl flex flex-col px-2 overflow-hidden max-h-60 bg-background">
								{isLoading ? ( // is loading
									<div className="p-2 mt-2">
										<Spinner aria-label="Default status example" size={"lg"} />
									</div>
								) : (
									<button
										className="rounded-md bg-blue-700 hover:bg-blue-800 text-white p-2 mt-2 disabled:bg-gray-500 disabled:hover:bg-gray-600"
										style={{ alignSelf: "flex-start" }}
										type="submit"
										id="submit-prompt"
										ref={buttonRef}
									>
										<IoMdSend />
									</button>
								)}
							</div>
						</div>
					</form>
					<p className="text-xs p-0 m-0 text-center">
						Shift + Enter để gửi. Thông tin có thể đưa ra một cách không chính
						xác, hãy xác minh câu trả lời của AI.
					</p>
				</div>
			</div>
		</div>
	);
}
