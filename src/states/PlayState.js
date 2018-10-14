import Ship from "../objects/Player.js"
import Oyster from "../objects/Oyster.js"
import Fish from "../objects/Fish.js"
import LoadLevel from "../utils/LoadLevel.js"
import {GameStats} from "../Helper.js"
import HUD from "../objects/HUD.js"

let ship;
let map;
let cursors;
let layer;
let oysters;
let fishes;
let timer;
let hud;
let oceanWave;
export default class PlayState extends Phaser.State {
  constructor() {
    super();
    console.log("In the PlayState");
    this.score = 0;
    this.level = ["testMap", "testMap"];

  }

  create() {
    // Start Physics for game
    this.physics.startSystem(this.physics.ARCADE);
    
    // Set pointer specifications, Number of pointers and size of pointer box
    this.input.maxPointers = 1;
    this.input.circle = 44;

    // Play Ocean Wave effects
    oceanWave = this.game.add.audio("ocean", .2, true);
    oceanWave.play();

    //Instantiate the Map
    map = new LoadLevel(this.game, GameStats.levels[GameStats.currentLevel]);


    hud = new HUD(this.game);
    this.add.existing(hud);

    ship = new Ship({
        game: this.game,
        x: 400,
        y: 680,
        asset: "ship"
    });

    this.add.existing(ship);
    this.physics.enable(ship, this.physics.ARCADE);
    // Camera to Follow ship
    this.camera.follow(ship, Phaser.Camera.FOLLOW_LOCKON);

    this.addOysters();
    this.addFish();
  }

  update() {
    if(GameStats.weight > GameStats.weightAllowed){
      console.log("Death to your ship");
      ship.alive = false;
      this.input.enabled = false;
    }

  }//End of update()


  addOysters() {

    // Generate Oysters
    for (var i = 0; i < GameStats.oysterCount; i++) {
      oysters = new Oyster({
        game : this.game,
        x: Math.floor(Math.random()* this.game.width) + (i * 25),
        y: this.game.height - 70,
        asset: "oyster",
        frame: Math.floor(Math.random()*11)
      });
      this.add.existing(oysters);
    }
    GameStats.weightAllowed = GameStats.oysterCount * 25;

  } //End of addOysters()

  addFish(){
    // Generate Fish
    for (var i = 0; i < GameStats.fishCount; i++) {
      fishes = new Fish({
        game : this.game,
        x: Math.floor(Math.random()* this.game.width* 2) + (i * 5),
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
