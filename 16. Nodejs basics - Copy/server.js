
function createCanvas(shir, vis) {
    let canvas = [];
    for(let i = 0; i < shir; i++) {
        canvas[i] = [];
        for(let j = 0; j < vis; j++) {
            canvas[i][j] = {
                r: 255,
                g: 255,
                b: 255
            }
        }
    }
    return canvas;
}
let myCanvas = createCanvas(3, 3);
function changeColor(x, y, red, green, blue) {
    myCanvas[x][y].r=red;
    myCanvas[x][y].g=green;
    myCanvas[x][y].b=blue;
}

let express = require("express");
let app = express();
let port = 3000;

// Какво да прави сървъра, когато получи get заявка към localhost:3000/zelka
app.get('/zelka', function(request_obekt, response_obekt) {
    console.log(response_obekt);
    // Праща HTTP response. Съдържанието на този response е
    // текста, който сме подали като аргумент
    response_obekt.send("ZELKATA E TVOQ");
});
// GET localhost:3000/
app.get('/', function(req, res) {
    res.status(200);
    res.sendFile("C:\\Users\\dimitar\\Desktop\\TSA 2022- 2023\\L2.5\\16. Nodejs basics - Copy\\public\\start.html");
});
app.get('/script.js', function(req, res) {
    res.status(200);
    res.sendFile("C:\\Users\\dimitar\\Desktop\\TSA 2022- 2023\\L2.5\\16. Nodejs basics - Copy\\public\\script.js");
});
app.get('/style.css', function(req, res) {
    res.status(200);
    res.sendFile("C:\\Users\\dimitar\\Desktop\\TSA 2022- 2023\\L2.5\\16. Nodejs basics - Copy\\public\\style.css");
});
app.get('/vurnimimasiv', function(req, res) {
    let arr = [[1,2,3], [4,5,6], 7];
    let str_arr = JSON.stringify(arr);
    // Какъв ще е статус кода на отговора
    res.status(200);
    // Типа на съдържанието е JSON
    res.contentType("application/json")
    // Пращаме JSON текст
    res.send(str_arr);
});
// GET http://localhost:3000/testqueryparams?brPupki=1000&zele=qwerty
app.get('/testqueryparams', function(req, res) {
    // req.query.brPupki е текст -> трябва да го направим на число
    let brPupki = parseInt(req.query.brPupki);
    let zele = req.query.zele;
    console.log(brPupki, zele);
    if(brPupki > 100) {
        res.status(400);
        res.send("Sori grozen si");
        return;
    }

    res.status(200);
    res.send("LELE MN SI HUBAV, eto ti pupkite + 1: " +(brPupki + 1));
});
// GET http://localhost:3000/map
app.get('/map', function(req, res) {
    let myCanvasStr = JSON.stringify(myCanvas);
    res.status(200);
    res.send(myCanvasStr);
});
// Направете тестова GET заявка към http://localhost:3000/map

// PUT http://localhost:3000/place?X=10&Y=3&R=12&G=250&B=100
app.put('/place', function(req, res) {
    
    let X = parseInt(req.query.X), Y = parseInt(req.query.Y), R = parseInt(req.query.R), G = parseInt(req.query.G), B = parseInt(req.query.B);
    if(isNaN(X) || isNaN(Y) || isNaN(R) || isNaN(G) || isNaN(B)) {
        res.status(400);
        res.send("BALUK, X,Y,Z,R,G,B trqbva da sa chisla");
        return;
    }
    if(X < 0 || Y < 0 || X > 2 || Y > 2) {
        res.status(400);
        res.send("BALUK, KOORDINATITE DETO SI MI DAL SA IZVUN TABLICATA");
        return;
    }
    if(R < 0 || R > 255 || G < 0 || G > 255 || B < 0 || B > 255) {
        res.status(400);
        res.send("BALUK, Cvetovete ti sa bugavi");
        return;
    }
    changeColor(X,Y,R,G,B);
    res.status(200);
    res.send("BRAVO, SMENI CVETA");
});
// Направете тестова PUT заявка. Тествайте всяка една от грешните заявки.

// GET http://localhost/ 

app.listen(port, function () {
    console.log("SURVUVA POCHNA DA SLUSHA NA PORT " + port);
});