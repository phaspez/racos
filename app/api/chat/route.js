//import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { createGoogleGenerativeAI } from "@ai-sdk/google";

export const maxDuration = 60;

export async function POST(req) {
	"use server";

	const google = createGoogleGenerativeAI({
		apiKey: process.env.API_KEY,
	});

	const { messages } = await req.json();

	const result = await streamText({
		model: google("models/gemini-1.5-pro-latest"),
		messages,
	});

	return result.toAIStreamResponse();
}
