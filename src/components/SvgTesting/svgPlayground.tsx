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
`

const testingBase = '#22ff05';
const testingMain = alpha(testingBase, 0.7);

const SvgPlayground = ({ }: ISvgPlaygroundProps) => {
    const theme = createTheme({
        palette: {
            testing: {
                main: testingMain,
                light: alpha(testingBase, 0.5),
                dark: alpha(testingBase, 0.9),
                contrastText: getContrastRatio(testingMain, '#fff') > 4.5 ? '#fff' : '#111',
            }
        }
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