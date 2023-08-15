import { Meta, StoryObj } from "@storybook/react";
import SVGWrapper from "../../components/SvgTesting/svgWrapper";
import { menuIconsMapper } from "../../components/SvgTesting/MenuIconsMap/menuIconsMap";

const meta: Meta<typeof SVGWrapper> = {
    title: "SVGWrapper",
    component: SVGWrapper,
    args: {
        size: "md",
        color: "white"
    },
    argTypes: {
        size: {
            options: ["xl", "lg", "md", "sm", "xs"],
            control: {
                type: "select"
            }
        },
        color: {
            control: {
                type: "color"
            }
        }
    }
}
export default meta;

type Story = StoryObj<typeof SVGWrapper>;

const SVGChild = ({ svgName }: { svgName: Menu.Icon.MenuIconName }) => {
    const Icon = menuIconsMapper[svgName];
    return <Icon />
}

export const Barcode54: Story = {
    args: {
        children: <SVGChild svgName="BARCODE_OUTLINE_54" />,
    }
}

export const Customer32: Story = {
    args: {
        children: <SVGChild svgName="CUSTOMER_FILLED_CIRCLE_OUTLINE_32" />,
    }
}

export const Customer54: Story = {
    args: {
        children: <SVGChild svgName="CUSTOMER_FILLED_CIRCLE_OUTLINE_54" />,
    }
}

export const Search54: Story = {
    args: {
        children: <SVGChild svgName="SEARCH_OUTLINE_54" />,
    }
}

export const Shopping54: Story = {
    args: {
        children: <SVGChild svgName="SHOPPING_BAG_OUTLINE_54" />,
    }
}

export const Customer32Large: Story = {
    args: {
        children: <SVGChild svgName="CUSTOMER_FILLED_CIRCLE_OUTLINE_32" />,
        size: "lg"
    }
}

export const Customer54Large: Story = {
    args: {
        children: <SVGChild svgName="CUSTOMER_FILLED_CIRCLE_OUTLINE_54" />,
        size: "lg"
    }
}

export const Barcode54_180: Story = {
    args: {
        children: <SVGChild svgName="BARCODE_OUTLINE_54" />,
        size: 180
    }
}