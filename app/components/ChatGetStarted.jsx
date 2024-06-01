"use client";
import { ChatGetStartedPreviewPrompt } from "./ChatGetStartedPreviewPrompt";
import { useChat } from "../managers/chatContext";

export default function ChatGetStarted() {
	const { chatlog, inputText, setInputText } = useChat();

	let commonQuestions = [
		"Bạn làm được gì?",
		"Học phí của trường Đại Học Cần Thơ là bao nhiêu?",
		"Trường Đại Học Cần Thơ có bao nhiêu ngành?",
		"Điểm đầu vào của ngành Kế Toán là bao nhiêu?",
	];

	return (
		<>
			<div
				className={
					(chatlog.length >= 1 ? "hidden " : "") +
					"bg-white bg-opacity-40 rounded-lg w-full h-min px-2 md:mx-6 lg:mx-10 py-6 my-4 md:mt-16 lg:mt-20 shadow-xl"
				}
			>
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
								key={index}
							/>
						))}
					</div>
				</div>
			</div>
			<div className="h-64"></div>
		</>
	);
}
