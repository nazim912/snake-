import { Display } from "./Display.js";
import { Game } from "./Game.js";

let width : number = 50;
let height : number = 50;
let scale : number = 15;

let display = new Display(width,height,scale);
let game = new Game(width,height);
game.initialize();

/*
    Add logic for your game if needed
*/

display.play(game);