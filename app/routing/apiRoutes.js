const friendsData = require("../data/friends.js");

// Routing:==============================
module.exports = function(app) {

app.get ("/api/friends", function(req, res) {
    res.json(friendsData);
});

app.post("/api/friends", function(req, res) {
    //pon req.body we have the structure of a `friend`
    //we want to iterate through stored members AKA friendsData
    //We want to look at each friend and then iterate through each friends scores
    //Look at each individual score and match it up with the index position 
    //of the incoming scores IE user[0].scores[0] should match up to same question as incomingScores[0]
    //we should take the abs value of the subtraction of the two to get a difference
    //All the while in the outer loop we need a counter varibale keeping track of the total difference for each inner loop
    //So then you check to see is the total difference less than your current lowest
    




    friendsData.push(req.body);
      res.json(friendsData);
})

};

