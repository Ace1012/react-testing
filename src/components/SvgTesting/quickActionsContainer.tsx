import { styled } from "styled-components";
import IconContainer from "./iconContainer";
import { BarcodeOutline54, CustomerFilledCircleOutline, SearchOutline54, ShoppingBagOutline54 } from "./MenuIcons";

interface IQuickActionsContainerProps { }

const StyledWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    width: 100%;
    margin: 1rem 0;
    padding: 0 1.25rem;
`

const QuickActionsContainer = ({ }: IQuickActionsContainerProps) => {
    return (
        <StyledWrapper>
            {/* <h1>QuickActionsContainer</h1> */}
            <IconContainer title="Scan" description="Lorem ipsum dolor sit amet consectetur.">
                <BarcodeOutline54 />
            </IconContainer>
            <IconContainer title="Search" description="Lorem ipsum dolor sit amet consectetur.">
                <SearchOutline54 />
            </IconContainer>
            <IconContainer title="Customer" description="Lorem ipsum dolor sit amet consectetur.">
                <CustomerFilledCircleOutline />
            </IconContainer>
            <IconContainer title="Cart" description="Lorem ipsum dolor sit amet consectetur.">
                <ShoppingBagOutline54 />
            </IconContainer>
        </StyledWrapper>
    )
}
export default QuickActionsContainer;