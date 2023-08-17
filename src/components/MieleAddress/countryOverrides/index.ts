import { AddressOverrides } from "./@types/countrySlotsMap";
import defaultAddress from "./countryAddressOverrides/Default";
import germanOverride from "./countryAddressOverrides/Germany";
import kenyanOverride from "./countryAddressOverrides/Kenya";
import netherlandsOverride from "./countryAddressOverrides/Netherlands";

/**
 * Map of all available country codes with their corresponding Address overrides
 */
export const countryOverrides: AddressOverrides.OverrideMap = {
  ...defaultAddress,
  ...germanOverride,
  ...netherlandsOverride,
  ...kenyanOverride,
};
