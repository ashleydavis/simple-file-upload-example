# Simplest possible example of uploading files to Node.js 

## Example 2

This subdirectory contains the second example. 

This is still a simple example of uploading files to a Node.js server, but it's more complicated than Example 1 because it adds support for `body-parser` which is often used on HTTP route handlers to the parse the body of the request, but unfortunately it's not compatible with uploading binary files, this examples shows how to enable `body-parser` for some routes while it is disabled for other routes (e.g. disabled for file upload routes).

To run this code you need [Node.js](https://nodejs.org/) installed.

## Setup

Download the code repo or clone it using Git.

Open a terminal, then change directory into the `example-2` subdirectory:

```bash
cd simple-file-upload-example/example-2
```

Now install dependencies (Express.js and body-parser):

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

To test the route that accepts the JSON body, click "Make HTTP request with a JSON body". You will see the parsed JSON body printed out in the terminal window.
