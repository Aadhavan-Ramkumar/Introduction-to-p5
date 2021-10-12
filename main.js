function preload() {
}

function setup() {
    Canvas = createCanvas(650, 480);
    Canvas.position(110, 250);
    Video = createCapture(VIDEO);
    Video.hide();
    TintColor = "";
}

function draw() {
    image(Video, 0,0, 640, 480);
    tint(TintColor);
}

function Snap() {
    save("My.png");
}

function ChangeFilter() {
    TintColor = document.getElementById("Color").value;
}