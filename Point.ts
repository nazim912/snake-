import { Shape } from "./Shape.js";

export class Point{
    protected x: number;
    protected y: number;
    protected color : string;
    protected shape : Shape;

    constructor(x:number,y:number,color:string='',shape:Shape=Shape.CIRCLE){
        this.x = x;
        this.y = y;
        this.color = color;
        this.shape = shape;
    }

    public getX():number{
        return this.x;
    }

    public getY():number{
        return this.y;
    }

    public getColor():string{
        return this.color;
    }

    public getShape():Shape{
        return this.shape;
    }

    public touch(other_point:Point):boolean{
        if(other_point == this) return false;
        return this.x==other_point.getX() && this.y == other_point.getY();
    }
}