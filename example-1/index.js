const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();

//
// Serves files from the public subdirectory.
//
app.use(express.static("public"));

//
// HTTP POST route to upload a file.
//
app.post("/api/upload", (req, res) => {

    //
    // Just using the frontend name of the file for the name in the backend file system.
    // Don't do this in production!
    // You probably want to choose a unique ID as the file's name in the backend.
    //
    const fileName = req.headers["file-name"];
    const contentType = req.headers["content-type"];
    console.log(`Receiving file ${fileName} with content-type ${contentType}`);

    const localFilePath = path.join(__dirname, "uploads", fileName);
    console.log(`Saving to ${localFilePath}`);

    //
    // Stream the HTTP request body into a file.
    //
    const fileWriteStream = fs.createWriteStream(localFilePath);
    req.pipe(fileWriteStream)
        .on("error", err => {
            console.error("Upload failed.");
            console.error(err && err.stack || err);
            res.sendStatus(500);
        })
        .on("finish", () => {
            console.log(`File was saved to ${localFilePath}`);
            res.sendStatus(200);
        });
});

//
// Starts the HTTP server.
//
app.listen(3000, () => {
    console.log(`Browse to http://localhost:3000`);
});
