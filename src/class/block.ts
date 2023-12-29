import type { BlockType } from '../interface/IBlock'
import type {
    attack, delay, face, facing, pistonType, power, comparatorMode, instrument, note,
    level, shape, half, hinge, distanece, PistonPushBehavior, slabType, direction
} from "@/type/type";


export class CBlock implements BlockType {
    id: number;
    name: string;
    replaceable: boolean;
    solidBlock: boolean;
    conductor: boolean;
    PistonPushBehavior: PistonPushBehavior[];
    constructor(block: BlockType) {
        this.id = block.id;
        this.name = block.name;
        this.replaceable = block.replaceable
        this.solidBlock = block.solidBlock
        this.conductor = block.conductor
        this.PistonPushBehavior = block.PistonPushBehavior
    }
}
export class CRedstone_dust extends CBlock {
    east: attack = 'none';
    west: attack = 'none';
    north: attack = 'none';
    south: attack = 'none';
    constructor(block: BlockType) {
        super(block)
    }
}
export class CRedstone_torch extends CBlock {
    lit: boolean = true;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CRedstone_wall_torch extends CRedstone_torch {
    facing: direction = 'north';
    constructor(block: BlockType) {
        super(block)
    }
}
export class CRepeater extends CBlock {
    delay: delay = 1;
    facing: facing = 'north';
    locked: boolean = false;
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class Comparator extends CBlock {
    facing: facing = 'north';
    comparatorMode: comparatorMode = 'compare';
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CTarget extends CBlock {
    power: power = 0;
    constructor(block: BlockType) {
        super(block)
    }
}
export class Clever extends CBlock {
    face: face = 'wall';
    facing: facing = 'north';
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CPiston extends CBlock {
    extended: boolean = false;
    facing: facing = 'north';
    constructor(block: BlockType) {
        super(block)
    }
}
export class CPistonHead extends CBlock {
    facing: facing = 'north';
    short: boolean = false;
    type: pistonType = 'normal';
    constructor(block: BlockType) {
        super(block)
    }
}
export class CSlimeBlock extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CHoneyBlock extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CDispenser extends CBlock {
    facing: facing = 'north';
    triggered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CDropper extends CBlock {
    facing: facing = 'north';
    triggered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CHopper extends CBlock {
    facing: direction | "down" = 'down';
    enabled: boolean = true;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CBarrel extends CBlock {
    facing: facing = 'north';
    open: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CObserver extends CBlock {
    facing: facing = 'south';
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CNoteBlock extends CBlock {
    instrument: instrument = 'harp';
    note: note = 0;
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class Composter extends CBlock {
    level: level = 0;
    constructor(block: BlockType) {
        super(block)
    }
}
export class Cauldron extends CBlock {
    level: 0 | 1 | 2 | 3 = 0;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CPoweredRail extends CBlock {
    powered: boolean = false;
    shape: shape = 'north_south';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CActivatorRail extends CBlock {
    powered: boolean = false;
    shape: shape = 'north_south';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CDetectorRail extends CBlock {
    powered: boolean = false;
    shape: shape = 'north_south';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CIronDoor extends CBlock {
    hinge: hinge = 'left';
    half: half = 'upper';
    powered: boolean = false;
    open: boolean = false;
    facing: direction = 'north';
    constructor(block: BlockType) {
        super(block)
    }
}
export class CFenceGate extends CBlock {
    facing: direction = 'north';
    open: boolean = false;
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
class CTrapdoor extends CBlock {
    facing: direction = 'north';
    open: boolean = false;
    powered: boolean = false;
    half: slabType = 'bottom';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class COakTrapdoor extends CTrapdoor {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CIronTrapdoor extends CTrapdoor {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CRedstoneLamp extends CBlock {
    lit: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CSlab extends CBlock {
    type: slabType = 'bottom';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CSand extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CGlass extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CScaffolding extends CBlock {
    bottom: boolean = false;
    distanece: distanece = 0;
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CLectern extends CBlock {
    hasBook: boolean = false;
    facing: direction = 'north';
    powered: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CTerracotta extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CObsidian extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CWater extends CBlock {
    falling: boolean = false;
    flowSpeed: number = 0.2; // 米每刻
    level: power = 0;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CLave extends CBlock {
    flowSpeed: number = 0.04; // 米每刻
    level: power = 0;
    falling: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CSign extends CBlock {
    facing: direction = 'north';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}
export class CTNT extends CBlock {
    constructor(block: BlockType) {
        super(block)
    }
}
export class CFireCoralFan extends CBlock {
    facing: direction = 'north';
    waterlogged: boolean = false;
    constructor(block: BlockType) {
        super(block)
    }
}