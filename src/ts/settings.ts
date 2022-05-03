import {Hsl} from "./Helpers/Hsl";
import {Canvas} from "./Drawable/Canvas";

export const settings = {
    sky: {
        gradient: ['hsl(207, 100%, 50%)', 'hsl(207, 100%, 68%)'],
    },
    grass: {
        color: 'hsl(98, 100%, 30%)',
    },
    road: {
        color: 'hsl(0,0%,20%)',
        freeSpace: 100,
        width: 600,
    },
    stripe: {
        color: 'hsl(0, 0%, 90%)',
        width: {min: 70, max: 75},
        height: 15,
        verticalStart: {
            firstLane: 200,
            secondLane: 400
        },
        canvasWidthFactor: 2,
        canvasHeightFactor: 6,
        gapBetweenLanes: 0.7,
    },
    playerCar: {
        ratio: 2.74,
        carSizeFactor: 5,
        startX: 100,
    }
}
