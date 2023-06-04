let HEX_SIZE =30 
function drawHEX(x, y, size) {
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
    context.stroke();
}
function init() {
}
function update() {
}
function draw() {
    let vis = HEX_SIZE*(Math.sqrt(3)/2);
    for (let kolona = 0; kolona < 10; kolona++) {
        for (let red = 0; red < 10; red++) {
            if(kolona < 10 -red) {continue}
            // Когато ред се увеличи с 1, X се увеличава с 0
            // Когато ред се увеличи с 1, Y се увеличава с 2*vis
            // Когато колона се увеличи с 1, X се увеличава с 1.5*HEX_SIZE
            // Последен тунинг и ще бачка:
            // Когато колона се увеличи с 1, Y се увеличава с vis
            drawHEX(
                red * 0         + kolona * 1.5 * HEX_SIZE,
                red * 2 * vis   + kolona * vis,
                HEX_SIZE);
        }
    }
}