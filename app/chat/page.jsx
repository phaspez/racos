import PromptInput from "../components/PromptInput";
import ChatGetStarted from "../components/ChatGetStarted";
import { ChatProvider } from "../managers/chatContext";
import ChatContainer from "../components/ChatContainer";

export default function Home() {
	return (
		<ChatProvider>
			<main className="p-0 m-0 flex-col items-center justify-between px-0 text-white dark:text-dark">
				<div className="flex w-full h-screen justify-center px-10">
					<ChatGetStarted></ChatGetStarted>
					<ChatContainer />
				</div>

				<PromptInput></PromptInput>
			</main>
		</ChatProvider>
	);
}
