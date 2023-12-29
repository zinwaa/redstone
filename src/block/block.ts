import {
    CActivatorRail, CBarrel, CBlock, CDetectorRail, CDispenser, CDropper, CHoneyBlock, CIronDoor, CNoteBlock,
    CObserver, CPoweredRail, CRedstone_wall_torch, CRepeater, CSlimeBlock, Cauldron, Composter, CFenceGate,
    COakTrapdoor, CIronTrapdoor, CRedstoneLamp, CSlab, CSand, CScaffolding, CLectern, CTerracotta, CObsidian,
    CTarget, Clever, CPistonHead, CHopper, CPiston, CRedstone_dust, CRedstone_torch, Comparator, CWater, CLave, CSign, CTNT, CFireCoralFan
} from "@/class/block";
import { EPistonPushBehavior } from "@/enum/enum";


export const redstone_dust = new CRedstone_dust({
    id: 1,
    name: "RedstoneDust",
    replaceable: false,
    solidBlock: false,
    conductor: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})

export const redstone_torch = new CRedstone_torch({
    id: 2,
    name: "RedstoneTorch",
    replaceable: false,
    solidBlock: false,
    conductor: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const redstone_wall_torch = new CRedstone_wall_torch({
    id: 3,
    name: "RedstoneWallTorch",
    replaceable: false,
    solidBlock: false,
    conductor: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const redstone_block = new CBlock({
    id: 4,
    name: "RedstoneBlock",
    replaceable: false,
    solidBlock: true,
    conductor: false,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const repeater = new CRepeater({
    id: 5,
    name: "Repeater",
    replaceable: false,
    solidBlock: false,
    conductor: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const comparator = new Comparator({
    id: 6,
    name: "Comparator",
    replaceable: false,
    solidBlock: false,
    conductor: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const target = new CTarget({
    id: 7,
    name: "Target",
    replaceable: false,
    conductor: true,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const lever = new Clever({
    id: 8,
    name: "Lever",
    replaceable: false,
    solidBlock: false,
    conductor: true,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const button = new Clever({
    id: 9,
    name: "Button",
    conductor: false,
    replaceable: false,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const piston = new CPiston({
    id: 10,
    name: "Piston",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pistonpulled, EPistonPushBehavior.pistonpushed]
})
export const sticky_piston = new CPiston({
    id: 9,
    name: "Piston",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pistonpulled, EPistonPushBehavior.pistonpushed]
})
export const piston_head = new CPistonHead({
    id: 11,
    name: "PistonHead",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpush, EPistonPushBehavior.unpull]
})
export const slime_block = new CSlimeBlock({
    id: 12,
    name: "SlimeBlock",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const honey_block = new CHoneyBlock({
    id: 13,
    name: "HoneyBlock",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const dispenser = new CDispenser({
    id: 14,
    name: "Dispenser",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})
export const dropper = new CDropper({
    id: 15,
    name: "Dropper",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})
export const hopper = new CHopper({
    id: 16,
    name: "Hopper",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})
export const barrel = new CBarrel({
    id: 17,
    name: "Barrel",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})
export const observer = new CObserver({
    id: 18,
    name: "Observer",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const note_block = new CNoteBlock({
    id: 19,
    name: "NoteBlock",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const composter = new Composter({
    id: 20,
    name: "Composter",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const cauldron = new Cauldron({
    id: 21,
    name: "Cauldron",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const powered_rail = new CPoweredRail({
    id: 22,
    name: "PoweredRail",
    conductor: false,
    replaceable: false,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const activator_rail = new CActivatorRail({
    id: 23,
    name: "ActivatorRail",
    conductor: false,
    replaceable: false,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const detector_rail = new CDetectorRail({
    id: 24,
    name: "DetectorRail",
    conductor: false,
    replaceable: false,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const iron_door = new CIronDoor({
    id: 25,
    name: "IronDoor",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const fence_gate = new CFenceGate({
    id: 26,
    name: "FenceGate",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const oak_trapdoor = new COakTrapdoor({
    id: 27,
    name: "OakTrapdoor",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const iron_trapdoor = new CIronTrapdoor({
    id: 28,
    name: "IronTrapdoor",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const redstone_lamp = new CRedstoneLamp({
    id: 29,
    name: "RedstoneLamp",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})



//必要方块
export const smooth_stone = new CBlock({
    id: 30,
    name: "SmoothStone",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const smooth_stone_slab = new CSlab({
    id: 31,
    name: "SmoothStoneSlab",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const sand = new CSand({
    id: 32,
    name: "Sand",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const glass = new CBlock({
    id: 33,
    name: "Glass",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const scaffolding = new CScaffolding({
    id: 34,
    name: "Scaffolding",
    conductor: false,
    replaceable: false,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.pushDestroy, EPistonPushBehavior.unpull]
})
export const lectern = new CLectern({
    id: 35,
    name: "Lectern",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})
export const terracotta = new CTerracotta({
    id: 36,
    name: "Terracotta",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const obsidian = new CObsidian({
    id: 37,
    name: "Obsidian",
    conductor: true,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})



//流体和告示牌
export const water = new CWater({
    id: 38,
    name: "Water",
    conductor: false,
    replaceable: true,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.pushDestroy],
})
export const flowing_water = new CWater({
    id: 39,
    name: "FlowingWater",
    conductor: false,
    replaceable: true,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.pushDestroy],
    falling: true
})
export const lava = new CLave({
    id: 40,
    name: "Lava",
    conductor: false,
    replaceable: true,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.pushDestroy],
})
export const flowing_lava = new CLave({
    id: 41,
    name: "FlowingLava",
    conductor: false,
    replaceable: true,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.pushDestroy],
    falling: true
})
export const sign = new CSign({
    id: 42,
    name: "Sign",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.unpull, EPistonPushBehavior.unpush]
})



//TNT复制
export const tnt = new CTNT({
    id: 43,
    name: "TNT",
    conductor: false,
    replaceable: false,
    solidBlock: true,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})
export const fire_coral_fan = new CFireCoralFan({
    id: 44,
    name: "FireCoralFan",
    conductor: false,
    replaceable: false,
    solidBlock: false,
    PistonPushBehavior: [EPistonPushBehavior.pull, EPistonPushBehavior.push]
})