// interval between light rays in degrees
const INTERVAL = 1;

// create light source scene
let source;

// create walls array
let walls = [];

// dimensions
const DIMENSION = 800

// color definitions
const LIGHT = [227, 48, 48, 100];
const WALLS = [50];
const BACKGROUND = 150;

/**
 * p5.js setup function.
 */
function setup() {
    // create drawing canvas
    createCanvas(1600, 800);

    // setup light source
    source = new Source(1);

    // setup walls
    walls = Wall.createWalls(10);
}

/**
 * p5.js loop.
 */
function draw() {
    // paint background
    background(BACKGROUND);

    // update light source location
    source.setSource(mouseX, mouseY);

    // render light source
    source.render(walls);

    // render each wall
    for(let wall of walls)
    {
        wall.render();
    }
}