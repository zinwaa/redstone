import type {
    attack, delay, face, facing, pistonType, power, comparatorMode, instrument, note,
    level, shape, half, hinge, distanece, PistonPushBehavior
} from "@/type/type";


export interface BlockType {
    id: number;
    name: string;
    replaceable: boolean;
    solidBlock: boolean;
    conductor: boolean;
    PistonPushBehavior: PistonPushBehavior[];
    east?: attack;
    west?: attack;
    north?: attack;
    south?: attack;
    power?: power;
    lit?: boolean;
    facing?: facing;
    delay?: delay;
    locked?: boolean;
    powered?: boolean;
    face?: face;
    extended?: boolean;
    short?: boolean;
    pistonType?: pistonType;
    comparatorMode?: comparatorMode;
    triggered?: boolean;
    enabled?: boolean;
    open?: boolean;
    instrument?: instrument;
    note?: note;
    level?: level | power;
    waterlogged?: boolean;
    shape?: shape;
    half?: half;
    hinge?: hinge;
    distanece?: distanece;
    createSource?: boolean;
    flowSpeed?: number; // 米每刻
    falling?: boolean;
}