import { styled } from "@mui/system";
import { useMyTheme } from "./myThemeContext";

interface IQuickActionProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

const StyledWrapper = styled("div")`
    cursor: pointer;
    background-color: #eaeaea;
    box-shadow: 0 0 5px black;
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    border-radius: 4px;
    transition: all ease-in-out 150ms;

    &:hover{
        translate: 0 -1px;
        box-shadow: 0 0 10px black;
    }
`

const SVGWrapper = styled("div") <{ $size: number }>`
    background-color: maroon;
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${({ $size }) => ($size)};
    aspect-ratio: 1;
    border-radius: 50%;

    & #color-ernstingsDarkYellow,
    & #Shape,
    & #Group-2{
        fill: ${({ theme }) => theme.palette.testing.main};
    }
`

const QuickActionIcon = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuickActionDescription = styled("div")`
    background-color: transparent;
    display: flex;
    flex-flow: column;
    justify-content: center;
    color: black;
    
    ${({ theme }) => theme.breakpoints.down("sm")}{
        & > p{
        font-size: x-small;
        line-height: 0.5rem;
    }
    }
    
    ${({ theme }) => theme.breakpoints.down("md")}{
        & > p{
        font-size: smaller;
        line-height: 0.75rem;
    }
    }
    
    ${({ theme }) => theme.breakpoints.down("lg")}{
        & > p{
        font-size: small;
        line-height: 1rem;
    }
    }

`

const QuickAction = ({ children, title, description }: IQuickActionProps) => {
    const { myThemeSize: size } = useMyTheme();
    return (
        <StyledWrapper>
            <QuickActionIcon>
                <SVGWrapper $size={size}>
                    {children}
                </SVGWrapper>
            </QuickActionIcon>
            <QuickActionDescription>
                <h3>{title}</h3>
                <p>{description}</p>
            </QuickActionDescription>
        </StyledWrapper>
    )
}
export default QuickAction;