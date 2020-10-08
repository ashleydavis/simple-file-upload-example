# Simplest possible example of uploading files to Node.js / Example 1

This subdirectory contains the first example. 

It is the absolute simplest code example for uploading a file from a web page to a Node.js HTTP server (Express.js).

To run this code you need [Node.js](https://nodejs.org/) installed.

## Setup

Download the code repo or clone it using Git.

Open a terminal, then change directory into the `example-1` subdirectory:

```bash
cd simple-file-upload-example/example-1
```

Now install dependencies (just Express.js):

```bash
npm install
```

## Run the code

Now you can run the example code:

```bash
npm start
```

Navigate your browser to http://localhost:3000.

Click the "Choose files" button. Select some files and click the Open button.

These files will be uploaded to the backend. You can look in the `uploads` subdirectory to see that they have been uploaded.
