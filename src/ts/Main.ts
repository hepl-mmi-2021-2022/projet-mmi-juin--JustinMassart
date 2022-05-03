import {BackgroundCanvas} from "./Drawable/BackgroundCanvas";
import {Animation} from "./Animation";
import {PlayerCar} from "./Drawable/PlayerCar";

export class Main {
    protected readonly BackgroundCanvas: BackgroundCanvas;
    protected readonly BackgroundCanvasElement: HTMLCanvasElement = document.getElementById("backgroundCanvas") as HTMLCanvasElement;
    protected readonly BackgroundCanvasCtx: CanvasRenderingContext2D = this.BackgroundCanvasElement.getContext("2d", {alpha: true}) as CanvasRenderingContext2D;
    protected readonly PlayerCar: PlayerCar;
    protected readonly PlayerCarCanvasElement:HTMLCanvasElement = document.getElementById("playerCar") as HTMLCanvasElement;
    protected readonly PlayerCarCtx: CanvasRenderingContext2D = this.PlayerCarCanvasElement.getContext("2d", {alpha: true}) as CanvasRenderingContext2D;

    constructor() {
        this.BackgroundCanvas = new BackgroundCanvas(this.BackgroundCanvasElement, this.BackgroundCanvasCtx);
        this.PlayerCar = new PlayerCar(this.PlayerCarCanvasElement, this.PlayerCarCtx);
    }

}


new Main();
