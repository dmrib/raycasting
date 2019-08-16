/**
 * Scene abstraction.
 */

class Scene {
    /**
     * Constructor.
     * 
     * Args:
     *  interval(number): interval in degrees between each light source
     * 
     * Returns:
     *  undefined.
     */
    constructor(interval)
    {
        // store components
        this.source = createVector(mouseX, mouseY)
        this.rays = this.createRays(interval);
        this.walls = this.createWalls(5);
    }

    /**
     * I setup my light ray sources.
     * 
     * Args:
     *  interval(number): interval in degrees between each light source
     * 
     * Returns:
     *  rays(Array): array with created rays
     */
    createRays(interval)
    {
        // initialize rays vector
        let rays = [];

        // create rays along 360 degrees
        for(let i=0; i<360; i+=interval)
        {
            rays.push(new Ray(i));
        }

        // return them
        return rays;
    }

    /**
     * I create this scene walls.
     * 
     * Args:
     *  n(number): number of created walls
     * 
     * Returns:
     *  walls(Array): array of created walls
     */
    createWalls(n)
    {
        // create empty walls array
        let walls = [];

        // create walls and add to array
        for(let i=0; i<n; i++)
        {
            const beginX = int(random(100, width - 100));
            const beginY = int(random(100, height - 100));
            const endX = int(random(100, width - 100));
            const endY = int(random(100, height - 100));

            let begin = createVector(beginX, beginY);
            let end = createVector(endX, endY);

            walls.push(new Wall(begin, end));
        }

        // return them
        return walls;
    }

    /**
     * I set my light source position.
     * 
     * Args:
     *  x(number): source x coordinate
     *  y(number): source y coordinate
     * 
     * Returns:
     *  undefined.
     */
    setSource(x, y)
    {
        this.source = createVector(x, y);
    }

    /**
     * I render a representation of this scene.
     * 
     * Returns:
     *  undefined.
     */
    render()
    {
        // render each wall
        for(let wall of this.walls)
        {
            wall.render();
        }

        // render each light ray
        for(let ray of this.rays)
        {
            ray.render(this.source);
        }
    }
}