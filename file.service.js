import fs from "fs/promises";
export const readFileContent = async (fileName) => {
  try {
    const fileData = await fs.readFile(`${fileName}`, { encoding: "utf-8" });
    return fileData;
  } catch (error) {
    console.log({ err: error });
  }
};
