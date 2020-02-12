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
        stroke(...WALLS);
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

        // initialize borders begin and end
        let begin;
        let end;

        // create scene borders
        begin = createVector(0, 0);
        end = createVector(windowWidth, 0);
        walls.push(new Wall(begin, end));

        begin = createVector(windowWidth, 0);
        end = createVector(windowWidth, windowHeight);
        walls.push(new Wall(begin, end));

        begin = createVector(windowWidth, windowHeight);
        end = createVector(0, windowHeight);
        walls.push(new Wall(begin, end));

        begin = createVector(0, windowHeight);
        end = createVector(0, 0);
        walls.push(new Wall(begin, end));

        // create walls and add to array
        for(let i=0; i<n; i++)
        {
            const beginX = int(random(0, windowWidth));
            const beginY = int(random(0, windowHeight));
            const endX = int(random(0, windowWidth));
            const endY = int(random(0, windowHeight));

            const begin = createVector(beginX, beginY);
            const end = createVector(endX, endY);

            walls.push(new Wall(begin, end));
        }

        // return them
        return walls;
    }
}