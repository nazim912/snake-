import { Shape } from "./Shape.js";
export class Point {
    constructor(x, y, color = '', shape = Shape.CIRCLE) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.shape = shape;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
    getColor() {
        return this.color;
    }
    getShape() {
        return this.shape;
    }
    touch(other_point) {
        if (other_point == this)
            return false;
        return this.x == other_point.getX() && this.y == other_point.getY();
    }
}
