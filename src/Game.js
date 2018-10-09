
import BootState from "./states/Boot.js"
//import SplashState from "./states/Splash.js"
import PlayState from "./states/PlayState.js"



class Game extends Phaser.Game {

  constructor() {

    let config = {
      width: 800,
      height: 600,
      renderer: Phaser.AUTO,
      parent: "",
      state: null,
      transparent: null,
      anitAlias: false,
      physicsConfig: Phaser.ARCADE,

    };

    super(config);
    this.state.add("Boot", BootState, false);
    //this.state.add("Splash", SplashState, false);
    this.state.add("PlayState", PlayState, false );

    this.state.start("Boot");
  }


}

let game = new Game();
