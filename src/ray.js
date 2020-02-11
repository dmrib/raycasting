/**
 * Light ray abstraction.
 */

class Ray
{
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
     * I rotate myself.
     *
     * Args:
     *  angle(number): rotation angle
     *
     * Returns:
     *  undefined.
     */
    rotate(angle)
    {
        this.direction.rotate(angle);
    }

    /**
     * I draw this ray representation.
     *
     * Args:
     *  source(p5.Vector): ray source point
     *  end(p5.vector): ray end point
     *
     * Returns:
     *  undefined.
     */
    render(source, end)
    {
        // render ray representation
        stroke(...LIGHT);
        line(source.x, source.y, end.x, end.y);
    }
}