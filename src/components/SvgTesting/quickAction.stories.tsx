import type { Meta, StoryObj, Decorator } from "@storybook/react";

import QuickAction from "../../components/SvgTesting/quickAction";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const ResetCssDecorator: Decorator = (Story) => {
  const theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          margin: 0,
          padding: 0,
          boxSizing: "border-box"
        }
      }
    }
  });
  
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <h1>Decorator works!</h1>
      <Story />
    </ThemeProvider>
  )
}

const meta: Meta<typeof QuickAction> = {
  title: "QuickActions",
  component: QuickAction,
  tags: ["autodocs"],
  args: {
    color: "white"
  },
  argTypes: {
    iconName: {
      control: {
        type: "select",
      },
      options: [
        "BARCODE_OUTLINE_54",
        "CUSTOMER_FILLED_CIRCLE_OUTLINE_32",
        "CUSTOMER_FILLED_CIRCLE_OUTLINE_54",
        "SEARCH_OUTLINE_54",
        "SHOPPING_BAG_OUTLINE_54"
      ]
    }
  },
  decorators: [
    ResetCssDecorator
  ],
};

export default meta;

type Story = StoryObj<typeof QuickAction>;

export const Barcode54: Story = {
  args: {
    title: "Barcode54",
    description: "Barcode54 description",
    iconName: "BARCODE_OUTLINE_54"
  }
}

export const Customer32: Story = {
  args: {
    title: "Customer32",
    description: "Customer32 description",
    iconName: "CUSTOMER_FILLED_CIRCLE_OUTLINE_32"
  }
}

export const Customer54: Story = {
  args: {
    title: "Customer54",
    description: "Customer54 description",
    iconName: "CUSTOMER_FILLED_CIRCLE_OUTLINE_54"
  }
}

export const Search54: Story = {
  args: {
    title: "Search",
    description: "Search description",
    iconName: "SEARCH_OUTLINE_54"
  }
}

export const ShoppingBag54: Story = {
  args: {
    title: "Search",
    description: "Search description",
    iconName: "SHOPPING_BAG_OUTLINE_54"
  }
}