import { IOffset } from "./offset.interface";

export interface RustOffsets {
    BasePlayer: IOffset[],
    BaseEntity: IOffset[],
    BaseCombatEntity: IOffset[],
    BuildingPrivlidge: IOffset[],
    BaseProjectile: IOffset[],
    Magazine: IOffset[],
    PlayerInventory: IOffset[],
    ItemContainer: IOffset[],
    PlayerModel: IOffset[],
    ModelState: IOffset[],
    Item: IOffset[],
    ItemDefinition: IOffset[],
    DroppedItem: IOffset[],
    WorldItem: IOffset[],
    Model: IOffset[],
    RecoilProperties: IOffset[],
    BaseFishingRod: IOffset[],
    FishingBobber: IOffset[],
    OcclusionCulling: IOffset[],
    OcclusionCulling_DebugSettings: IOffset[],

    [key: string]: IOffset[],
}