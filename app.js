const express = require("express");
const bodyParser = require("body-parser");
var lookup = require("binlookup")();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let numbers = [];
let listItems = [];

app.get("/", function (req, res) {
    //     listItems = [];
    res.render("detail", { listItems: listItems });
    //     listItems = [];
});

app.post("/", function (req, res) {
    const input = req.body.numbers;
    // callback
    let listItems = [];
    lookup(input, function (err, data) {
        if (err) return console.error(err);
        listItems.push(data);
        res.render("detail", { listItems: listItems });
        listItems = [];
    });

    //     res.redirect("/");
});

let port = process.env.PORT;
if (port == null || port == "") {
    port = 3030;
}

app.listen(port, function () {
    console.log("Server 3000 is up and running");
});
