/**
 * Wall abstraction.
 */
class Wall {
    /**
     * Constructor.
     * 
     * Args:
     *  begin(p5.Vector): wall starting point
     *  end(p5.Vector): wall end point
     * 
     * Returns:
     *  undefined.
     */
    constructor(begin, end)
    {
        // store coordinates
        this.begin = begin;
        this.end = end;
    }

    /**
     * I draw this wall representation.
     * 
     * Returns:
     *  undefined
     */
    render()
    {
        stroke(255);
        strokeWeight(2);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }
}