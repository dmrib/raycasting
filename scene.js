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
        // render each light ray
        for(let ray of this.rays)
        {
            ray.render(this.source);
        }
    }
}