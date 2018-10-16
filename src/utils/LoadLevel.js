
let layer;
export default class LoadLevel extends Phaser.Tilemap {

  constructor(game, mapKey){
    super(game, mapKey);
    console.log(mapKey);

    this.addTilesetImage("tileset","tiles");

    layer = this.createLayer(0);
    layer.resizeWorld();
  }

}
