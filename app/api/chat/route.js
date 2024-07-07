//import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import axios from "axios";
import { sendPrompt } from "@/app/middleware/CaasBackend";

export const maxDuration = 60;

export async function POST(req) {
	"use server";

	const google = createGoogleGenerativeAI({
		apiKey: process.env.API_KEY,
	});

	const { messages } = await req.json();
	let caasWarpedPrompt = "xin chào!";
	try {
		const caasRes = await sendPrompt({
			prompt: messages[messages.length - 1].content,
		});

		if (caasRes.success && caasRes.answer) {
			caasWarpedPrompt = caasRes.answer;
		} else {
			caasWarpedPrompt =
				"hãy trả lời câu hỏi này, từ chối trả lời nếu câu hỏi không liên quan đến việc học tập:\n";
			caasWarpedPrompt += messages[messages.length - 1].content;
			//caasWarpedPrompt += messages;
		}
	} catch (error) {
		console.log(error);
		caasWarpedPrompt =
			"hãy trả lời câu hỏi này, từ chối trả lời nếu câu hỏi không liên quan đến việc học tập:\n";
		caasWarpedPrompt += messages[messages.length - 1].content;
		//caasWarpedPrompt += messages;
	}

	messages[messages.length - 1].content = caasWarpedPrompt;
	// console.log("==============================");
	// console.log(caasWarpedPrompt);
	// console.log(messages);
	const result = await streamText({
		model: google("models/gemini-1.5-flash-latest"),
		prompt: caasWarpedPrompt,
		system:
			"Trả lời ngắn gọn, và từ chối trả lời nếu câu hỏi không về việc học tập",
	});

	return result.toAIStreamResponse();
}
