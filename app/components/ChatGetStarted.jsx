"use client";
import { ChatGetStartedPreviewPrompt } from "./ChatGetStartedPreviewPrompt";
//import { useChat } from "../managers/chatContext";
import Image from "next/image";
import { useChat } from "ai/react";

export default function ChatGetStarted({ setInput }) {
	//const { chatlog, inputText, setInputText } = useChat();

	let commonQuestions = [
		"Bạn làm được gì?",
		"Học phí của trường Đại Học Cần Thơ là bao nhiêu?",
		"Trường Đại Học Cần Thơ có bao nhiêu ngành?",
		"Điểm đầu vào của ngành Kế Toán là bao nhiêu?",
	];

	return (
		<>
			<div
				className="bg-white bg-opacity-60 rounded-lg h-min px-2 md:mx-6 lg:mx-10 py-6 my-4 md:mt-10 lg:mt-10 shadow-xl \
					relative overflow-clip"
			>
				<Image
					src="/robot_stand_and_look.png"
					width={300}
					height={400}
					className="absolute right-0 bottom-0 -z-10"
					alt="robot image"
				/>
				<h1 className="text-highlights text-extra-large">Xin chào!</h1>
				<h1 className=" text-gray-600 text-extra-large opacity-30">
					Tôi có thể giúp gì cho bạn?
				</h1>
				<div className="">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-2">
						{commonQuestions.map((question, index) => (
							<ChatGetStartedPreviewPrompt
								prompt={question}
								index={index}
								setInput={setInput}
								key={index}
							/>
						))}
					</div>
				</div>
				<div className=" h-36"></div>
			</div>
		</>
	);
}
