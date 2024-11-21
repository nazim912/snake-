import { Point } from "./Point.js";
import { Shape } from "./Shape.js";

export class Apple extends Point{

    constructor(x:number,y:number){
        super(x,y,'red',Shape.CIRCLE);
    }
}