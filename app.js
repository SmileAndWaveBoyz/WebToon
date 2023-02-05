const express = require ("express");
const ejs = require("ejs");
const app = express();
 	
app.set("view engine", "ejs");
app.use(express.static("public"));//This allows the css because it's in the public folder

app.get("/", function(req, res){
    res.render("home");
});

app.get("/about", function(req, res){
    res.render("about");
});

app.get("/episodes", function(req, res){
    res.render("episodes");
});

app.listen(process.env.PORT || 3000, function(){
    console.log("Server started on port 3000");
});
