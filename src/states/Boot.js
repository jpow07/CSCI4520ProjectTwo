
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
    this.load.spritesheet("ship", "assets/images/ship.png", 407,196);
    this.load.spritesheet("oyster", "assets/images/oysters.png", 64,64);
    this.load.spritesheet("fish", "assets/images/CommonCarp.png", 128,128);
    // Load Audio Background Music
    this.load.audio("bgmusic","assets/music/bgm.mp3");

    /*
    //font loader looks for this so need to load it before script
    WebFontConfig = {
      active: function() {
        //need a second dellay or else fonts don't load properly first time
        this.time.events.add(Phaser.Timer.SECOND, createText, this);
      }

      google: {
        familes: ['Veranda']
      }
    }
    */

    //this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  }

  create() {
    console.log("Initializing PlayState");
    this.state.start("MenuState");

  }

}
