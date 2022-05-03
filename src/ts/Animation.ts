import {Stripe} from "./Drawable/Stripe";
import {settings} from "./settings";


export class Animation {
    protected readonly Stripe: Stripe;
    protected readonly stripes: [];
    protected readonly maxStripes: number;
    protected readonly StripeCanvasElement: HTMLCanvasElement = document.getElementById("stripes") as HTMLCanvasElement;
    protected readonly StripeCanvasCtx: CanvasRenderingContext2D = this.StripeCanvasElement.getContext("2d", {alpha: true}) as CanvasRenderingContext2D;
    protected requestId: number;
    protected frameCounter: number;
    protected frameInterval: number;

    constructor() {
        this.stripes = [];
        this.maxStripes = 12;
        this.frameCounter = 0;
        this.frameInterval = 5;
        this.animate();
        window.addEventListener('keydown', (e) => {
            if (e.key === 's') {
                window.cancelAnimationFrame(this.requestId)
            } else if (e.key === 'g') {
                this.requestId = window.requestAnimationFrame(() => {
                    this.animate();
                })
            }
        })
    }

    animate() {
        this.requestId = window.requestAnimationFrame(() => {
            this.animate()
        })
        this.StripeCanvasCtx.clearRect(0, 0, this.StripeCanvasElement.width, this.StripeCanvasElement.height)
        if (this.frameCounter++ > this.frameInterval) {
            if (this.stripes.length >= this.maxStripes) {
                this.stripes.splice(0, 1)
            }
            // @ts-ignore
            this.stripes.push(new Stripe(this.StripeCanvasElement, this.StripeCanvasCtx, settings.stripe.verticalStart.firstLane))
            // @ts-ignore
            this.stripes.push(new Stripe(this.StripeCanvasElement, this.StripeCanvasCtx, settings.stripe.verticalStart.secondLane))
            this.frameCounter = 0
        }
        this.stripes.forEach((stripe: { update: () => void; }) => {
            stripe.update();
        })
    }

}