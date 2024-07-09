"use client";
import { useChat } from "../managers/chatContext";
import Image from "next/image";

export default function ChatGetStarted() {
	const { voicelog } = useChat();
	return (
		<div className={voicelog.length > 0 ? "hidden " : "" + "pt-10"}>
			<div className={"grid px-10 grid-cols-1 p-2 lg:grid-cols-3 w-full"}>
				<div className="lg:col-span-2">
					<h1 className="text-highlights text-extra-large">Xin chào!</h1>
					<h1 className=" text-gray-600 dark:text-gray-300 text-extra-large opacity-30">
						Hãy nhấn vào nút bên dưới để bắt đầu hội thoại
					</h1>
					<p className="text-gray-600 opacity-30">
						Chỉ hỗ trợ văn bản thành giọng nói và ngược lại trên trình duyệt
						Chrome và Edge
					</p>
				</div>
				<Image
					src="/robot_stand_and_look.png"
					width={300}
					height={400}
					className="right-0 bottom-0 lg:top-0 order-first"
					alt="robot image"
				/>
			</div>
			<div className="h-64"></div>
		</div>
	);
}
