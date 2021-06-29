//Dependency for establishing the html path
var path = require("path");

//Linking the HTML documents
module.exports = function (app){
    
    app.get("/exercise", function (req,res){
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

    app.get("/", function(req,res){
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", function(req, res){
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

}