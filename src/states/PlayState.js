import Player from "../objects/Player.js"



let Jordan, map, mylayer, cursors, music;
export default class PlayState extends Phaser.State {
  constructor() {
    super();
    console.log("In the PlayState");
    this.score = 0;

  }

  create() {
    // Instantiate music and Play Music
    music = this.add.audio("bgmusic", 1, true);
    music.play();

    //Instantiate the Map
    map = new Phaser.Tilemap(this.game, "playground");//new Phaser.Tilemap(this.game, "playground", 16, 16, 100, 100);
    map.addTilesetImage("tileset");
    mylayer = map.createLayer("Foreground");
    console.log("Format: ")
    console.log(map.format);
  console.log(mylayer);





    this.physics.startSystem(this.physics.ARCADE);
    Jordan = new Player({
        game: this.game,
        x: 400,
        y: 400,
        asset: "ship"
    });

    this.add.existing(Jordan);
    this.physics.enable(Jordan, this.physics.ARCADE);


  }

  update() {

  }

}
