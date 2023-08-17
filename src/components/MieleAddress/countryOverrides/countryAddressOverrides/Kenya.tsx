import { Typography } from "@mui/material";
import { AddressOverrides } from "../@types/countrySlotsMap";

const kenyanOverride: AddressOverrides.CountryOverride<"KE"> = {
    KE: ({ address, country, email, isWithinOrder }) => (
        <>
            <Typography fontWeight={!isWithinOrder ? 600 : ""}>
                Kenyan - {address.firstName} {address.lastName}
            </Typography>
            <Typography>
                <b>{email}</b>
            </Typography>
            <Typography>
                {address.street} {address.streetNumber} | {country?.name || address.country}
            </Typography>
            <Typography>
                {address.postCode}
            </Typography>
        </>
    )
}

export default kenyanOverride;