import { EPistonPushBehavior } from "@/enum/enum";

export type attack = 'none' | 'side' | 'up'
export type power = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15
export type facing = 'north' | 'east' | 'south' | 'west' | 'up' | 'down'
export type direction = 'north' | 'east' |'south' | 'west'
export type PistonPushBehavior = EPistonPushBehavior
export type delay = 1 | 2 | 3 | 4
export type face = 'floor' | 'ceiling' | 'wall'
export type pistonType = 'normal' | 'sticky'
export type comparatorMode = 'compare' | 'subtract'
export type instrument = 'banjo' | 'basedrum' | 'bass' | 'bell' | 'bit' | 'chime' | 'cow_bell' |
    'creeper' | 'custom_head' | 'didgeridoo' | 'dragon' | 'flute' | 'guitar' | 'harp' | 'hat' |
    'iron_xylophone' | 'piglin' | 'pling' | 'skeleton' | 'snare' | 'wither_skeleton' | 'xylophone' | 'zombie'
export type note = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 |
    12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export type level = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
export type shape = 'north_south' | 'east_west' | 'ascending_north' | 'ascending_south' | 'ascending_east' | 'ascending_west'
export type half = 'upper' | 'lower'
export type hinge = 'left' | 'right'
export type slabType = 'top' | 'bottom'
export type distanece = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7