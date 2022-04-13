// appeler les bibliothèques
const express = require("express");
const bodyParser = require("body-parser");


// utiliser les bibliothèques
const app = express();
// app.use = bodyparser fait parti de express (bodyparser permet de transmettre les données suite à la demande post)
app.use(bodyParser.urlencoded({extended: true}))

// dirname permet de chercher la route de lindex html/ sendfile pour nous rentre l'html
app.get('/' ,function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/' ,function(req, res){
    var num1 = Number (req.body.num1);
    var num2 = Number (req.body.num2);
    var resultat = num1 + num2;

    res.send("le resultat est" +" "+ resultat);
});

app.listen(5000, function() {
    console.log("serveur connecté au port 5000");
});