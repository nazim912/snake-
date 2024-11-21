import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
export class SnakePart extends Point {
    constructor(x, y) {
        super(x, y, 'green', Shape.SQUARE);
    }
}
