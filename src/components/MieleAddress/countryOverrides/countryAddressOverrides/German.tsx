import { Typography } from "@mui/material";
import { Address } from "../@types/countrySlotsMap";

const germanOverride: Address.CountryOverrides<"DE"> = {
    DE: {
        postCode: ({ address, country }) => (
            <Typography >
                <h1>German</h1>
                {address.postCode} {address.city}, {country?.name || address.country}
            </Typography>
        )
    }
}

export default germanOverride