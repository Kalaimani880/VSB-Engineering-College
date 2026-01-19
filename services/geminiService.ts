
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { VSB_KNOWLEDGE_BASE } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getGeminiResponse = async (prompt: string, history: {role: string, parts: {text: string}[]}[] = []) => {
  const currentDate = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: [
        ...history,
        { role: 'user', parts: [{ text: prompt }] }
      ],
      config: {
        systemInstruction: `You are the VSB Engineering College Portal AI Assistant. Use the following context to answer questions accurately about VSB Engineering College. 
        
        Current Date/Time: ${currentDate}
        
        Context:
        ${VSB_KNOWLEDGE_BASE}
        
        Guidelines:
        - If asked about "today's schedule" or "events", refer to the DAILY_SCHEDULES and CAMPUS_UPDATES.
        - If asked about news, check CAMPUS_UPDATES.
        - Be professional, disciplined (matching VSB's culture), and encouraging.
        - If the answer is not in the context, politely state you don't know but suggest contacting college admin.`,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "I'm having trouble connecting to the brain center right now. Please try again in a moment.";
  }
};
