import { Country, countries } from "countries-list";
import { countryOverrides } from "./countryOverrides/index";

export interface Address {
    objectKey: string;
    entityId: number;
    createdDate: Date;
    updatedDate: Date;

    derivedFromKey?: string;
    addressNumber?: string;
    city: string;
    cityDistrict?: string;
    country: keyof typeof countries;
    firstName: string;
    lastName: string;
    postCode: string;
    strate?: string;
    street?: string;
    building?: string;
    streetNumber?: string;
    supplement?: string;
    salutation?: string;
    attributeValues?: Record<string, unknown>;

    defaultDeliveryAddress?: boolean;
    valid?: boolean;
    _id: number;
    _objectKind: "Address";
    _objectKey?: string;
}

interface AddressDisplayProps {
    address?: Address;
    email?: string;
    isWithinOrder?: boolean
}

/**
 * Get the country for the given country code
 *
 * @param code ISO 3166-1 alpha-2 country code
 * @returns
 */
export const getCountry = (code: Address["country"]) => {
    if (!code) return;

    const country = countries[code.toUpperCase() as Address["country"]];

    return country as Country | undefined;
};

const AddressDisplay = (props: AddressDisplayProps) => {
    const { address, email, isWithinOrder } = props;

    if (!address) return null;

    const country = getCountry(address.country);

    const DefaultAddress = countryOverrides["CA"]!
    const Override = countryOverrides[address.country];

    return (
        <>
            {Override
                ? <Override
                    address={address}
                    country={country}
                    email={email}
                    isWithinOrder={isWithinOrder}
                />
                : <DefaultAddress
                    address={address}
                    country={country}
                    email={email}
                    isWithinOrder={isWithinOrder}
                />}
        </>
    );
};

export default AddressDisplay;
