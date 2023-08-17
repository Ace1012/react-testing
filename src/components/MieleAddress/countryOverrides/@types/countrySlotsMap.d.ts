import { Country, countries } from "countries-list";
import { Address } from "../../addressDisplay";

declare namespace AddressOverrides {
  /**
   * Country code e.g "CA", "DE" etc.
   */
  export type CountryCode = keyof typeof countries;

  /**
   * {@link AddressOverrideComponent} props definition
   */
  export interface AddressOverrideComponentProps {
    address: Address;
    country?: Country;
    email?: string;
    isWithinOrder?: boolean;
  }

  /**
   * React.FC component used to override a specific section
   */
  export type AddressOverrideComponent =
    React.FC<AddressOverrideComponentProps>;

  /**
   * Map of a country's code {@link CountryCodeInstance} with its corresponding override {@link AddressOverrideComponent}
   */
  export type CountryOverride<CountryCodeInstance extends CountryCode> = Record<
    CountryCodeInstance,
    AddressOverrideComponent
  >;

  /**
   * Map of all available country overrides
   */
  export type OverrideMap = Partial<
    Record<CountryCode, AddressOverrideComponent>
  >;
}
