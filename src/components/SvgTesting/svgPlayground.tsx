import QuickActionsContainer from "./quickActionsContainer";
import { CssBaseline, ThemeProvider, createTheme, styled } from "@mui/material";

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
    color: #bc8f8f;

    & svg {
        transition: all ease-in-out 150ms;
    }
`

const SvgPlayground = ({ }: ISvgPlaygroundProps) => {
    const theme = createTheme({
        components: {
            MuiCssBaseline: {
                styleOverrides: {
                    margin: 0,
                    padding: 0,
                    boxSizing: "border-box"
                }
            }
        },
        palette: {
            primary: {
                main: "#bc8f8f"
            }
        },
        breakpoints: {
            values: {
                xl: 72,
                lg: 54,
                md: 36,
                sm: 18,
                xs: 9,
            }
        },
    })

    // const theme = createTheme({
    //     palette: {
    //         primary: primaryColor,
    //         secondary: "#bc8f8f",
    //         tertiary: "#bcffa7",
    //         light: alpha(primaryBase, 0.5),
    //         dark: alpha(primaryBase, 0.9),
    //         iconColor: {
    //             light: "#ffffff",
    //             dark: "#000000",
    //         },
    //         contrastText: getContrastRatio(primaryColor, '#fff') > 4.5 ? '#fff' : '#111',
    //     },
    // })

    return (
        <StyledWrapper>
            <h1 style={{
                color: "black"
            }}>Quick Actions Nav</h1>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <QuickActionsContainer />
            </ThemeProvider>
        </StyledWrapper>
    )
}
export default SvgPlayground;