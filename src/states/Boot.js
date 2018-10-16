// import {WebFontConfig} from "../Helper.js"
export default class Boot extends Phaser.State {

  constructor() {
    super();
    console.log("In Boot State");
  }

  preload() {
    // Load Tilemap and Tileset
    this.load.tilemap("level", "assets/data/level.json", null, Phaser.Tilemap.TILED_JSON);
    this.load.image("tiles", "assets/images/tileset.png");

    // Load Ship
    this.load.spritesheet("ship", "assets/images/ship.png", 380,190);
    this.load.spritesheet("oyster", "assets/images/oysters.png", 64,64);
    this.load.spritesheet("fish", "assets/images/CommonCarp.png", 128,128);
    this.load.spritesheet("seaweed", "assets/images/seaweed.png", 75,85);

    // Load Audio
    this.load.audio("bgmusic","assets/music/bgm.mp3");
    this.load.audio("swipeOyster", "assets/sounds/oysterpickup.mp3");
    this.load.audio("collectOyster", "assets/sounds/oysteraddtoboat.mp3");
    this.load.audio("collectFish", "assets/sounds/fishpickup.mp3");
    this.load.audio("ocean", "assets/sounds/oceanwave.mp3");
    this.load.audio("explosion", "assets/sounds/explosion.mp3");

    // Load Google Webfonts
    this.load.script('webfont', "//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js");
    console.log(Phaser.Cache);
  }

  create() {
    console.log("Initializing PlayState");
    this.state.start("MenuState");

  }



}
