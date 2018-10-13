import Ship from "../objects/Player.js"
import Oyster from "../objects/Oyster.js"
import Fish from "../objects/Fish.js"
import LoadLevel from "../utils/LoadLevel.js"


let ship, map, cursors, music, layer, oysters, fishes;
export default class PlayState extends Phaser.State {
  constructor() {
    super();
    console.log("In the PlayState");
    this.score = 0;
    this.level = ["testMap", "testMap"];

  }

  create() {
    // Instantiate music and Play Music
    music = this.game.add.audio("bgmusic", 1, true);
    music.play();

    //Instantiate the Map
    map = new LoadLevel(this.game, this.level[0]);

    this.physics.startSystem(this.physics.ARCADE);
    ship = new Ship({
        game: this.game,
        x: 400,
        y: 680,
        asset: "ship"
    });

    this.add.existing(ship);
    this.physics.enable(ship, this.physics.ARCADE);

    for (var i = 0; i < 30 ; i++) {

      oysters = new Oyster({
        game : this.game,
        x: Math.floor(Math.random()* this.game.width) + (i * 25),
        y: this.game.height - 70,
        asset: "oyster",
        frame: Math.floor(Math.random()*9)

      });
      this.add.existing(oysters);
      // this.physics.enable(oysters, this.physics.ARCADE);
    }
    for (var i = 0; i < 10 ; i++) {

      fishes = new Fish({
        game : this.game,
        x: Math.floor(Math.random()* this.game.width) + (i * 5),
        y: Math.floor(this.game.height - (Math.random() * 250)),
        asset: "fish",
        frame: 0// Math.floor(Math.random()*9)


      });
      this.add.existing(fishes);
      // this.physics.enable(oysters, this.physics.ARCADE);
    }

  }

  update() {

    if(ship.weight > 200){
      console.log("Death to your ship");
      ship.alive = false;
    }



  }




}
