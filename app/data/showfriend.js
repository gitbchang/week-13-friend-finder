exports.scoreDiff = function(friendObject, existingFriends){
    var scoreDiffArray = [];
    // score array new friends
    var newUserScores = friendObject.scores;
    // loop through existing friends
    for(var i = 0; i < existingFriends.length;i++){   
      var scoreDiffCount = 0; 
      var existingScoreArray = existingFriends[i].scores;
      // loop through each record to compare differences
      for(var x = 0; x < existingScoreArray.length;x++){        
        var userDiff = Math.abs((newUserScores[x] - existingScoreArray[x]));
          scoreDiffCount += userDiff;          
      }
      // after looping through all scores, push to array
      var friendComparison = {
            name: existingFriends[i].name,
            scoreDifference: scoreDiffCount
          };
          scoreDiffArray.push(friendComparison);
    }

    return scoreDiffArray;
};

exports.getBestFriend = function(friendDiffScores, friendData){
    var lowestScore = 0;
    var bestFriend;
    var bestFriendObject;
    lowestScore += friendDiffScores[0].scoreDifference;
    bestFriend = friendDiffScores[0].name;
    for(var i = 1; i < friendDiffScores.length;i++){
      if(lowestScore > friendDiffScores[i].scoreDifference){
          bestFriend = friendDiffScores[i].name;
      }
      
    }
    
    for(var x = 0; x < friendData.length;x++){
      if(friendData[x].name === bestFriend){
        bestFriendObject = friendData[x];
      }
    }

    return bestFriendObject;
};