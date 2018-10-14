
let WebFontConfig = {

    //  'active' means all requested fonts have finished loading
    //  We set a 1 second delay before calling 'createText'.
    //  For some reason if we don't the browser cannot render the text the first time it's created.
    active: function() { game.time.events.add(Phaser.Timer.SECOND, createText, this); },

    //  The Google Fonts we want to load (specify as many as you like in the array)
    google: {
      families: ['Revalia']
    }

};


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

    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

  }

  create() {
    console.log("Initializing PlayState");
    this.state.start("MenuState");

  }

}
