import { styled } from "@mui/system";
import { useMyTheme } from "./myThemeContext";
import SVGWrapper from "./svgWrapper";
import { menuIconsMapper } from "./@types/MenuIconsMap/menuIconsMap";
import { Suspense } from "react";

interface IQuickActionProps {
    children?: React.ReactNode;
    title: string;
    description: string;
    iconName: Menu.Icon.MenuIconName
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

//TODO: - Create a map -> key: Name of icon | value: JSX.Element to be rendered.
//      - Incorporate lazy-loading.

const QuickAction = ({ children, title, description, iconName }: IQuickActionProps) => {
    const { myThemeSize: size, showDescription } = useMyTheme();

    const SVGChild = menuIconsMapper[iconName];
    const SuspenseTrigger = () => {
        throw new Promise(() => { })
    }

    return (
        <StyledWrapper>
            <QuickActionIcon>
                <SVGWrapper size={size} fill="white">
                    {/* {children} */}
                    <Suspense fallback={<span>Loading...</span>}>
                        <SVGChild />
                        {/* <SuspenseTrigger /> */}
                    </Suspense>
                    {/* {SVGChild} */}
                </SVGWrapper>
            </QuickActionIcon>
            <QuickActionDescription>
                <h3>{title}</h3>
                {showDescription && <p>{description}</p>}
            </QuickActionDescription>
        </StyledWrapper>
    )
}
export default QuickAction;