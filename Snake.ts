import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Point } from "./Point.js";
import { SnakePart } from "./SnakePart.js";

export class Snake{
    protected parts : SnakePart[];

    constructor(x:number,y:number,dir:Direction=Direction.RIGHT){
        this.parts = [new SnakePart(x,y)];
        this.grow(dir);
    }

    public getHead():SnakePart{
        return this.parts[0];
    }

    public getParts():SnakePart[]{
        return this.parts;
    }

    public grow(dir:Direction):void{
        let xHead : number = this.getHead().getX() + Number(dir==Direction.RIGHT) - Number(dir==Direction.LEFT);
        let yHead : number = this.getHead().getY() + Number(dir==Direction.DOWN) - Number(dir==Direction.UP);
        this.parts.unshift(new SnakePart(xHead,yHead));

    }

    public crop():void{
        this.parts.pop();
    }

    public touch_point(point:Point):boolean{
        for(let part of this.parts){
            if(part.touch(point)) return true;
        }
        return false;
    }

    public touch_apple(apple:Apple):boolean{
        return this.getHead().touch(apple);
    }

    public collide(width:number,height:number):boolean{
        let head : SnakePart = this.getHead();
        if( head.getX()<0 || head.getX()>=width || head.getY()<0 || head.getY()>=height ) return true;
        for(let part of this.parts){
            if(head.touch(part)) return true;
        }
        return false;
    }
}