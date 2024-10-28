"use server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { Content } from "@google/generative-ai/server";
import { redirect } from "next/navigation";
const genAI = new GoogleGenerativeAI(process.env.API_KEY ?? "");
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

export async function chat(previousState: Content[], formData: FormData) {
  const msg = formData.get("prompt")?.toString();

  const chat = model.startChat({
    history: previousState,
    generationConfig: {
      maxOutputTokens: 1000000,
    },
  });

  const response = await chat.sendMessage(msg ?? "");

  return [...(await chat.getHistory())];
}
