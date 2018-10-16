import {GameStats} from "../Helper.js"
import Ship from "../objects/Ship.js"

let score;
let weight;
let gradient;
let gameOver;
let message;
export default class HUD extends Phaser.Sprite {


  constructor(game) {
    super(game);
    this.create();

  }

  create() {
    this.fixedToCamera = false;

    score = this.createText("black", "Orbitron", 60, this.game.width/2 + 800, 100);
    weight = this.createText("black", "Orbitron", 60, this.game.width/2 + 200, 100);
    gameOver = this.createText("black", "Orbitron", 190, this.game.width/2 + 400, this.game.height/2);

  }

  update() {
    weight.x += 3;
    score.x += 3;
    gameOver.x += 3;
    if(this.game.isRunning) {
      score.setText("Score: " + GameStats.score);
      if(GameStats.weight > (GameStats.allowedWeight - 150)){
        console.log("red");
        weight.fill = "red";
      }
      weight.setText("Weight: " + GameStats.weight);
    } else {
      gameOver.setText("Game Over");
    }
  }

  createText(color, font, size, xPos, yPos){

      message = this.game.add.text(xPos, yPos);
      message.anchor.setTo(0.5);
      message.font = font;
      message.fontSize = size;
      message.fill = color;
      message.setShadow(10, 10, '#8ED6FF', 5);
      return message;
  }



}
