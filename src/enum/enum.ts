export enum EPistonPushBehavior {
    pushDestroy = 1,    //1
    unpush,             //2
    push,               //3
    unpull,             //4
    pull,               //5
    pistonpulled = EPistonPushBehavior.push + EPistonPushBehavior.pull,     // 8
    pistonpushed = EPistonPushBehavior.unpull + EPistonPushBehavior.unpush, // 6
}