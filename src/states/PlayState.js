import Player from "../objects/Player.js"


let Jordan, map, cursors, music;
export default class PlayState extends Phaser.State {
  constructor() {
    super();
    console.log("In the PlayState");
    this.score = 0;

  }

  create() {
    music = this.game.add.audio("bgmusic", 1, true);
     music.play();
    //this.game.decode("bgmusic", music);
    this.physics.startSystem(Phaser.Physics.ARCADE);
    //Load Map
    // map = this.game.add.tilemap("map", 16, 16);
    // layer = map.createLayer(0);
    // layer.resizeWorld();
    // this.game.physics.p2.converTilemap(map, layer);

    Jordan = new Player({
        game: this.game,
        x: 400,
        y: 400,
        asset: "player",
        frame: 4
    });

    this.game.add.existing(Jordan);
    this.physics.enable(Jordan, Phaser.Physics.ARCADE);
    console.log(Jordan);
    console.log(this);


  }

  update() {

  }

}
