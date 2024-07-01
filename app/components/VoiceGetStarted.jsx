"use client";
import { ChatGetStartedPreviewPrompt } from "./ChatGetStartedPreviewPrompt";
import { useChat } from "../managers/chatContext";
import Image from "next/image";

export default function ChatGetStarted() {
	const { voiceAnswer, setVoiceAnswer } = useChat();
	return (
		<div className={voiceAnswer !== "" ? "hidden " : "" + "pt-10"}>
			<div className={"grid grid-cols-1 p-2 lg:grid-cols-3 w-full px-2 pt-10"}>
				<div className="lg:col-span-2">
					<h1 className="text-highlights text-extra-large">Xin chào!</h1>
					<h1 className=" text-gray-600 text-extra-large opacity-30">
						Hãy nhấn vào nút bên dưới để bắt đầu hội thoại
					</h1>
				</div>
				<Image
					src="/robot_stand_and_look.png"
					width={300}
					height={400}
					className="right-0 bottom-0 lg:top-0 order-first"
				/>
			</div>
			<div className="h-64"></div>
		</div>
	);
}
