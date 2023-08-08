import styled from "@emotion/styled";
import { Property } from "csstype";
import { useEffect } from "react";

interface IMUIPlaygroundProps { }

const MainDiv = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    background-color: #686868;
    padding: 0.5rem;
    border-radius: 8px;
    & > *{
        padding: 0.5rem;
        &:hover{
            cursor: pointer;
            color: orange;
        }
    }
`

const TestComponent = styled.span<{ $dude?: boolean, $stuff?: Property.Color }> `
    background-color: ${({ $dude }) => $dude ? "green" : "rosybrown"};
    /* color: ${({ $dude }) => $dude ? "black" : "white"}; */
    color: var(--dude);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ease-in-out 150ms;
`;

const TestComponent2 = styled.span<{ $dude?: boolean }>(
    ({ }) => ({
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all ease -in -out 150ms"
    })
);

const DerivedComponent = styled(MainDiv)`
    background-color: green;
`

const MUIPlayground = ({ }: IMUIPlaygroundProps) => {
    useEffect(() => {
        const root = document.querySelector(":root") as HTMLElement;
        root.style.setProperty("--dude", "blue")
    }, []);

    return (
        <DerivedComponent>
            <h1>MUI Playground</h1>
            <TestComponent $dude={false} $stuff="red">
                Inside Test Component 1
            </TestComponent>
            <TestComponent2>
                Inside Test Component 2
            </TestComponent2>
        </DerivedComponent>
    )
}
export default MUIPlayground;