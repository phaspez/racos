"use client";

import { IoMdSend } from "react-icons/io";
import { Button, Spinner } from "flowbite-react";
import { useSpeechToText } from "../managers/textToSpeech";
import { useState } from "react";
import { BiSolidMicrophone } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { runTextPrompt } from "../middleware/gemini";
import { useChat } from "../managers/chatContext";

async function handleSendPrompt(prompt) {
	let result = await runTextPrompt(prompt);
	console.log(result);
	return {
		user: prompt,
		bot: result,
	};
}

export default function VoiceInput() {
	const [textInput, setTextInput] = useState("");
	const {
		voiceAnswer,
		setVoiceAnswer,
		setVoiceQuestion,
		isLoading,
		setIsLoading,
	} = useChat();
	const { isListening, transcript, startListening, stopListening } =
		useSpeechToText({ continuous: true, lang: "vi-VN" });

	const startStopListening = async () => {
		if (isListening) {
			let text = isListening
				? textInput +
				  (transcript.length ? (textInput.length ? " " : "") + transcript : "")
				: textInput;
			setIsLoading(true);
			let res = await handleSendPrompt(text);
			if (res) {
				setVoiceAnswer(res.bot);
				setVoiceQuestion(res.user);
			}

			setIsLoading(false);
			stopVoiceInput();
		} else {
			startListening();
			setTextInput("");
		}
	};

	const stopVoiceInput = () => {
		stopListening();
		setTextInput(
			(prevVal) =>
				prevVal +
				(transcript.length ? (prevVal.length ? " " : "") + transcript : "")
		);
		console.log("svi: ", textInput);
	};

	return (
		<div className="fixed w-full bottom-0 bg-gradient-to-t text-black from-white to-transparent">
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
		</div>
	);
}
