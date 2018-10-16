import BootState from "./states/Boot.js"
import SplashState from "./states/SplashState.js"
import PlayState from "./states/PlayState.js"
import MenuState from "./states/MenuState.js"
import LoseState from "./states/LoseState.js"



class Game extends Phaser.Game {

  constructor() {

    let config = {
      width: 2436,
      height: 1125,
      renderer: Phaser.CANVAS,
      parent: "",
      state: null,
      transparent: null,
      anitAlias: false,
      physicsConfig: Phaser.ARCADE,

    };

    super(config);
    this.state.add("Boot", BootState, false);
    this.state.add("MenuState", MenuState, false );
    this.state.add("Splash", SplashState, false);
    this.state.add("PlayState", PlayState, false );
    this.state.add("Lose", LoseState, false);

    this.state.start("Boot");
  }


}

let game = new Game();
