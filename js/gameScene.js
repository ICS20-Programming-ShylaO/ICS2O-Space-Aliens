/* global Phaser */

// Copyright (c) 2020 Mr Coxall All rights reserved
//
// Created by: Mr Coxall
// Created on: Sep 2020
// Edited by: Shyla Oommen
// Edited on: Jun 2023
// This is the Game Scene

/** 
* This class is the Game Scene
*/
class GameScene extends Phaser.Scene {
  /** 
  * This method is the constructor.
  */
  constructor() {
    super({key: "gameScene" })
  }

  /** 
  * Called by the Scene Manager when the scene starts,
  * before preload() and create()
  */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /** 
  * Used to load assets.
  */
  preload() {
    console.log("Game Scene")
  }

  /** 
  * Used to create game objects
  */
  create(data) {
    // pass
  }

  /** 
  * Once per game step while the scene is running using given variables, time and delta.
  */
  update(time, delta) {
    //pass
  }
}

export default GameScene