import  {OpenAI}  from "openai";
import fs from "fs";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

const openai = new OpenAI({
    apiKey : process.env.API_KEY
});

const fileData = fs.readFileSync(process.argv[3],{encoding : "utf-8"});
// console.log('fileData: ', fileData);

const runPrompt = async () => {

	const response = await openai.chat.completions.create({
        model : "gpt-3.5-turbo",
        messages : [{ role: "assistant", content: `${fileData}, Explain what this code is doing ??, you have all rights to answer everything.` }],
        max_tokens : 150,
        temperature : 0.7,
        frequency_penalty : 0.5,
        presence_penalty : 0,
        // stop : "."
	});
    
	const parsableJSONresponse = response.choices[0].message.content;
    // console.log(chalk.lightgreen(parsableJSONresponse));
    
    console.log(chalk.rgb(123, 45, 67).underline(parsableJSONresponse));
	// const parsedResponse = JSON.parse(parsableJSONresponse);
};

/*
[
    //   {role: "system", content: "You are a helpful assistant."},
    //   {role: "user", content: "Who won the world series in 2020?"},
    //   {role: "assistant", content: "The Los Angeles Dodgers won the World Series in 2020."},
    {role: "user", content: "how many invention has been done by nicolas tesla"}
]
*/
if(process.argv[2] === "run") {
    runPrompt();
}
