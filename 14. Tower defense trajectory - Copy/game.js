let x = [600, 100, 500, 300, 100], y = [600, 100, 50 , 500, 300];
let celIndex= [], vragX = [], vragY = [], brVragove = 0;
let patronX = [], patronY = [], patronDX = [], patronDY = [], brPatroni = 0;
function rodiPatron(x,y,dX, dY) {
    patronX[brPatroni] = x;
    patronY[brPatroni] = y;
    patronDX[brPatroni] = dX;
    patronDY[brPatroni] = dY;
    brPatroni++;   }
function update() {
    if(isKeyPressed[32]) {//Space - стреля патрони
        rodiPatron(300, 500, (mouseX - 300)/100, (mouseY - 500)/100);
    }
    rodiVrag(); // Нека враговете се раждат по-рядко
    for(let i = 0; i < brPatroni; i++) {
        patronX[i] = patronX[i] + patronDX[i];
        patronY[i] = patronY[i] + patronDY[i];
    }
    for(let i = 0; i < brVragove; i++) {
        let tekCel = celIndex[i];
        ostavashto_razstoqnie = distance(
            vragX[i], vragY[i], x[tekCel], y[tekCel])
        vragX[i] += (x[tekCel] - vragX[i]) / ostavashto_razstoqnie;
        vragY[i] += (y[tekCel] - vragY[i]) / ostavashto_razstoqnie;
        if (ostavashto_razstoqnie < 3) {
            tekCel++;
        }}}
function draw() {
    for(let i = 0; i < brPatroni; i++) {
        drawImage(gem[i%30], patronX[i], patronY[i], 30, 30);
    }
    for(let i = 0; i < brVragove; i++){ 
        drawImage(troll, vragX[i], vragY[i], 60, 80);
    }
    for(let i = 0; i < x.length - 1; i++) {
        context.font = "30px Courier New";
        context.fillText(i, x[i], y[i]);
        context.beginPath();
        context.moveTo(x[i], y[i]);
        context.lineTo(x[i+1], y[i+1]);
        context.stroke();
    }
}
function mouseup() {
}
function keyup(key) {
}
function rodiVrag() {
    vragX[brVragove] = x[0];
    vragY[brVragove] = y[0];
    celIndex[brVragove] = 1;
    brVragove++;
}
function distance(x1,y1,x2,y2) {let a = y1-y2;let b = x1-x2;return Math.sqrt(a*a + b*b);}