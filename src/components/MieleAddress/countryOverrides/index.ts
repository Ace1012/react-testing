import { Address } from "./@types/countrySlotsMap";
import germanOverride from "./countryAddressOverrides/German";
import netherlandsOverride from "./countryAddressOverrides/Netherlands";

export const countryOverrides: Address.OverrideMap = {
  ...germanOverride,
  ...netherlandsOverride,
};
