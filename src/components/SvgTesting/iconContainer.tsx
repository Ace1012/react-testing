import { styled } from "styled-components";

interface IIconContainerProps {
    children: React.ReactNode;
    title: string;
    description: string;
}

const StyledWrapper = styled.div`
    --height: 100px;
    cursor: pointer;
    background-color: #eaeaea;
    box-shadow: 0 0 5px black;
    height: var(--height);
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

const SVGWrapper = styled.div`
    background-color: maroon;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    aspect-ratio: 1;
    border-radius: 50%;
`

const QuickActionIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const QuickActionDescription = styled.div`
    background-color: transparent;
    display: flex;
    flex-flow: column;
    justify-content: center;

    & > *{
        color: black;
    }

    & > p{
        font-size: small;
        line-height: 1rem;
    }

`

const IconContainer = ({ children, title, description }: IIconContainerProps) => {
    return (
        <StyledWrapper>
            <QuickActionIcon>
                <SVGWrapper>
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
export default IconContainer;