/**
 * Light ray abstraction.
 */

class Ray {
    /**
     * Constructor.
     *
     * Args:
     *  angle(number): casted ray angle
     * 
     * Returns:
     *  undefined.
     */
    constructor(angle)
    {
        // store components
        this.direction = p5.Vector.fromAngle(radians(angle));
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
        stroke(...LIGHT);
        line(source.x, source.y, intersection.x, intersection.y);
    }
}