import {Canvas} from "./Canvas";
import {settings} from "../settings";
import {Animation} from "../Animation";

export class PlayerCar extends Canvas {
    protected spriteSheetSrc: string;
    public sprite: HTMLImageElement;
    protected x: number;
    protected y: number;
    protected speed: number;
    protected Vspeed: number;
    protected Hspeed: number;
    protected straightCarFrame: { sx: number; sy: number; sw: number; sh: number; dx: number; dy: number; dw: number; dh: number; };
    protected rightCarFrame: { sx: number; sy: number; sw: number; sh: number; dx: number; dy: number; dw: number; dh: number; };
    protected leftCarFrame: { sx: number; sy: number; sw: number; sh: number; dx: number; dy: number; dw: number; dh: number; };
    protected readonly ratio: number;
    protected readonly carSizeFactor: number;
    protected game: Animation["game"];

    constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
        super(canvas, ctx);
        this.resize();
        this.spriteSheetSrc = './src/resources/sprites/car2.png'
        this.sprite = new Image()
        this.sprite.src = this.spriteSheetSrc
        this.Vspeed = 0;
        this.Hspeed = 0;
        this.speed = settings.playerCar.speed;
        this.ratio = settings.playerCar.ratio;
        this.carSizeFactor = settings.playerCar.carSizeFactor;
        this.straightCarFrame = {
            sx: 19,
            sy: 71,
            sw: 63,
            sh: 23,
            dx: 0,
            dy: 0,
            dw: 0,
            dh: 0,
        }
        this.rightCarFrame = {
            sx: 86,
            sy: 70,
            sw: 63,
            sh: 26,
            dx: 0,
            dy: 0,
            dw: 0,
            dh: 0,
        }
        this.leftCarFrame = {
            sx: 468,
            sy: 21,
            sw: 62,
            sh: 25,
            dx: 0,
            dy: 0,
            dw: 0,
            dh: 0,
        }
        this.straightCarFrame.dw = this.straightCarFrame.sw * this.carSizeFactor;
        this.straightCarFrame.dh = this.straightCarFrame.dw / this.ratio;
        this.rightCarFrame.dw = this.straightCarFrame.sw * this.carSizeFactor;
        this.rightCarFrame.dh = this.straightCarFrame.dw / this.ratio;
        this.leftCarFrame.dw = this.straightCarFrame.sw * this.carSizeFactor;
        this.leftCarFrame.dh = this.straightCarFrame.dw / this.ratio;
        this.x = settings.playerCar.startX;
        this.y = this.canvas.height / 2 + this.straightCarFrame.sh / 2;
        this.listeners();
    }

    override draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.save()
        this.ctx.translate(this.x, this.y)
        this.renderSpriteFrame(this.straightCarFrame);
        this.ctx.restore()

    }

    update() {
        this.x += this.Hspeed;
        this.y += this.Vspeed;
        this.draw();
    }

    listeners() {
        window.addEventListener('keyup', (e) => {
            this.Hspeed = 0;
            this.Vspeed = 0;
        });
        window.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowUp') {
                    if (!this.game) {
                        this.game = true;
                    }
                    this.Vspeed = -2;
                }
            }
        )
        window.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowDown') {
                    if (!this.game) {
                        this.game = true;
                    }
                    this.Vspeed = 2;
                }
            }
        )
        window.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowLeft') {
                    if (!this.game) {
                        this.game = true;
                    }
                    this.Hspeed = -2;
                }
            }
        )
        window.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    if (!this.game) {
                        this.game = true;
                    }
                    this.Hspeed = 2;
                }
            }
        )
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