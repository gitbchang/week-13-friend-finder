app.get("/api/friends", function(req, res) {
  // display a JSON of all possible friends
  res.json(friendsObj);
});

app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  var newFriend = req.body;

  console.log(newFriend);

  // We then add the json the user sent to the character array
  allFriends.push(newFriend);

  // We then display the JSON to the users
  res.json(newFriend);
});
