import { styled } from "@mui/material";
import SVGWrapper from "./svgWrapper";
import { menuIconsMapper } from "./MenuIconsMap/menuIconsMap";
import { Suspense } from "react";
import { Property } from "csstype";

export interface IQuickActionProps {
    title: string;
    description: string;
    iconName: Menu.Icon.MenuIconName;
    color?: Property.Color
}

const StyledWrapper = styled("div")`
    cursor: pointer;
    background-color: #eaeaea;
    box-shadow: 0 0 5px black;
    padding: 1rem;
    gap: 0.5rem;
    display: flex;
    border-radius: 4px;
    max-width: 400px;
    transition: all ease-in-out 150ms;

    &:hover{
        translate: 0 -1px;
        box-shadow: 0 0 10px black;
    }
`

const SuspenseFallback = styled("div")`
    background-color: orange;
    width: 50%;
    aspect-ratio: 1;
    border-radius: 50%;
`;

const QuickActionIcon = styled("div")`
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuickActionDescription = styled("div")`
    /* background-color: yellow; */
    display: flex;
    flex-flow: column;
    justify-content: center;
    color: black;

    & *{
        /* background-color: orange; */
        margin: 0;
    }
    
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

const QuickAction = ({ title, description, iconName, color }: IQuickActionProps) => {
    const SVGChild = menuIconsMapper[iconName];
    const SuspenseTrigger = () => {
        throw Promise.reject();
    }

    return (
        <StyledWrapper>
            <QuickActionIcon>
                <SVGWrapper size={"md"} color={color ?? "white"}>
                    <Suspense fallback={<SuspenseFallback />}>
                        <SVGChild />
                        {/* <SuspenseTrigger /> */}
                    </Suspense>
                </SVGWrapper>
            </QuickActionIcon>
            <QuickActionDescription>
                <h3>{title}</h3>
                {/* {showDescription && <p>{description}</p>} */}
                <p>{description}</p>
            </QuickActionDescription>
        </StyledWrapper>
    )
}
export default QuickAction;