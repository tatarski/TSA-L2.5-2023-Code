let targets = [
    {x: 600, y: 600},
    {x: 100, y: 100},
    {x: 500, y: 50},
    {x: 300, y: 500},
    {x: 100, y: 300},
]
let enemies = [], brVragove = 0;
let bullets = [], brPatroni = 0;
function rodiPatron(x__, y__, dX__, dY__) {
    bullets[brPatroni] = {
        x: x__,
        y: y__,
        dX: dX__,
        dY: dY__
    };
    brPatroni++;
}
function rodiVrag() {
    enemies[brVragove] = {
        x: targets[0].x,
        y: targets[0].y,
        targetIndex: 1
    };
    brVragove++;
}
let t = 0;
function update() {
    t++;
    if (isKeyPressed[32] && t%20 ==0) {//Space - стреля патрони
        rodiPatron(300, 500, (mouseX - 300) / 100, (mouseY - 500) / 100);
    }
    if(t%100 == 0) {
        rodiVrag(); // Нека враговете се раждат по-рядко
    }
    for (let i = 0; i < brPatroni; i++) {
        bullets[i].x += bullets[i].dX;
        bullets[i].y += bullets[i].dY;
    }
    for(let i = 0; i < brVragove; i++) {
        for(let j = 0; j < brPatroni; j++) {
            if (areColliding(enemies[i].x, enemies[i].y, 60, 80,
                bullets[j].x, bullets[j].y, 30, 30)) {
                enemies[i].x = Infinity;
                bullets[j].x = -Infinity;
            }
        }
    }
    for (let i = 0; i < brVragove; i++) {
        let tekCel = enemies[i].targetIndex;
        ostavashto_razstoqnie = distance(
            enemies[i].x, enemies[i].y, targets[tekCel].x, targets[tekCel].y)
        enemies[i].x += (targets[tekCel].x - enemies[i].x) / ostavashto_razstoqnie;
        enemies[i].y += (targets[tekCel].y - enemies[i].y) / ostavashto_razstoqnie;
        if (ostavashto_razstoqnie < 3) {
            enemies[i].targetIndex++;
        }
    }
}
function draw() {
    for (let i = 0; i < brPatroni; i++) {
        drawImage(gem[i % 30], bullets[i].x, bullets[i].y, 30, 30);
    }
    for (let i = 0; i < brVragove; i++) {
        drawImage(troll, enemies[i].x, enemies[i].y, 60, 80);
    }
    for (let i = 0; i < targets.length - 1; i++) {
        context.font = "30px Courier New";
        context.fillText(i, targets[i].x, targets[i].y);
        context.beginPath();
        context.moveTo(targets[i].x, targets[i].y);
        context.lineTo(targets[i + 1].x, targets[i + 1].y);
        context.stroke();
    }
}
function mouseup() {
}
function keyup(key) {
}

function distance(x1, y1, x2, y2) { let a = y1 - y2; let b = x1 - x2; return Math.sqrt(a * a + b * b); }