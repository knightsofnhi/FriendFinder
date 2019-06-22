const friendsData = require("../data/friends");

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
        const points = 0;
        const score1 = 0;
        const score2 = 0;
        const highScore = 0;
        const bestMatch;
        friendsData.forEach(element => {
            for (let i = 0; i < element.scores.length; i++) {
                if (element.scores[i] === newFriend.scores[i]) {
                    points++;
                }
                score1 = points;
                if (score1 > score2) {
                    highScore = score1;
                    bestMatch = element;
                } 
                score2 = score1;
            }
        });
        friendsData.push(req.body);
        res.sendStatus(200);
    });
}


