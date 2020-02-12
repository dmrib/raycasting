/**
 * State
 */

// interval between light rays in degrees
const INTERVAL = 0.1;
const SIGHT = 60;

// create light source scene
let source;

// create walls array
let walls = [];

// rotation direction
let direction = 1;

// dimensions
let DIMENSION;

// color definitions
const LIGHT = [227, 48, 48, 100];
const WALLS = [50];
const BACKGROUND = 120;

/**
 * p5.js setup function.
 */
function setup()
{
    // create drawing canvas
    createCanvas(windowWidth, windowHeight);

    // set display dimension constant
    DIMENSION = windowWidth / 2;

    // setup light source
    source = new Source(1);

    // setup walls
    walls = Wall.createWalls(15);
}

/**
 * p5.js key pressed callback.
 */
function keyPressed()
{
    // pressed key is 'r': reverse rotation direction
    if(key === 'r')
    {
        direction *= -1;
    }
}

/**
 * p5.js loop.
 */
function draw()
{
    // paint background
    background(BACKGROUND);

    // mouse is pressed: rotate light source
    if(mouseIsPressed)
    {
        source.rotate(direction * 0.02);
    }

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