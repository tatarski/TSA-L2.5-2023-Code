let plodX = [], plodY = [],
    plodTip = [], brPlodove = 0;
let dirqX = [], dirqY = [], brDirq = 0;
function distance(x1, y1, x2, y2) {
    let a = x1 - x2, b = y1 - y2;
    let c = Math.sqrt(a * a + b * b);
    return c;
}
function areCirclesColliding(x1, y1, r1, x2, y2, r2) {
    return (r1 + r2) >= distance(x1, y1, x2, y2);
}
function rodiPlod() {
    // добавя нов плод в масивите
}
function init() {
    for (let i = 0; i < 10; i = i + 1) {
        // Раждаме един плод
        plodX[i] = randomInteger(800);
        plodY[i] = 0;
        plodTip[i] = randomInteger(3); //0-kvadrat,1-кръг,2-zvezda
        brPlodove++;
    }
}
let t = 0; // колко ъпдейта са минали
function update() {
    t++;

    dirqX[brDirq] = mouseX;
    dirqY[brDirq] = mouseY;
    brDirq++;

    if (t % 50 == 0) {
        plodX[brPlodove] = randomInteger(800);
        plodY[brPlodove] = 0;
        plodTip[brPlodove] = randomInteger(3); // 0- kvadrat, 1 - кръг
        brPlodove++;
    }
    for (let i = 0; i < brPlodove; i++) {
        plodY[i] += 1;
    }
    for (let i = brDirq - 20; i < brDirq-1; i++) {
        for(let j = 0; j < brDirq; j++) {
            if(areCollidingPlodZvezdaIOtsechka(
                dirqX[i], dirqY[i], dirqX[i+1], dirqY[i+1],
                plodX[j], plodY[j], 50
            ) && plodTip[j] == 2) {
                plodX[j] = undefined;
            }
        }
    }
}
function drawPlodZvezda(x, y, razmer) {
    context.fillStyle = "orange";
    context.beginPath();
    context.moveTo(x-razmer, y-razmer/4);
    context.lineTo(x+razmer, y-razmer/4);
    context.lineTo(x-razmer/2, y+razmer);
    context.lineTo(x+ 0, y-razmer);
    context.lineTo(x+razmer/2, y+razmer);
    context.closePath();
    context.fill();
    context.stroke();
}      // x1,y1, x2,y2 - otsechka 1; x3,y3,x4,y4 - otsechka 2
// a-x1, b-y1, c-x2, d-y2, e-x3 ...... KOPNATO OT NETA
function areOtsechkiColliding(a,b,c,d,p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};
function areCollidingPlodZvezdaIOtsechka( x1,y1,x2,y2, plodX, plodY, plodRazmer) {
    return areOtsechkiColliding(x1, y1, x2, y2,
            plodX - plodRazmer, plodY - plodRazmer / 4,
            plodX + plodRazmer, plodY - plodRazmer / 4) ||
        areOtsechkiColliding(x1, y1, x2, y2,
            plodX + plodRazmer, plodY - plodRazmer / 4,
            plodX - plodRazmer / 2, plodY + plodRazmer) ||
        areOtsechkiColliding(x1, y1, x2, y2,
            plodX - plodRazmer / 2, plodY + plodRazmer,
            plodX + 0, plodY - plodRazmer) ||
        areOtsechkiColliding(x1, y1, x2, y2,
            plodX + 0, plodY - plodRazmer,
            plodX + plodRazmer / 2, plodY + plodRazmer) ||
        areOtsechkiColliding(x1, y1, x2, y2,
            plodX + plodRazmer / 2, plodY + plodRazmer,
            plodX - plodRazmer, plodY - plodRazmer / 4);
}
function draw() {
    drawPlodZvezda(300, 300, 50);
    drawLine(40, 80, mouseX, mouseY);
    console.log(areCollidingPlodZvezdaIOtsechka(
        40, 80, mouseX, mouseY,
        300, 300, 50
    ));
    for (let i = 0; i < brPlodove; i = i + 1) {
        if (plodTip[i] == 0) {
            context.fillStyle = "green";
            context.fillRect(plodX[i], plodY[i], 50, 50);
        } else if (plodTip[i] == 1) {
            context.fillStyle = "orange";
            context.beginPath();
            context.arc(plodX[i], plodY[i], 15, 0, 2 * Math.PI);
            context.fill();
        } else if (plodTip[i] == 2) {
            context.fillStyle = "yellow";
            drawPlodZvezda(plodX[i], plodY[i], 50);
        }
    }
    context.beginPath();
    for(let i = brDirq-20; i < brDirq; i++) {
        context.lineTo(dirqX[i], dirqY[i]);
    }
    context.stroke();
    
}
function mouseup() {
    for (let i = 0; i < brPlodove; i++) {
        if (
            (plodTip[i] == 0 && areColliding(mouseX, mouseY, 1, 1, plodX[i], plodY[i], 50, 50)) ||
            (plodTip[i] == 1 && areCirclesColliding(mouseX, mouseY, 1, plodX[i], plodY[i], 15)) ||
            (plodTip[i] == 2 && areCirclesColliding(mouseX, mouseY, 1, plodX[i], plodY[i], 50))
        ) {
            plodX[i] = undefined; // Затриваме плод
        }
    }
}