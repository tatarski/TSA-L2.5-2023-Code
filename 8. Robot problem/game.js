let base_x=400, base_y=300, w = 40;
let N = 3; 
let ugli = [], radiusi = [];
let kartinki = [];
function init() {
    // Задава начални стойности на ъгли/радиуси
    for(let i = 0; i < N; i++) {
        ugli[i] = 0;
        radiusi[i] = randomInteger(50) + 50;// от 50 до 99
    }
}
function update() {

}
function draw() {
    // Базата
    drawImage(ballOrTree, base_x - w / 2, base_y - w / 2, w, w);
    let lastU = -Math.PI/2 
        last_stava_x = base_x,
        last_stava_y = base_y;
    context.beginPath();
    for(let i = 0; i < N; i++) {
        let newU = Math.PI/2 + lastU + ugli[i];
        lastU = newU;
        let stava_x = last_stava_x + radiusi[i] * Math.cos(newU),
            stava_y = last_stava_y + radiusi[i] * Math.sin(newU);
        last_stava_x = stava_x;
        last_stava_y = stava_y;
        context.lineTo(stava_x, stava_y);
        drawImage(box, stava_x-w/2, stava_y-w/2, w, w);
    }
    context.stroke();
}