import {Hsl} from "./Helpers/Hsl";
import {Canvas} from "./Drawable/Canvas";

export const settings = {
    canvas : {
        width: 1200,
        height: 700,
    },
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
            firstLane: 128,
            secondLane: 256
        },
        gapBetweenLanes: 0.7,
        speed: 20,
    },
    playerCar: {
        ratio: 2.74,
        carSizeFactor: 3.5,
        startX: 100,
        speed: 2,
    },
    animation : {
        maxStripes: 10,
        frameCounter: 0,
        frameInterval: 15,
    }
}
