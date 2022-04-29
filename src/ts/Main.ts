import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {settings} from "./settings";

class Main {
    protected readonly BackgroundCanvas: BackgroundCanvas;
    protected readonly BackgroundCanvasElement: HTMLCanvasElement = document.getElementById("backgroundCanvas") as HTMLCanvasElement;
    protected readonly BackgroundCanvasCtx: CanvasRenderingContext2D = this.BackgroundCanvasElement.getContext("2d") as CanvasRenderingContext2D;

    constructor() {
        this.BackgroundCanvas = new BackgroundCanvas(this.BackgroundCanvasElement, this.BackgroundCanvasCtx);

    }
}

new Main();
