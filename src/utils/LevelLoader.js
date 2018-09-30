


class LevelLoader {

  constructor(playstate, level, tilesNum){}

  function preload() {
      this.game.load.image('mapTiles', 'assets/spritesheets/tiles.png');
      this.game.load.tilemap(level, 'assets/maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
  }

  function create() {
    let map = game.add.tilemap(level);

    let width = map.widthInPixels;
    let height = map.heightInPixels;

    game.world.setBounds(0, 0, width, height);
    map.addTilesetImage('mapTiles', tiles);
    let groundLayer = map.createLayer("GroundLayer");



    this.level = this.game.add.tilemap('level1');
    this.level.addTilesetImage('tiles', 'mapTiles');

    this.bgLayer = this.level.createLayer('Background');
    this.fgLayer = this.level.createLayer('Walls');


  }


}
