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

    /**
     * I create n walls and return them.
     * 
     * Args:
     *  n(number): number of created walls
     * 
     * Returns:
     *  walls(Array): array of created walls
     */
    static createWalls(n)
    {
        // create empty walls array
        let walls = [];

        // create walls and add to array
        for(let i=0; i<n; i++)
        {
            const beginX = int(random(0, width));
            const beginY = int(random(0, height));
            const endX = int(random(0, width));
            const endY = int(random(0, height));

            let begin = createVector(beginX, beginY);
            let end = createVector(endX, endY);

            walls.push(new Wall(begin, end));
        }

        // return them
        return walls;
    }
}