/**
 * Light source abstraction.
 */

class Source
{
    /**
     * Constructor.
     *
     * Args:
     *  interval(number): interval in degrees between each light ray
     *
     * Returns:
     *  undefined.
     */
    constructor(interval)
    {
        // store components
        this.origin = createVector(mouseX, mouseY)
        this.rays = this.createRays(interval);
    }

    /**
     * I setup my light rays.
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
        for(let i=-SIGHT/2; i<SIGHT/2; i+=interval)
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
        this.origin = createVector(x, y);
    }

    /**
     * I check if a light ray intersects a wall and then return the intersection point.
     *
     * Args:
     *  ray(Ray): light ray
     *  wall(Wall): boundary wall
     *
     * Returns:
     *  intersection(p5.Vector or undefined): point of intersection with wall
     *
     * https://en.wikipedia.org/wiki/Line%E2%80%93line_intersection
     */
    intersects(ray, wall)
    {
        // get Bezier first degree parameters
        const x1 = wall.begin.x;
        const y1 = wall.begin.y;
        const x2 = wall.end.x;
        const y2 = wall.end.y;
        const x3 = this.origin.x;
        const y3 = this.origin.y;
        const x4 = x3 + ray.direction.x;
        const y4 = y3 + ray.direction.y;

        // compute t and u definitions denominator
        const denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        // denominator is zero: fail
        if(denominator === 0)
        {
            return;
        }

        // compute t and u parameters
        const t = ((x1 - x3) * (y3 - y4) - (y1 - y3) * (x3 - x4)) / denominator;
        const u = -((x1 - x2) * (y1 - y3) - (y1 - y2) * (x1 - x3)) / denominator;

        // ray intersects wall: return point of intersection
        if(t > 0 && t < 1 && u > 0)
        {
            let x = x1 + t * (x2 - x1);
            let y = y1 + t * (y2 - y1);
            return createVector(x, y);
        }

        // no intersection: fail
        return;
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
        for(let ray of this.rays)
        {
            ray.rotate(angle);
        }
    }

    /**
     * I cast my light rays.
     *
     * Args:
     *  walls(Array): scene walls
     *
     * Returns:
     *  report(Object): rays intersections distances and points
     */
    cast(walls)
    {
        // setup cast reports arrays
        let distances = [];
        let ends = [];

        // render each light ray
        for (let ray of this.rays)
        {
            // setup nearest intersection test
            let nearest = Infinity;
            let end = null;

            // iterating through all walls
            for(let wall of walls)
            {
                // get the intersection point
                const intersection = this.intersects(ray, wall);

                // ray and wall intersects: test it for nearest intersection
                if(intersection)
                {

                    // compute distance between light source and intersection
                    let distance = intersection.dist(this.origin)
                    const angle = ray.direction.heading() - this.rays[int(this.rays.length/2)].direction.heading();
                    distance *= cos(angle);

                    // intersection is closest: update
                    if(distance < nearest)
                    {
                        nearest = distance;
                        end = intersection;
                    }
                }
            }

            // update ray results in report
            distances.push(nearest);
            ends.push(end);
        }

        // return report
        return {distances, ends};
    }

    /**
     * I render a representation of this scene.
     *
     * Args:
     *  walls(Array): scene walls
     *
     * Returns:
     *  undefined.
     */
    render(walls)
    {
        // render light origin
        noStroke();
        fill(...LIGHT);
        ellipse(this.origin.x, this.origin.y, 10, 10);

        // wall portion width
        const portionWidth = windowWidth / this.rays.length;

        // cast rays
        const cast = this.cast(walls);

        // fill background
        background(BACKGROUND);

        // for each ray
        for(let i=0; i<this.rays.length; i++)
        {
            // intersection was found: render wall
            if(cast.ends[i])
            {
                // get maximum casted ray distance heuristic
                const maxDistance = (windowWidth * windowHeight) / 2;

                // compute slice brightness and height
                const brightness = map(Math.min(cast.distances[i] * cast.distances[i], maxDistance), 0, maxDistance, 255, 0);
                const boundaryHeight = map(Math.min(cast.distances[i], windowHeight), 0, windowHeight, windowHeight, 0);

                // render visualization
                fill(brightness);
                noStroke();
                push();
                rectMode(CENTER);
                rect(i * portionWidth + portionWidth / 2, DIMENSION / 2, portionWidth + 1, boundaryHeight);
                pop();
            }
        }

        // for each ray
        for(let i=0; i<this.rays.length; i++)
        {
            // intersection was found: render wall
            if(cast.ends[i])
            {
                // render raycasting animation
                this.rays[i].render(this.origin, cast.ends[i]);
            }
        }
    }
}