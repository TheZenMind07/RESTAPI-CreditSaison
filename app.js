const express = require("express");
const https = require("https");
const lookup = require("binlookup")();
const app = express();

app.get("/", function (req, res) {
    //     const url = "https://lookup.binlist.net/45717360";
    //     https.get(url, function (response) {
    //         console.log(response);
    //     });
    lookup("45717360", function (err, data) {
        if (err) return console.error(err);

        console.log(data);
    });
});

app.listen(3000, function () {
    console.log("Server is running at port 3000");
});