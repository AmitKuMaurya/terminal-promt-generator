## This is a server-side terminal-based application, that reads a file in the very first cmd and generates an explanation as per your questions.

- Video Demonstration of the project.
```HTTP
  https://drive.google.com/file/d/117XXN8t95H_BeGlslRMpLq5qYL21ewFq/view
 ```

### Here are some steps to run the app in your system.

* Clone the project.
```bash
git clone https://github.com/AmitKuMaurya/terminal-promt-generator.git
```

* Go to the root directory
```bash
cd terminal-promt-generator
```

* Install Node Modules.
```bash
npm install or yarn add
```

* Include environment variables. mentioned in(.env.example)
  * copy from it create a .env file and paste it there.

### Now, follow these commands to start the application.
|  Steps | Command           | Example       | Description                                                                |
| :------| :--------         | :-------      | :--------------------------------------                                    |
|    1   | npm run dev       | node index.js | **Required**. to start the server.                                         |
|    2   | ./random.py       | fileName      | **Required**. to retrieve the data to fetch.                               |
|    3   | give prompt       | question      | **Required**. write, What you wanted to know about the content of the file |

* After, that you gonna get an explanation in the terminal.

