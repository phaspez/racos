"use client";

import VoiceGetStarted from "../components/VoiceGetStarted";
import VoiceInput from "../components/VoiceInput";
import { ChatProvider, useChat } from "../managers/chatContext";
import VoiceContainer from "../components/VoiceContainer";

export default function Home() {
	return (
		<ChatProvider>
			<div className="w-full bottom-5 py-1 pt-0 ">
				<div className="">
					<VoiceContainer />
					<div className=" w-full h-30"></div>
				</div>
			</div>
		</ChatProvider>
	);
}
