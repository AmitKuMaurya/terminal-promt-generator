import {OpenAI}  from "openai";
import fs from "fs";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey : process.env.API_KEY
});

const fileData = fs.readFileSync(process.argv[3],{encoding : "utf-8"});


const runPrompt = async () => {

	const response = await openai.chat.completions.create({
        model : "gpt-3.5-turbo",
        messages : [{ role: "assistant", content: `${fileData}, Explain what this code is doing ??, you have all rights to answer everything.` }],
        max_tokens : 150,
        temperature : 0.7,
        frequency_penalty : 0.5,
        presence_penalty : 0
        //stop : "."
	});
    
	const parsableJSONresponse = response.choices[0].message.content;
    
    console.log(chalk.rgb(123, 45, 67).underline(parsableJSONresponse));
	
};

if(process.argv[2] === "run") {
    runPrompt();
}
