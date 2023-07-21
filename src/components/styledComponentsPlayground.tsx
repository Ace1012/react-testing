import StyledButton from "./StyledComponents/Button/Button";

interface IStyledComponentsPlaygroundProps { }

const StyledComponentsPlayground = ({ }: IStyledComponentsPlaygroundProps) => {
    return (
        <div>
            <h2>StyledComponentsPlayground</h2>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 16
            }}>
                <StyledButton $darkMode >Hey 1</StyledButton>
                <StyledButton >Hey 2</StyledButton>
            </div>
        </div>
    )
}
export default StyledComponentsPlayground;