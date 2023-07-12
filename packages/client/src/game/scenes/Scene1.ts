import { Scenes } from "../constants";

export class Scene1 extends Phaser.Scene {
    constructor() {
        super(Scenes.SCENE_1);
    }

    preload() {
        // Load assets here
        // The app will load all assets before moving to create
    }
    
    create() {
        // Initialize anything that you need to run once to setup the Scene.
        // Runs only once when the Scene is loaded
        
        this.add.text(20, 20, "Loading game...");
        this.scene.start(Scenes.SCENE_2, {message: `Showing ${Scenes.SCENE_2}. Press enter to increment count.`});
    }

    update(time: number, delta: number): void {
        // Add recurring game logic here
        // Runs once every frame update
    }
}