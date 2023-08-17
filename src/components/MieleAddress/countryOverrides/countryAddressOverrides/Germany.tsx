import { Typography } from "@mui/material";
import { AddressOverrides } from "../@types/countrySlotsMap";

const germanOverride: AddressOverrides.CountryOverride<"DE"> = {
    DE: ({ address, country, email, isWithinOrder }) => (
        <>
            <Typography fontWeight={!isWithinOrder ? 600 : ""} >
                {address.firstName} {address.lastName}
            </Typography>
            {email
                ? <Typography>
                    {email}
                </Typography >
                : null
            }
            <Typography>
                {address.postCode} {address.city}, {country?.name || address.country}
            </Typography>
            <Typography >
                {address.streetNumber} {address.street}
            </Typography>
        </>
    )
}

export default germanOverride