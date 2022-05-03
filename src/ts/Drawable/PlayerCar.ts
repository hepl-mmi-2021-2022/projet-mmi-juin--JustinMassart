import {Canvas} from "./Canvas";
import {Animation} from "../Animation";
import {settings} from "../settings";

export class PlayerCar extends Canvas {
    protected spriteSheetSrc: string;
    protected sprite: HTMLImageElement;
    protected Animation: Animation;
    protected x: number;
    protected y: number;
    protected speed: number;
    protected carFrame: { sx: number; sy: number; sw: number; sh: number; dx: number; dy: number; dw: number; dh: number; };
    protected readonly ratio: number;
    protected readonly carSizeFactor: number;

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx);
        this.spriteSheetSrc = './src/resources/sprites/car2.png'
        this.sprite = new Image()
        this.sprite.src = this.spriteSheetSrc
        this.x = settings.playerCar.startX;
        this.y = this.canvas.height / 2;
        this.speed = 2.8
        this.ratio = settings.playerCar.ratio;
        this.carSizeFactor = settings.playerCar.carSizeFactor;
        this.carFrame = {
            sx: 19,
            sy: 71,
            sw: 63,
            sh: 0,
            dx: 0,
            dy: 0,
            dw: 0,
            dh: 0,
        }
        this.resize();
        this.carFrame.sh = this.carFrame.sw / this.ratio;
        this.carFrame.dw = this.carFrame.sw * this.carSizeFactor;
        this.carFrame.dh = this.carFrame.dw / this.ratio;
        this.sprite.addEventListener('load', () => {
            this.Animation = new Animation();
            this.draw();
        })
        console.log(this.canvas.height)
    }

    override draw() {
        this.ctx.save()
        this.ctx.translate(this.x, this.y)
        this.renderSpriteFrame(this.carFrame)
        this.ctx.restore()
    }


    renderSpriteFrame(coordinates: {
                          sx: any;
                          sy: any;
                          sw: any;
                          sh: any;
                          dx: any;
                          dy: any;
                          dw: any;
                          dh: any;
                      }
    ) {
        this.ctx.drawImage(this.sprite,
            coordinates.sx,
            coordinates.sy,
            coordinates.sw,
            coordinates.sh,
            coordinates.dx,
            coordinates.dy,
            coordinates.dw,
            coordinates.dh,
        )
    }
}