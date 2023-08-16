import { Typography } from "@mui/material";
import { Country, countries } from "countries-list";
import { countryOverrides } from "./countrySlotsMap/index";

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
}

/**
 * Get the country for the given country code
 *
 * @param code ISO 3166-1 alpha-2 country code
 * @returns
 */
export const getCountry = (code?: Address["country"]) => {
    if (!code) return;

    const country = countries[code.toUpperCase() as Address["country"]];

    return country as Country | undefined;
};

const AddressDisplay = (props: AddressDisplayProps) => {
    const { address, email } = props;
    const country = getCountry(address?.country);

    if (!address) return null;

    const override = countryOverrides[address.country];

    const NameOverride = override?.name ? override.name : null;
    const PostCodeOverride = override?.postCode ? override?.postCode : null;
    const StreetOverride = override?.street ? override.street : null;

    return (
        <div>
            {NameOverride
                ? <NameOverride
                    address={address}
                    country={country}
                    email={email}
                />
                : <Typography >
                    <b>
                        {address.firstName} {address.lastName}
                    </b>
                </Typography>
            }

            {email &&
                (<Typography >
                    {email}
                </Typography>)
            }

            {StreetOverride
                ? <StreetOverride
                    address={address}
                    country={country}
                    email={email}
                />
                : <Typography >
                    {address.streetNumber} {address.street}
                </Typography>
            }

            {PostCodeOverride
                ? <PostCodeOverride
                    address={address}
                    country={country}
                    email={email}
                />
                : <Typography >
                    {address.city} {address.postCode}, {country?.name || address.country}
                </Typography>
            }
        </div>
    );
};

export default AddressDisplay;
