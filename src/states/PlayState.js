import Player from "../objects/Player.js"
import LoadLevel from "../utils/LoadLevel.js"


let Jordan, map, cursors, music, layer;
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
    Jordan = new Player({
        game: this.game,
        x: 400,
        y: 400,
        asset: "ship"
    });

    this.add.existing(Jordan);
    this.physics.enable(Jordan, this.physics.ARCADE);


  }

  update() {

  }

}
