import { Display } from "./Display.js";
import { Game } from "./Game.js";
let width = 50;
let height = 50;
let scale = 15;
let display = new Display(width, height, scale);
let game = new Game(width, height);
game.initialize();
/*
    Add logic for your game if needed
*/
display.play(game);
