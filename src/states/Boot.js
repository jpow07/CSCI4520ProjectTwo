
export default class Boot extends Phaser.State {
  constructor() {
    super();
    console.log("In Boot State");
  }

  preload() {
    this.load.tilemap("playground", "assets/data/playground.json", null, Phaser.Tilemap.TILED_JSON);
    this.load.image("tiles", "assets/images/tiles.png");
    this.load.spritesheet("ship", "assets/images/ship.png", 420,420);
    this.load.audio("bgmusic","assets/music/bgm.mp3");

  }

  create() {
    console.log("Initializing PlayState");
    this.state.start("PlayState");

  }

}
