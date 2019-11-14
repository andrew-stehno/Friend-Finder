const friendsData = require("../data/friends.js");



// Routing:==============================
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        let object = {
            name: "",
            photo: "",
            score: Infinity
        }
        //Upon req.body we have the structure of a `friend`
        let scoreCounter;
        let userData = req.body;
        //we want to iterate through stored members AKA friendsData
        for (let i = 0; i < friendsData.length; i++) {
            scoreCounter = 0;
            let friends = friendsData[i];
            console.log(friends);
            console.log(scoreCounter);
            console.log(object.score);

            //We want to look at each friend and then iterate through each friends scores
            for (let j = 0; j < friends.scores[j]; j++) {

                scoreCounter += Math.abs(userData.scores[j] - friends.scores[j]);
                if (scoreCounter <= object.score) {
                    console.log("Best match: " + friends.name);
                    object.name = friends.name;
                    object.photo = friends.photo;
                    object.score = scoreCounter;
                }
            }

        }
        
        friendsData.push(req.body);
        res.json(object);
    })
    
};

