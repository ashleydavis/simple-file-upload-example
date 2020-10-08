

//
// Uploads a collection of files to the server.
//
function uploadFiles(files) {
    for (let i = 0; i < files.length; ++i) {
        uploadFile(files[i]);
    }
}

//
// Uploads a file from the browser to the server.
//
function uploadFile(file) {

    console.log(`Uploading file ${file.name}`);

    const uploadRoute = `/api/upload`;
    fetch(uploadRoute, {
            body: file,
            method: "POST",
            headers: {
                "file-name": file.name,
                "content-type": file.type,
            },
        })
        .then(() => { 
            console.log(`File uploaded: ${file.name}`);
        })
        .catch((err) => { 
            console.error(`Failed to upload: ${file.name}`);
            console.error(err);
        });
}

