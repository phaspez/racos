import { ChatProvider } from "../managers/chatContext"
import VoiceContainer from "../components/VoiceContainer"

export const metadata = {
	title: "Voice | CAAS",
	description: "Voice with CAAS - Chat-Voice Admissions Advisory Support",
	openGraph: {
		title: "Voice | CAAS",
		description: "Chat with CAAS - Chat-Voice Admissions Advisory Support",
		type: "website",
	},
}

export default function Home() {
	return (
		<ChatProvider>
			<main className="p-0 m-0 flex-col items-center justify-between px-0 text-white dark:text-dark">
				<div className="flex w-full justify-center px-0">
					<VoiceContainer />
				</div>
			</main>
		</ChatProvider>
	)
}
