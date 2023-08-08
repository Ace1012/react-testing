import { Property } from "csstype"

export interface IHero {
  id: number;
  name: string;
  alterEgo: string;
}

export interface IColor {
  id: number;
  label: Property.Color;
}
