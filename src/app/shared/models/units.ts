export interface Units {
  units: Unit[];
}

export interface Unit {
  id: number;
  name: string;
  description: string;
  expansion: string;
  age: AgeType
  cost: CostType,
  build_time: number;
  reload_time: number;
  attack_delay: number;
  movement_rate: number;
  line_of_sight: number;
  hit_points: number;
  range: number;
  attack: number;
  armor: string;
  accuracy: string;
}

export const enum AgeType {
  Feudal = 'Feudal',
  Castle = 'Castle',
  Imperial = 'Imperial',
  Dark = 'Dark',

  All = 'All'
}

export type CostType = Partial<{
  Gold: number;
  Wood: number;
  Food: number;
}>
