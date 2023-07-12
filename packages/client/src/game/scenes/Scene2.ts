import { getComponentValue } from "@latticexyz/recs";
import { mudStore } from "../../mudStore";
import { Scenes } from "../constants";

export class Scene2 extends Phaser.Scene {
    count: number = 0;
    
    constructor() {
        super(Scenes.SCENE_2);
    }

    preload() {
        // Load assets here
        // The app will load all assets before moving to create
    }
    
    create(data: any) {
        // Initialize anything that you need to run once to setup the Scene.
        // Runs only once when the Scene is loaded
        
        this.add.text(20, 20, data.message);

        this.count = getComponentValue(mudStore.getState()?.components.Counter!, mudStore.getState()?.network.singletonEntity!)?.value || this.count;
        const counterText = this.add.text(20, 40, `Counter: ${this.count}`);
        
        mudStore.getState()?.components.Counter.update$.subscribe(update => {
            const [nextValue, prevValue] = update.value;
            this.count = nextValue?.value || this.count;
            counterText.setText(`Counter: ${this.count}`);
        });
        
        var enterKey = this.input.keyboard?.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        enterKey?.on('down', () => {
            mudStore.getState()?.systemCalls.increment();
        })
    }

    update(time: number, delta: number): void {
        // Add recurring game logic here
        // Runs once every frame update
    }
}