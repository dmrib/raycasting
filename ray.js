/**
 * Light ray abstraction.
 */

class Ray {
    /**
     * Constructor.
     *
     * Args:
     *  x(number): initial source x coordinate
     *  y(number): initial source y coordinate
     * 
     * Returns:
     *  undefined.
     */
    constructor(angle)
    {
        // store components
        this.direction = p5.Vector.fromAngle(radians(angle));
        this.color = [255, 255, 255, 100];
    }

    /**
     * I draw this ray representation.
     * 
     * Args:
     *  source(p5.Vector): ray source point
     * 
     * Returns:
     *  undefined.
     */
    render(source, intersection)
    {
        // render ray representation
        stroke(...this.color);
        line(source.x, source.y, intersection.x, intersection.y);
    }
}