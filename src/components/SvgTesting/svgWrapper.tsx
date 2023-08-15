import { styled } from "@mui/material";
import { useMemo } from "react";
import { Property } from "csstype";

type SVGWrapperSizes = "xl" | "lg" | "md" | "sm" | "xs" | number;

interface ISVGWrapperProps {
    children: React.ReactNode | React.ReactNode[];
    size: SVGWrapperSizes;
    color: Property.Color
}

interface StyledWrapperProps {
    $size: number,
    $color?: string
}

function isNumber(val: any): val is number {
    return typeof val === "number"
}

const sizesMap: Record<SVGWrapperSizes, number> = {
    xl: 126,
    lg: 72,
    md: 54,
    sm: 24,
    xs: 18,
} as const;

const StyledWrapper = styled("div")<StyledWrapperProps>(
    ({ theme, $size, $color }) => ({
        // height: $size,
        // width: $size,
        // outline: "3px solid green",
        // backgroundColor: "teal",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "fit-content",
        backgroundColor: "maroon",
        borderRadius: "50%",
        overflow: "hidden",
        "& svg": {
            // outline: "1px solid green",
            height: $size,
            width: $size,
        },
        "& rect, & path": {
            fill: $color ?? theme.palette.success.main,
            // fill: theme.palette.primary.main,
            // fill: $color,
        }
    }))

const SVGWrapper = ({ children, size, color: fill = "blue" }: ISVGWrapperProps) => {
    const wrapperSize = useMemo(() => isNumber(size) ? size : sizesMap[size], [size])

    return (
        <StyledWrapper $size={wrapperSize} $color={fill}>
            {children}
        </StyledWrapper>
    )
}
export default SVGWrapper;