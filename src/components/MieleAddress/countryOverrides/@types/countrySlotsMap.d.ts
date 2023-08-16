import { Country, countries } from "countries-list";
import { Address } from "../../addressDisplay";

declare namespace Address {
  /**
   * Country code e.g "CA", "DE" etc
   */
  export type CountryCode = keyof typeof countries;

  /**
   * Keys  corresponding to the possible address overrides
   */
  export type OverrideKeys = "name" | "street" | "postCode";

  /**
   * SectionOverride props definition
   */
  export interface SectionOverrideProps {
    address: Address;
    country: Country | undefined;
    email?: string;
  }

  /**
   * React.FC component used to override a specific section
   */
  export type SectionOverride = React.FC<SectionOverrideProps>;

  /**
   * Map of available overrides of specific sections
   */
  export type OverrideSchema = Partial<Record<OverrideKeys, SectionOverride>>;

  /**
   * Map of a country's code with its corresponding overrides
   */
  export type CountryOverrides<T extends CountryCode> = Record<
    T,
    OverrideSchema
  >;

  /**
   * Map of all available country codes with their corresponding overrides
   */
  export type OverrideMap = Partial<Record<CountryCode, OverrideSchema>>;
}
