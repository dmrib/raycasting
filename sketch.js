// interval between light rays in degrees
const INTERVAL = 1;

// create scene
let scene;

/**
 * p5.js setup function.
 */
function setup() {
    // create drawing canvas
    createCanvas(800, 800);

    // setup scene
    scene = new Scene(1);
}

/**
 * p5.js loop.
 */
function draw() {
    // paint background
    background(0);

    // update light source location
    scene.setSource(mouseX, mouseY);

    // render scene
    scene.render();
}