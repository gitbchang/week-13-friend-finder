var friendData = require("../data/friends.js");
var showFriend = require("../data/showfriend.js");

// app here represents express
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    // display a JSON of all possible friends
    res.json(friendData);
  });



  // Create New Friends and post to friends list
  app.post("/api/new", function (req, res) {
    var newFriend = req.body;

    // Fix the weirdness of the form
    newFriend["scores"] = newFriend['scores[]'];
    delete newFriend['scores[]'];

    //  use external functions
    var friendDiffScores = showFriend.scoreDiff(newFriend, friendData);
    var bestFriend = showFriend.getBestFriend(friendDiffScores, friendData);

    // push new friend to existing friends array
    friendData.push(newFriend);

    // res.json(newFriend);
    res.json(bestFriend);

    /*
        OLD INCLUDED FUNCTION  
        var scoreDiffArray = [];
        // score array new friends
        var newUserScores = newFriend['scores[]'];
        // loop through existing friends
        for(var i = 0; i < friendData.length;i++){   
          var scoreDiffCount = 0; 
          var existingScoreArray = friendData[i].scores;
          // loop through each record to compare differences
          for(var x = 0; x < existingScoreArray.length;x++){        
            var userDiff = Math.abs((newUserScores[x] - existingScoreArray[x]));
              scoreDiffCount += userDiff;          
          }
          // after looping through all scores, push to array
          var friendComparison = {
                name: friendData[i].name,
                scoreDifference: scoreDiffCount
              };
              scoreDiffArray.push(friendComparison);
        }


        // find the lowest score diff
        var lowestScore = 0;
        var bestFriend;
        lowestScore += friendDiffScores[0].scoreDifference;
        bestFriend = friendDiffScores[0].name;
        for(var i = 1; i < friendDiffScores.length;i++){
          if(lowestScore > friendDiffScores[i].scoreDifference){
              bestFriend = friendDiffScores[i].name;
          }
          
        }
        var bestFriendObject;
        for(var x = 0; x < friendData.length;x++){
          if(friendData[x].name === bestFriend){
            bestFriendObject = friendData[x];
          }
        }
    */

  });

};