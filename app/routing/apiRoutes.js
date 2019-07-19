const friendsData = require("../data/friends");
let bestMatch = {};
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function (req, res) {
        const newFriend = req.body;
        let points = 0;
        let score1 = 0;
        let score2 = 0;
        let highScore = 0;

        friendsData.forEach(element => {
            for (let i = 0; i < element.scores.length; i++) {
                if (element.scores[i] === newFriend.scores[i]) {
                    points++;
                }
                score1 = points;
                if (score1 > score2) {
                    bestMatch = element;
                }
                score2 = score1;
            }
        });

        friendsData.push(req.body);
        res.sendStatus(200);

    //     $.post("/api/friends"), data, function(results)
    //     {$("#bf-name").text(results.fullName)
    // }

