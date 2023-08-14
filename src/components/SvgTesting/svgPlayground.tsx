import QuickActionsContainer from "./quickActionsContainer";
import { ThemeProvider, alpha, createTheme, getContrastRatio, styled } from "@mui/system";

interface ISvgPlaygroundProps { }

const StyledWrapper = styled("div")`
    background-color: #fff;
    display: flex;
    gap: 1rem;
    flex-flow: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;

    & svg {
        transition: all ease-in-out 150ms;
    }
`
const primaryBase = '#ff0000';
const primaryColor = alpha(primaryBase, 1);

const SvgPlayground = ({ }: ISvgPlaygroundProps) => {
    const theme = createTheme({
        palette: {
            primary: primaryColor,
            secondary: "#bc8f8f",
            tertiary: "#bcffa7",
            light: alpha(primaryBase, 0.5),
            dark: alpha(primaryBase, 0.9),
            iconColor: {
                light: "#ffffff",
                dark: "#000000",
            },
            contrastText: getContrastRatio(primaryColor, '#fff') > 4.5 ? '#fff' : '#111',
        },
    })

    return (
        <StyledWrapper>
            <h1 style={{
                color: "black"
            }}>Quick Actions Nav</h1>
            <ThemeProvider theme={theme}>
                <QuickActionsContainer />
            </ThemeProvider>
        </StyledWrapper>
    )
}
export default SvgPlayground;