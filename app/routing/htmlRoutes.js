var path = require("path");

module.exports = function(app){


  // Direct to home page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });


  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  // DEFAULT ROUTE
  // ALWAYS KEEP THIS AT THE END OR ALL PAGES WILL DEFAULT TO THIS
  app.use(function(req,res){
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
