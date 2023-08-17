import { Meta, StoryObj } from "@storybook/react";
import AddressDisplay, { Address } from "./addressDisplay";
import { countries } from "countries-list";

const address: Address = {
    "country": "CA",
    "lastName": "MILLER",
    "city": "COALDALE",
    // "email": "johndoe@gmail.com",
    "defaultDeliveryAddress": false,
    "valid": false,
    "street": "22 ST",
    "streetNumber": "1020",
    "attributeValues": {
        "postcodeInformation": "{\"postcode\":\"AB T1M 1J5\",\"warehouseCode\":\"6\",\"channelType\":7,\"allowedServices\":[],\"simpleInstallationAvailable\":false,\"complexInstallationAvailable\":true,\"recyclingAvailable\":false}"
    },
    "firstName": "DONALD",
    "postCode": "AB T1M 1J5",
    "_id": 3,
    "_objectKey": "45JTT5XF4ZF6FDZ4OTQPOSFWYI",
    "_objectKind": "Address",
    objectKey: "",
    entityId: 0,
    createdDate: new Date(),
    updatedDate: new Date()
}

const countryCodes = Object.keys(countries);

const meta: Meta<typeof AddressDisplay> = {
    title: "AddressDisplay",
    component: AddressDisplay,
    tags: ["autodocs"],
    args: {
        email: "",
        isWithinOrder: false,
        address: {
            ...address,
            country: "CA"
        },
    },
    argTypes: {
        email: {
            description: "Optional email field.\n\n Email is not rendered when omitted",
        },
        isWithinOrder: {
            description: "Used to test a possible approach to control when the name is in bold: \n\n - If within order then the name is bolded \n\n - If not then the name is bolded.",
            defaultValue: false
        },
        address: {
            description: "Represents an optional Address object",
            /**
             * Research how to enable/include and customize object properties' controls
             */
            country: {
                description: "hey",
                options: countryCodes,
                control: {
                    type: "select"
                }
            }
        }
    }
}
export default meta;

type Story = StoryObj<typeof AddressDisplay>;

export const Default: Story = {
    name: "Default - Canadian"
}

export const NoArgs: Story = {
    name: "NoArgs",
    args: {
        address: undefined,
        email: undefined,
        isWithinOrder: false
    }
}

export const DefaultWithEmail: Story = {
    name: "DefaultWithEmail",
    args: {
        email: "johndoe@gmail.com"
    }
}

export const DefaultWithinOrder: Story = {
    name: "DefaultWithinOrder",
    args: {
        isWithinOrder: true
    }
}

export const Germany: Story = {
    name: "Germany",
    args: {
        address: {
            ...address,
            country: "DE"
        }
    }
}

export const Netherlands: Story = {
    args: {
        address: {
            ...address,
            country: "NL"
        }
    }
}

export const Kenya: Story = {
    args: {
        address: {
            ...address,
            country: "KE"
        }
    }
}