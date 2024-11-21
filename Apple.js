import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
export class Apple extends Point {
    constructor(x, y) {
        super(x, y, 'red', Shape.CIRCLE);
    }
}
