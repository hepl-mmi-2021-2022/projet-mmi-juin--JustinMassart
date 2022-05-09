import {IDrawable} from "../Interface/IDrawable";
import {settings} from "../settings";

export abstract class Canvas implements IDrawable {
    protected readonly canvas: HTMLCanvasElement;
    protected readonly ctx: CanvasRenderingContext2D;

    protected constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        this.canvas = canvas;
        this.ctx = ctx;
    }

    resize() {
        this.canvas.width = settings.canvas.width;
        this.canvas.height = settings.canvas.height;
        window.addEventListener('resize', () => {
            this.canvas.width = settings.canvas.width;
            this.canvas.height = settings.canvas.height;
            this.draw();
        })
    }

    draw() {
    }
}