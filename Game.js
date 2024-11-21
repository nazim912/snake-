import { Apple } from "./Apple.js";
import { Direction } from "./Direction.js";
import { Point } from "./Point.js";
import { Shape } from "./Shape.js";
import { Snake } from "./Snake.js";
function get_rand(max) {
    return Math.floor(Math.random() * max);
}
export class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.score = 0;
        this.dir = [Direction.RIGHT];
        this.snake = new Snake(Math.floor(width / 2), Math.floor(height / 2));
        this.apple = this.create_apple();
    }
    create_apple() {
        let new_pos = this.get_empty_pos();
        return new Apple(new_pos.getX(), new_pos.getY());
    }
    get_empty_pos() {
        while (true) {
            let pos = new Point(get_rand(this.width), get_rand(this.height));
            if (!this.snake.touch_point(pos))
                return pos;
        }
    }
    getScore() {
        return this.score;
    }
    getDir() {
        return this.dir[0];
    }
    getLastDir() {
        return this.dir[this.dir.length - 1];
    }
    initialize() {
        document.addEventListener('keydown', (event) => {
            let new_dir;
            switch (event.key) {
                case 'ArrowUp':
                    new_dir = Direction.UP;
                    break;
                case 'ArrowDown':
                    new_dir = Direction.DOWN;
                    break;
                case 'ArrowLeft':
                    new_dir = Direction.LEFT;
                    break;
                case 'ArrowRight':
                    new_dir = Direction.RIGHT;
                    break;
                default:
                    new_dir = Direction.RIGHT;
            }
            if (new_dir != (this.getLastDir() + 2) % 4) {
                this.dir.push(new_dir);
            }
        });
    }
    display_point(display, point) {
        switch (point.getShape()) {
            case Shape.CIRCLE:
                display.drawCircle(point.getX(), point.getY(), point.getColor());
            case Shape.SQUARE:
                display.drawRectangle(point.getX(), point.getY(), point.getColor());
        }
    }
    step() {
        this.snake.grow(this.getDir());
        if (this.dir.length > 1) {
            this.dir.shift();
        }
        if (this.snake.touch_apple(this.apple)) {
            this.apple = this.create_apple();
            this.score++;
        }
        else {
            this.snake.crop();
        }
    }
    play(display) {
        this.step();
        for (let part of this.snake.getParts()) {
            this.display_point(display, part);
        }
        this.display_point(display, this.apple);
        if (this.snake.collide(this.width, this.height))
            return true;
        return false;
    }
}
