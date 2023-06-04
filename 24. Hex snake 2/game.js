let HEX_SIZE =10;
let appleKol = [], appleRed = [];
let igrachKol = 5, igrachRed = 5, posoka = 0;
let updates = 0;
let promqnaKolZaPosoka = [+1, 0, -1, -1, 0, +1],
    promqnaRedZaPosoka = [0, +1, +1, +0, -1, -1];
let starKol = [], starRed = [], opashkaDuljina = 20;
let brKol = 30;
function drawHEX(P, size) {
    let x = P.x,
        y = P.y;
    // vis*vis + (size/2)*(size/2) = size*size
    // vis*vis  = 4/4*size*size - (1/(2*2))*(size)*(size)
    // vis*vis  = 4/4*size*size - (1/4)*(size)*(size)
    // vis*vis = (3/4)*size*size
    // Math.sqrt(vis*vis) = Math.sqrt((3/4)*(size*size))
    // vis = Math.sqrt(3/4)*Math.sqrt(size*size)
    // vis = Math.sqrt(3/4)*size
    // vis = (Math.sqrt(3)/Math.sqrt(4))*size
    // vis = (Math.sqrt(3)/2)*size
    let vis = size*(Math.sqrt(3)/2);
    // Рисува шестоъгълник с център x,y и размер size
    context.beginPath();
    context.moveTo(x+size, y);
    context.lineTo(x+size/2, y-vis);
    context.lineTo(x-size/2, y-vis);
    context.lineTo(x-size, y);
    context.lineTo(x-size/2, y+vis);
    context.lineTo(x+size/2, y+vis);
    context.closePath();
    context.fill();
    context.stroke();
}
function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    for(let i = 0; i < 600; i++) {
        appleKol[i] = randomInteger(brKol);
        appleRed[i] = randomInteger(brKol);
    }
}
function update() {
    updates++;
    if(isKeyPressed[87] && updates%10 == 0) { //W
        // Запазване на стара позиция
        starKol[starKol.length] = igrachKol;
        starRed.push(igrachRed);    // Същото като горното
        // Мърдане
        igrachKol += promqnaKolZaPosoka[posoka];
        igrachRed += promqnaRedZaPosoka[posoka];
    }
    for(let i = 0; i < appleKol.length; i++) {
        if (igrachKol == appleKol[i] && igrachRed == appleRed[i]) {
            appleKol[i] = Infinity;
        }
    }
    // Обхожда всички клетки от опашката
    for(let i = starRed.length - opashkaDuljina; i < starRed.length; i++) {
        if(igrachKol == starKol[i] && igrachRed == starRed[i]) {
            opashkaDuljina = starRed.length - i;
        }
    }
}
function daiXY(k, r) {
    let vis = HEX_SIZE*(Math.sqrt(3)/2);
    return {
        x: r* 0 + k* 1.5 * HEX_SIZE + 100,
        y: r* 2 * vis   + k* vis + 100
    }
}

function draw() {

    context.fillStyle = "gray";
    for (let kolona = 0; kolona < brKol; kolona++) {
        for (let red = 0; red < brKol; red++) {
            drawHEX(daiXY(kolona, red),HEX_SIZE);
        }
    }

    context.fillStyle = "red";
    for(let i = 0; i < appleRed.length; i++) {
        drawHEX(daiXY(appleKol[i], appleRed[i]),HEX_SIZE);
    }
    context.fillStyle = "orange";
    drawHEX(daiXY(igrachKol, igrachRed), HEX_SIZE);

    context.fillStyle = "green";
    for(let i = starRed.length - opashkaDuljina; i < starRed.length; i++) {
        drawHEX(daiXY(starKol[i], starRed[i]),HEX_SIZE);
    }
}
function keyup(key) {
    if(key == 65) { //A
        posoka++;
        if(posoka > 5) {
            posoka = 0;
        }
    }
    if(key == 68) { //D
        posoka--;
        if(posoka < 0) {
            posoka = 5;
        }
    }
}