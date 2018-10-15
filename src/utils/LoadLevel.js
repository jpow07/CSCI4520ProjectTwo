
let mylayer;
export default class LoadLevel extends Phaser.Tilemap {

  constructor(game, mapKey){
    super(game, mapKey);
    console.log(mapKey);

    this.addTilesetImage("tileset","tiles");

      mylayer = function() {
        let background;
        let midground;
        let foreground;
      }

      mylayer.background = this.createLayer("sky");
      mylayer.midground = this.createLayer("water");
      mylayer.foreground = this.createLayer("sand");

  }

}
