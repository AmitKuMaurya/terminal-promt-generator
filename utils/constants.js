export const FILE_READING_CONTENT = [
    {
      type: "input",
      name: "fileName",
      message: "Give path root to the file needs to be explain !",
      validate: (input) => {
        return input.trim() !== "" ? true : "File path cannot be empty !";
      },
    },
    {
      type: "input",
      name: "question",
      message: "Ask any revelent question about it !",
      validate: (input) => {
        return input.trim() !== "" ? true : "Question cannot be empty !";
      },
    },
  ]