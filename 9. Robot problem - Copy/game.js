let base_x=400, base_y=300;
let N = 3; 
let ugli = [], radiusi = [], debelina = [];
let kartinki;
let base_x_2 = 200, base_y_2 = 300;
let ugli2 = [], radiusi2 = [], debelina2 = [];
let kartinki2;

let krak_x = 600, krak_y = 300;
let ugli_krak, radiusi_krak, debelini_krak,
    kartinki_krak;

let krak2_x = 700, krak2_y = 300;
let ugli_krak2, radiusi_krak2, debelini_krak2,
    kartinki_krak2;
function init() {
    kartinki = [
        tryToLoadWithFullPath("./robot_img/a3.png"),
        tryToLoadWithFullPath("./robot_img/a2.png"),
        tryToLoadWithFullPath("./robot_img/a1.png")
    ];
    ugli = [0, 0, 0];
    radiusi = [100, 100, 70];
    debelina = [50, 30, 50];

    kartinki2 = [
        tryToLoadWithFullPath("./robot_img/a3.png"),
        tryToLoadWithFullPath("./robot_img/a2.png"),
        tryToLoadWithFullPath("./robot_img/a1.png")
    ];
    ugli2 = [0, 0, 0];
    radiusi2 = [100, 100, 70];
    debelina2 = [50, 30, 50];

    ugli_krak = [Math.PI/2, -Math.PI/2, -Math.PI/2];
    radiusi_krak = [100, 70, 40];
    debelini_krak = [50, 40, 100];
    kartinki_krak = [
        tryToLoadWithFullPath("./robot_img/l3.png"),
        tryToLoadWithFullPath("./robot_img/l2.png"),
        tryToLoadWithFullPath("./robot_img/l1.png")
    ]

    ugli_krak2 = [Math.PI/2, -Math.PI/2, -Math.PI/2];
    radiusi_krak2 = [100, 70, 40];
    debelini_krak2 = [50, 40, 100];
    kartinki_krak2 = [
        tryToLoadWithFullPath("./robot_img/l3.png"),
        tryToLoadWithFullPath("./robot_img/l2.png"),
        tryToLoadWithFullPath("./robot_img/l1.png")
    ]
}

let t = 0;
function promeni_ugli(ugli__) {
    for(let i = 0; i < N; i++) {
        ugli__[i] = 0 + Math.cos(t / 20) - Math.PI / 2;
    }

}
function update() {
    base_x = mouseX + 100;
    base_y = mouseY;
    base_x_2 = mouseX - 100;
    base_y_2 = mouseY;
    krak_x = mouseX - 50;
    krak_y = mouseY + 200;
    krak2_x = mouseX + 50;
    krak2_y = mouseY + 200;
    ugli_krak[1] = -Math.PI/2 + Math.cos(t/100)/3;
    t++;
    promeni_ugli(ugli);
    promeni_ugli(ugli2);
}
function drawRobotArm(ugli__, radiusi__, debelini__, kartinki__, base_x, base_y) { 
    let lastU = -Math.PI/2 
        last_stava_x = base_x,
        last_stava_y = base_y;
    for(let i = 0; i < ugli__.length; i++) {
        let newU = Math.PI/2 + lastU + ugli__[i];
        lastU = newU;
        let stava_x = last_stava_x + radiusi__[i] * Math.cos(newU),
            stava_y = last_stava_y + radiusi__[i] * Math.sin(newU);
        last_stava_x = stava_x;     last_stava_y = stava_y;

        context.save();
        context.translate(stava_x, stava_y);
        context.rotate(newU + Math.PI);
        drawImage(kartinki__[i], 0, -debelini__[i]/2, radiusi__[i], debelini__[i]);
        context.restore();
    }
}
function draw() {
    drawRobotArm(ugli, radiusi, debelina, kartinki, base_x, base_y);
    drawRobotArm(ugli2, radiusi2, debelina2, kartinki2, base_x_2, base_y_2);
    drawRobotArm(ugli_krak, radiusi_krak, debelini_krak, kartinki_krak, krak_x, krak_y);
    drawRobotArm(ugli_krak2, radiusi_krak2, debelini_krak2, kartinki_krak2, krak2_x, krak2_y);
}