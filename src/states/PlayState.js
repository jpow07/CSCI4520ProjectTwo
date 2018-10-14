import Ship from "../objects/Player.js"
import Oyster from "../objects/Oyster.js"
import Fish from "../objects/Fish.js"
import LoadLevel from "../utils/LoadLevel.js"
import {GameStats} from "../Helper.js"

let ship;
let map;
let cursors;
let layer;
let oysters;
let fishes;
let timer;
export default class PlayState extends Phaser.State {
  constructor() {
    super();
    console.log("In the PlayState");
    this.score = 0;
    this.level = ["testMap", "testMap"];

  }

  create() {
    this.input.maxPointers = 1;
    this.input.circle = 44;

    //Instantiate the Map
    map = new LoadLevel(this.game, GameStats.levels[GameStats.currentLevel]);

    this.physics.startSystem(this.physics.ARCADE);

    ship = new Ship({
        game: this.game,
        x: 400,
        y: 680,
        asset: "ship"
    });

    this.add.existing(ship);
    this.physics.enable(ship, this.physics.ARCADE);

    this.addOysters();
    this.addFish();
  }

  update() {
    if(GameStats.weight > 500){
      console.log("Death to your ship");
      ship.alive = false;
      this.input.enabled = false;

    }

  }//End of update()


  addOysters() {

    // Generate Oysters
    for (var i = 0; i < 30 ; i++) {
      oysters = new Oyster({
        game : this.game,
        x: Math.floor(Math.random()* this.game.width) + (i * 25),
        y: this.game.height - 70,
        asset: "oyster",
        frame: Math.floor(Math.random()*11)
      });
      this.add.existing(oysters);
    }

  } //End of addOysters()

  addFish(){
    // Generate Fish
    for (var i = 0; i < 5 ; i++) {
      fishes = new Fish({
        game : this.game,
        x: Math.floor(Math.random()* this.game.width) + (i * 5),
        y: Math.floor(this.game.height - (Math.random() * 250) - 125),
        asset: "fish",
        frame: 0
      });
      this.add.existing(fishes);
      }

  }//End of addFish()

  pauseGame(){
    this.game.isRunning = false;
  }

}//End of PlayState Class
