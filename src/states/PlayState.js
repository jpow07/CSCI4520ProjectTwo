import Ship from "../objects/Player.js"
import Oyster from "../objects/Oyster.js"
import LoadLevel from "../utils/LoadLevel.js"


let ship, map, cursors, music, layer, oysters;
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
        y: 400,
        asset: "ship"
    });

    this.add.existing(ship);
    this.physics.enable(ship, this.physics.ARCADE);

    for (var i = 0; i < 5; i++) {
      oysters = new Oyster(this.game);
      this.add.existing(oysters);
      this.physics.enable(oysters, this.physics.ARCADE);
    }
    
  }

  update() {

  }

}
