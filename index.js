import dotenv from "dotenv";
import { createPromptModule } from "inquirer";
import { runPrompt, getOpenAiInstance } from "./openai.service.js";
import { readFileContent } from "./file.service.js";
import { FILE_READING_CONTENT } from "./utils/constants.js";
dotenv.config();

const prompt = createPromptModule();

prompt(FILE_READING_CONTENT)
  .then(async (answer) => {
    console.log('answer: ', answer);
    try {
      const {fileName, question} = answer;

      const fileData = await readFileContent(fileName);
    
      const openai =  getOpenAiInstance();
  
      await runPrompt(openai,fileData, question);
    } catch (error) {
      console.error({ err: error });
    }
  })
  .catch((error) => console.error({ err: error }));
