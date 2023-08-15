import { Meta, StoryObj } from "@storybook/react";
import AddressDisplay, { Address } from "./addressDisplay";

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

const meta: Meta<typeof AddressDisplay> = {
    title: "AddressDisplay",
    component: AddressDisplay,
    args: {
        email: "",
        address,
    },
}
export default meta;

type Story = StoryObj<typeof AddressDisplay>;

export const Canadian: Story = {
    name: "Default - Canadian"
}

export const German: Story = {
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

export const WithEmail: Story = {
    args: {
        email: "johndoe@gmail.com"
    }
}

export const WithinOrderWithEmail: Story = {
    args: {
        email: "johndoe@gmail.com",
    }
}

export const isOrder: Story = {
    args: {
        email: "johndoe@gmail.com",
        address: {
            ...address,
            country: "DE"
        }
    }
}