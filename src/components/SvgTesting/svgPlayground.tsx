import { styled } from "styled-components";
import QuickActionsContainer from "./quickActionsContainer";

interface ISvgPlaygroundProps { }

const StyledWrapper = styled.div`
    background-color: #fff;
    display: flex;
    gap: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
`

const SvgPlayground = ({ }: ISvgPlaygroundProps) => {
    return (
        <StyledWrapper>
            <h1 style={{
                color: "black"
            }}>SvgPlayground</h1>
            <QuickActionsContainer />
        </StyledWrapper>
    )
}
export default SvgPlayground;