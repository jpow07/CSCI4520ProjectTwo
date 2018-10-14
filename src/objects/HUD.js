import {GameStats} from "../Helper.js"

let score;
let weight;
let gradient;
export default class HUD extends Phaser.Sprite {


  constructor(game) {
    super(game);
    this.create();
    // this.anchor.setTo(.5, .5);

  }

  create() {
    this.fixedToCamera = true;

    score = this.game.add.text(this.game.world.centerX-500, 100);
    score.anchor.setTo(0.5);
    score.font = 'Orbitron';
    score.fontSize = 60;
    score.fill = "Red";
    score.setShadow(5, 5, '#8ED6FF', 5);

    weight = this.game.add.text(this.game.world.centerX + 500, 100);
    weight.anchor.setTo(0.5);
    weight.font = 'Orbitron';
    weight.fontSize = 60;
    weight.fill = "Red";
    weight.setShadow(5, 5, '#8ED6FF', 5);

  }

  update() {
    score.setText("Score: " + GameStats.score);
    weight.setText("Weight: " + GameStats.weight);


  }

}
