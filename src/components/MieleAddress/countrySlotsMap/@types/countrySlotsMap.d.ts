import { Country, countries } from "countries-list";
import { Address } from "../../addressDisplay";

declare namespace Address.Overrides {
  export type CountryCode = keyof typeof countries;

  export type OverrideKeys = "name" | "street" | "postCode";

  export interface SectionOverrideProps {
    address: Address;
    country: Country | undefined;
    email?: string;
  }

  export type SectionOverride = (props: SectionOverrideProps) => JSX.Element;

  export type OverrideSchema = Partial<Record<OverrideKeys, SectionOverride>>;

  export type CountryOverrides<T extends CountryCode> = {
    [P in keyof Pick<typeof countries, T>]: OverrideSchema;
  };

  export type OverrideMap = Partial<Record<CountryCode, OverrideSchema>>;
}
