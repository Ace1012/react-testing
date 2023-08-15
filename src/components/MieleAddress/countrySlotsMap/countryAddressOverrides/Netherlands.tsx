import { Typography } from "@mui/material";
import { Address } from "../@types/countrySlotsMap";

const netherlandsOverride: Address.Overrides.CountryOverrides<"NL"> = {
    NL: {
        postCode: ({ address, country }) => (
            <Typography >
                <h1>Netherlands</h1>
                {address.postCode} {address.city}, {country?.name || address.country}
            </Typography>
        )
    }
}

export default netherlandsOverride;