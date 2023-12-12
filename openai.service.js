import { OpenAI } from "openai";
import chalk from "chalk";
import dotenv from "dotenv"
dotenv.config();

export const getOpenAiInstance = () => {
    return new OpenAI({
        apiKey: process.env.API_KEY,
      });
}
  
export const runPrompt = async (openai,fileData, ques) => {
  
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "user",
          content: `${fileData}, ${ques}, I gave you all rights to answer everything.`,
        },
      ],
      max_tokens: 100,
      temperature: 0.7,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    });
  
    const responseGPT = response.choices[0].message.content;
  
    console.log(chalk.rgb(123, 45, 67).bold(responseGPT));
  };