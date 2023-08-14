import { styled } from "@mui/system";

interface ISVGWrapperProps {
    children: React.ReactNode | React.ReactNode[];
    size: number;
    fill: string
}

const StyledWrapper = styled("div")<{ $size: number, $fill: string }>(({ theme, $size, $fill }) => ({
    height: $size,
    width: $size,
    // outline: "1px solid green",
    borderRadius: "50%",
    backgroundColor: "maroon",
    "& rect, & path": {
        // fill: $fill,
        // fill: theme.palette.tertiary,
        // fill: theme.palette.iconColor.light,
        // fill: theme.palette.iconColor.dark,
        fill: $fill ?? theme.palette.iconColor.light,
    }
}))

const SVGWrapper = ({ children, size = 100, fill = "#0000ff" }: ISVGWrapperProps) => {
    return (
        <StyledWrapper $size={size} $fill={fill}>
            {children}
        </StyledWrapper>
    )
}
export default SVGWrapper;