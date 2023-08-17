import { Typography } from "@mui/material";
import { AddressOverrides } from "../@types/countrySlotsMap";

const defaultAddress: AddressOverrides.CountryOverride<"CA"> = {
    CA: ({ address, country, email, isWithinOrder }) => (
        <>
            <Typography fontWeight={!isWithinOrder ? 600 : ""}>
                {address.firstName} {address.lastName}
            </Typography>
            {email
                ? <Typography>
                    {email}
                </Typography >
                : null
            }
            <Typography >
                {address.city} {address.postCode}, {country?.name || address.country}
            </Typography>
            <Typography >
                {address.streetNumber} {address.street}
            </Typography>
        </>
    )
}

export default defaultAddress;