
let mylayer;
export default class LoadLevel extends Phaser.Tilemap {

  constructor(game, mapKey){
    super(game, mapKey);

    this.addTilesetImage("myTileset","tiles");

      mylayer = function() {
        let background;
        let foreground;
      }

      mylayer.background = this.createLayer("background");
      mylayer.foreground = this.createLayer("foreground");

  }

}
	
