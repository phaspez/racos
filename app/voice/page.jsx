"use client";

import VoiceGetStarted from "../components/VoiceGetStarted";
import VoiceInput from "../components/VoiceInput";
import { ChatProvider, useChat } from "../managers/chatContext";
import VoiceResponse from "../components/VoiceResponse";

export default function Home() {
	return (
		<ChatProvider>
			<div className="w-full bottom-5 py-1 pt-0 ">
				<div className="lg:px-24 md:px-16 px-4">
					<VoiceGetStarted />
					<VoiceResponse />
					<div className=" w-full h-30"></div>
				</div>
			</div>
			<VoiceInput />
		</ChatProvider>
	);
}
