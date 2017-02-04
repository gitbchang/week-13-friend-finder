// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var friendsObj = require("./app/data/friends.js");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// console.log(friendsObj);

// How do i require the app.get from a different file?
app.get("/", function(req, res) {

  res.sendFile(path.join(__dirname, "/app/public/home.html"));
});


app.get("/survey", function(req, res) {
  // res.send("Welcome to the Star Wars Page!")
  res.sendFile(path.join(__dirname, "/app/public/survey.html"));
});

app.get("/api/friends", function(req, res) {
  // res.sendFile(path.join(__dirname, "/app/data/friends.js"));
  res.json(friendsObj);
});


// Create New Friends - takes in JSON input
app.post("/api/new", function(req, res) {
  var newFriend = req.body;
  friendsObj.push(newFriend);
  res.json(newFriend);

});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
