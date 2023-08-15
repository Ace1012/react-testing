import { styled } from "@mui/material";
import QuickAction from "./quickAction";
import { MyThemeProvider } from "./myThemeContext";

interface IQuickActionsContainerProps { }

const StyledWrapper = styled("div")`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1%;
    width: 100%;
    margin: 1rem 0;
    padding: 0 1.25rem;
`

const QuickActionsContainer = ({ }: IQuickActionsContainerProps) => {

    return (
        <StyledWrapper>
            <MyThemeProvider>
                <QuickAction title="Scan" description="Lorem ipsum dolor sit amet consectetur." iconName="BARCODE_OUTLINE_54" />
                <QuickAction title="Search" description="Lorem ipsum dolor sit amet consectetur." iconName="SEARCH_OUTLINE_54" />
                <QuickAction title="Customer" description="Lorem ipsum dolor sit amet consectetur." iconName="CUSTOMER_FILLED_CIRCLE_OUTLINE_32" />
                <QuickAction title="Cart" description="Lorem ipsum dolor sit amet consectetur." iconName="SHOPPING_BAG_OUTLINE_54" />
            </MyThemeProvider>
        </StyledWrapper>
    )
}
export default QuickActionsContainer;