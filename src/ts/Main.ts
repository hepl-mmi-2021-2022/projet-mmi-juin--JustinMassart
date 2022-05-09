import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {Animation} from "./Animation";
import {PlayerCar} from "./Drawable/PlayerCar";

export class Main {
    protected readonly BackgroundCanvas: BackgroundCanvas;
    protected readonly BackgroundCanvasElement: HTMLCanvasElement = document.getElementById("backgroundCanvas") as HTMLCanvasElement;
    protected readonly BackgroundCanvasCtx: CanvasRenderingContext2D = this.BackgroundCanvasElement.getContext("2d", {alpha: true}) as CanvasRenderingContext2D;
    protected Animation: Animation;

    constructor() {
        this.BackgroundCanvas = new BackgroundCanvas(this.BackgroundCanvasElement, this.BackgroundCanvasCtx);
        this.Animation = new Animation();
    }

}


new Main();
