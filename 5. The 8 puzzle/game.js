let n = parseInt(prompt("KOLKO"));


// let pole = [
//     [1, 2, 8],
//     [3, 4, 5],
//     [6, 0, 7]
// ];
let pole = [];
let tekChislo = 1;
for(let i = 0; i < n; i++) {
    pole[i] = [];
    for(let j = 0; j < n; j++) {
        pole[i][j] = tekChislo;
        tekChislo += 1
    }
}
pole[n-1][n-1] = 0;

let plochka_shir = 600/n;
let kol_nula = n-1 ,red_nula = n-1;
let img = new Image();
img.src="./images/backBeach.png"
function draw() {
    context.fillStyle = "black";
    context.font = Math.floor(plochka_shir/3) + "px Serif";
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            let izrez_shir = 150;
            let tek_nomer = pole[i][j]-1;
            let x_izrez = izrez_shir*(tek_nomer%n);
            let y_izrez = izrez_shir*Math.floor(tek_nomer/n)
            context.drawImage(img, x_izrez, y_izrez, izrez_shir, izrez_shir,
                    j*plochka_shir, i*plochka_shir, plochka_shir, plochka_shir)
            context.strokeRect(j*plochka_shir, i*plochka_shir, plochka_shir, plochka_shir);
            context.fillText(pole[i][j], j*plochka_shir, i*plochka_shir);
        }
    }
}
function mrud() {
    let kliknatKol = Math.floor(randomInteger(600)/plochka_shir),
        kliknatRed = Math.floor(randomInteger(600)/plochka_shir); 
    if(Math.abs(red_nula - kliknatRed) + Math.abs(kol_nula - kliknatKol) == 1) {
        let temp = pole[red_nula][kol_nula] 
        pole[red_nula][kol_nula] = pole[kliknatRed][kliknatKol]
        pole[kliknatRed][kliknatKol] = temp
        kol_nula = kliknatKol;
        red_nula = kliknatRed;
    }
}
function mouseup() {
    console.log("Kliknah na X,Y", mouseX, mouseY);
    let kliknatKol = Math.floor(mouseX/plochka_shir),
        kliknatRed = Math.floor(mouseY/plochka_shir); 
    console.log("Kliknat na red i kolona", kliknatRed, kliknatKol);
    if(Math.abs(red_nula - kliknatRed) + Math.abs(kol_nula - kliknatKol) == 1) {
        let temp = pole[red_nula][kol_nula] 
        pole[red_nula][kol_nula] = pole[kliknatRed][kliknatKol]
        pole[kliknatRed][kliknatKol] = temp
        kol_nula = kliknatKol;
        red_nula = kliknatRed;
    }
}
function update() {

}