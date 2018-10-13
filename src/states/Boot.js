
export default class Boot extends Phaser.State {
  constructor() {
    super();
    console.log("In Boot State");
  }

  preload() {
    // Load Tilemap
    this.load.tilemap("testMap", "assets/data/testmap.json", null, Phaser.Tilemap.TILED_JSON);
    // Load Tileset
    this.load.image("tiles", "assets/images/tiles.png");

    // Load Ship
    this.load.spritesheet("ship", "assets/images/ship.png", 120,120);
    this.load.spritesheet("oyster", "assets/images/oysters.png", 64,64);
    // Load Audio Background Music
    this.load.audio("bgmusic","assets/music/bgm.mp3");

  }

  create() {
    console.log("Initializing PlayState");
    this.state.start("PlayState");

  }

}
