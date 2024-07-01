"use client";

import { useEffect } from "react";
import { useChat } from "../managers/chatContext";
import ChatResponse from "./ChatResponse";

export default function ChatContainer() {
	const { chatlog, setChatlog, appendChatlog } = useChat();

	useEffect(() => {}, []);

	return (
		<div
			className={
				chatlog.length === 0 ? "hidden " : "" + "w-full h-min px-0 mt-4"
			}
		>
			<div className="grid grid-cols-1 gap-4">
				{chatlog.map((chat, index) => (
					<ChatResponse response={chat} index={index} key={index} />
				))}
				<div className=" h-40"></div>
			</div>
		</div>
	);
}
