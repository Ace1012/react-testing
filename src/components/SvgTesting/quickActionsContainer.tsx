import { styled } from "@mui/system";
import QuickAction from "./quickAction";
import { BarcodeOutline54, CustomerFilledCircleOutline32, CustomerFilledCircleOutline54, SearchOutline54, ShoppingBagOutline54 } from "./MenuIcons";
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
                    <QuickAction title="Scan" description="Lorem ipsum dolor sit amet consectetur.">
                        <BarcodeOutline54 />
                    </QuickAction>
                    <QuickAction title="Search" description="Lorem ipsum dolor sit amet consectetur.">
                        <SearchOutline54 />
                    </QuickAction>
                    <QuickAction title="Customer" description="Lorem ipsum dolor sit amet consectetur.">
                        <CustomerFilledCircleOutline32 />
                        {/* <CustomerFilledCircleOutline54 /> */}
                    </QuickAction>
                    <QuickAction title="Cart" description="Lorem ipsum dolor sit amet consectetur.">
                        <ShoppingBagOutline54 />
                    </QuickAction>
                </MyThemeProvider>
        </StyledWrapper>
    )
}
export default QuickActionsContainer;