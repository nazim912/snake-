import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class SnakePart extends Point{
    constructor(x:number,y:number){
        super(x,y,'green',Shape.SQUARE);
    }
}