"use client";

import { useChat } from "ai/react";
import PromptInput from "./PromptInput";
import ChatResponse from "./ChatResponse";
import Textarea from "react-textarea-autosize";
import { IoMdSend } from "react-icons/io";
import { Spinner } from "flowbite-react";
import { useEffect, useRef } from "react";
import ChatGetStarted from "./VoiceGetStarted";
import VoiceInput from "./VoiceInput";

export default function VoiceContainer() {
	const {
		messages,
		input,
		handleInputChange,
		handleSubmit,
		setInput,
		append,
		isLoading,
	} = useChat();
	const buttonRef = useRef(null);

	// const [textInput, setTextInput] = useState("");
	// const { isListening, transcript, startListening, stopListening } =
	// 	useSpeechToText({ continuous: true, lang: "vi-VN" });
	// const { speakText } = useTextToSpeech({ lang: "vi-VN" });

	// const startStopListening = async () => {
	// 	if (isListening) {
	// 		let text = isListening
	// 			? textInput +
	// 			  (transcript.length ? (textInput.length ? " " : "") + transcript : "")
	// 			: textInput;
	// 		setIsLoading(true);
	// 		let res = await handleSendPrompt(text);
	// 		if (res) {
	// 			appendVoicelog(res.user, res.bot);
	// 			// setVoiceAnswer(res.bot);
	// 			// setVoiceQuestion(res.user);
	// 			speakText(res.bot);
	// 		}

	// 		setIsLoading(false);
	// 		stopVoiceInput();
	// 	} else {
	// 		startListening();
	// 		setTextInput("");
	// 	}
	// };

	// const stopVoiceInput = () => {
	// 	stopListening();
	// 	setTextInput(
	// 		(prevVal) =>
	// 			prevVal +
	// 			(transcript.length ? (prevVal.length ? " " : "") + transcript : "")
	// 	);
	// };

	return (
		<>
			<div className="w-full pt-0">
				{messages.length === 0 ? <ChatGetStarted /> : null}
				<div className="flex flex-col w-full pt-6 pb-24 mx-auto stretch px-10">
					{messages.map((m) => (
						<ChatResponse response={m} key={m.id} />
					))}
				</div>
			</div>
			{/* voice input section */}
			{/* <div className="fixed w-full bottom-0 bg-gradient-to-t text-black from-white to-transparent">
				<div className="grid px-2 text-center text-wrap overflow-hidden place-items-center">
					<div>
						<p
							className={
								!(isListening && textInput.length == 0)
									? "hidden"
									: "text-lg text-opacity-60 font-light bg-white rounded-lg shadow-md"
							}
						>
							{isListening
								? textInput +
								  (transcript.length
										? (textInput.length ? " " : "") + transcript
										: "")
								: textInput}
						</p>
					</div>
					<div className="grid grid-cols-3 place-items-center">
						<div>
							<div className={isListening ? "" : "hidden"}>
								<Button
									onClick={() => {
										stopListening();
										setTextInput("");
									}}
									color="transparent"
									className="border-2 bg-red-500 rounded-full aspect-square hover:bg-red-700 text-white"
								>
									<div className="w-full h-full grid items-center p-0 m-0">
										<IoIosClose className="text-3xl" size={20} />
									</div>
								</Button>
							</div>
						</div>
						<Button
							disabled={isLoading}
							onClick={startStopListening}
							color={isListening ? "red" : "blue"}
							className="rounded-full w-20 m-1 aspect-square text-center align-middle"
						>
							<div className="w-full h-full grid items-center">
								{!isLoading ? (
									isListening ? (
										<IoMdSend size={24} offset={[0, -100]} />
									) : (
										<BiSolidMicrophone size={24} />
									)
								) : (
									<Spinner aria-label="Default status example" size={"lg"} />
								)}
							</div>
						</Button>
					</div>
				</div>
			</div> */}
			<VoiceInput
				textInput={input}
				isLoading={isLoading}
				setTextInput={setInput}
				submit={append}
			/>
		</>
	);
}
