
export default class Boot extends Phaser.State {
  constructor() {
    super();
    console.log("In Boot State");
  }

  preload() {
    this.load.tilemap("map", "../assets/data/plyaground.json");
    // game.load.image("tileset", "../assets/data/...")
    //this.load.image("sky", "assets/images/sky.png");
    //this.load.image("platform", "assets/images/platform.png");
    this.load.image("star", "assets/images/star.png");
    this.load.spritesheet("player", "assets/images/character.png", 32,48);
  }

  create() {
    console.log("Initializing PlayState");
    this.state.start("PlayState");

  }

}
