let tablica = [], tablicaRazmer = 0;

let kletkaShir = 600/tablicaRazmer;
function init() {
    // Нов request към сървъра
    const request = new XMLHttpRequest();
    // Когато получа response -> извикай функцията onPoluchenMap
    request.addEventListener("load", onPoluchenMap);
    request.open("GET", "http://localhost:8080/map");
    console.log("PRAVQ REQUEST", Date.now());
    request.send();
}
function onPoluchenMap() {
    console.log("POLUCHIH OTGOVOR", Date.now());
    console.log(this.responseText);
    tablica = JSON.parse(this.responseText);
    tablicaRazmer = tablica.length;
    kletkaShir = 600 / tablicaRazmer;
}
function update() {
}
function draw() {
    for(let i = 0; i < tablicaRazmer; i++) {
        for (let j = 0; j < tablicaRazmer; j++) {
            context.fillStyle = "rgb(" + tablica[i][j].r + ", " +  tablica[i][j].g + "," + tablica[i][j].b + ")";
            context.fillRect(i*kletkaShir, j*kletkaShir, kletkaShir, kletkaShir);
            context.strokeRect(i*kletkaShir, j*kletkaShir, kletkaShir, kletkaShir);
        }
    }
}
function mouseup() {
    // Сменяме цвета на кликнатата клетка
    // Правим PUT request към /place?X=??,Y=??
    // Нов request към сървъра
    const request = new XMLHttpRequest();
    // Когато получа response -> извикай функцията onPoluchenMap
    // request.addEventListener("load", onPoluchenMap);
    let kliknatKol = Math.floor(mouseX/kletkaShir)
    let kliknatRed = Math.floor(mouseY/kletkaShir)
    request.open("PUT", "http://localhost:8080/place?X=" + kliknatKol + "&Y=" + kliknatRed +"&R=255&G=100&B=0");
    console.log("PRAVQ REQUEST", Date.now());
    request.send();
    window.location.reload();
}
function keyup(key) {
}

