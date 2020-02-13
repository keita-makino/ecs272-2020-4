export type Pokemon = {
  Number: number;
  Name: string;
  Type_1: string;
  Type_2: string | null;
  Total: number;
  HP: number;
  Attack: number;
  Defense: number;
  Sp_Atk: number;
  Sp_Def: number;
  Speed: number;
  Generation: number;
  isLegendary: boolean;
  Color: string;
  hasGender: boolean;
  Pr_Male: number | null;
  Egg_Group_1: string;
  Egg_Group_2: string | null;
  hasMegaEvolution: boolean;
  Height_m: number;
  Weight_kg: number;
  Catch_Rate: number;
  Body_Style: string;
};
