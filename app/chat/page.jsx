"use client";
import PromptInput from "../components/PromptInput";
import ChatGetStarted from "../components/ChatGetStarted";
import { ChatProvider } from "../managers/chatContext";
import ChatContainer from "../components/ChatContainer";
import { useChat } from "ai/react";

export default function Home() {
	const { messages } = useChat();
	return (
		<ChatProvider>
			<main className="p-0 m-0 flex-col items-center justify-between px-0 text-white dark:text-dark">
				<div className="flex w-full h-screen justify-center px-0">
					{/* <ChatGetStarted></ChatGetStarted> */}
					<ChatContainer />
				</div>
			</main>
		</ChatProvider>
	);
}
