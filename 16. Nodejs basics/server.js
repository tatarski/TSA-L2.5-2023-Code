
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
let myCanvas = createCanvas(100, 100);
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
app.listen(port, function () {
    console.log("SURVUVA POCHNA DA SLUSHA NA PORT " + port);
});