import {Canvas} from "./Canvas";
import {settings} from "../settings";

export class Stripe extends Canvas {
    protected readonly verticalStart: number;
    protected readonly width: number;
    protected readonly height: number;
    protected readonly canvasHeightFactor: number;
    protected readonly canvasWidthFactor: number;
    protected readonly gapBetweenLanes: number;
    protected readonly positionY: number;
    protected readonly speed: number;
    protected positionX: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, verticalStart: number) {
        super(canvas, ctx);
        this.width = settings.stripe.width.min + Math.random() * (settings.stripe.width.max - settings.stripe.width.min);
        this.height = settings.stripe.height;
        this.canvasWidthFactor= settings.stripe.canvasWidthFactor;
        this.canvasHeightFactor = settings.stripe.canvasHeightFactor;
        this.gapBetweenLanes = settings.stripe.gapBetweenLanes;
        this.verticalStart = verticalStart;
        this.positionX = this.canvas.width + (verticalStart * this.gapBetweenLanes);
        this.positionY = (this.canvas.height / this.canvasHeightFactor + settings.road.freeSpace) + (this.verticalStart - settings.stripe.height / this.canvasWidthFactor);
        this.speed = 40;
        this.resize();
    }

    override draw() {
        this.ctx.save();
        this.ctx.translate(this.positionX, this.positionY);
        this.ctx.fillStyle = settings.stripe.color;
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fill();
        this.ctx.closePath();
        this.ctx.restore();
    }

    update() {
        this.positionX -= this.speed;
        this.draw();
    }

}