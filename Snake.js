import { Direction } from "./Direction.js";
import { SnakePart } from "./SnakePart.js";
export class Snake {
    constructor(x, y, dir = Direction.RIGHT) {
        this.parts = [new SnakePart(x, y)];
        this.grow(dir);
    }
    getHead() {
        return this.parts[0];
    }
    getParts() {
        return this.parts;
    }
    grow(dir) {
        let xHead = this.getHead().getX() + Number(dir == Direction.RIGHT) - Number(dir == Direction.LEFT);
        let yHead = this.getHead().getY() + Number(dir == Direction.DOWN) - Number(dir == Direction.UP);
        this.parts.unshift(new SnakePart(xHead, yHead));
    }
    crop() {
        this.parts.pop();
    }
    touch_point(point) {
        for (let part of this.parts) {
            if (part.touch(point))
                return true;
        }
        return false;
    }
    touch_apple(apple) {
        return this.getHead().touch(apple);
    }
    collide(width, height) {
        let head = this.getHead();
        if (head.getX() < 0 || head.getX() >= width || head.getY() < 0 || head.getY() >= height)
            return true;
        for (let part of this.parts) {
            if (head.touch(part))
                return true;
        }
        return false;
    }
}
