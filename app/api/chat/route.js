//import { google } from "@ai-sdk/google";
import { streamText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { sendPrompt } from "@/app/middleware/CaasBackend"

export const maxDuration = 60

export async function POST(req) {
	"use server"

	const google = createGoogleGenerativeAI({
		apiKey: process.env.API_KEY,
	})

	const { messages } = await req.json()
	let caasWarpedPrompt = "xin chào!"
	try {
		const caasRes = await sendPrompt({
			prompt: messages[messages.length - 1].content,
		})

		if (caasRes.success && caasRes.answer) {
			caasWarpedPrompt = caasRes.answer
		} else {
			caasWarpedPrompt += messages[messages.length - 1].content
		}
	} catch (error) {
		caasWarpedPrompt += messages[messages.length - 1].content
	}

	const processedMessages = [...messages]
	processedMessages[processedMessages.length - 1].content = caasWarpedPrompt

	// Create properly formatted messages for Gemini
	const formattedMessages = processedMessages.map((msg) => ({
		role: msg.role === "user" ? "user" : "assistant",
		content: msg.content,
	}))

	//messages[messages.length - 1].content = caasWarpedPrompt
	const result = await streamText({
		model: google("gemini-2.0-flash-lite"),
		messages: formattedMessages,
		//prompt: caasWarpedPrompt,
	})

	return result.toDataStreamResponse()

	//return result.toAIStreamResponse()
}
