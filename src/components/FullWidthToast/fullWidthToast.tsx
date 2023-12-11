import { styled } from "@mui/material";
import { useLayoutEffect, useState } from "react";

interface IFullWidthToastProps { }

const StyledWrapper = styled("div")<{ $play: boolean }>(({ theme, $play }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    top: "5vh",
    left: 0,
    right: 0,

    height: 150,

    transition: "all ease-in-out 200ms"
}))

const StyledLayer = styled("div")<{ $play: boolean }>(({ theme, $play }) => ({
    boxSizing: "border-box",

    position: 'absolute',

    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    overflow: 'hidden',
    opacity: $play ? 1 : 0,
    userSelect: "none",
    transition: "inherit",
}))

const StyledUpperLayer = styled(StyledLayer)(({ theme, $play }) => ({
    top: 0,

    backgroundColor: "#453c39",
    color: "#cf6a66",

    width: $play ? "100vw" : 0,
    height: "65%",

    fontSize: "2.5rem"
}));

const StyledLowerLayer = styled(StyledLayer)(({ theme, $play }) => ({
    top: "60%",

    backgroundColor: "#cf6a66",
    color: "white",

    width: "100%",
    height: $play ? "40%" : 0,

    fontSize: "1.25rem"
}));

const FullWidthToast = ({ }: IFullWidthToastProps) => {
    const [playTransition, setPlayTransition] = useState(false);

    useLayoutEffect(() => {
        const interval = setInterval(() => {
            setPlayTransition(prev => !prev);
        }, 1000)


        return () => {
            clearInterval(interval)
        }
    }, []);

    return (
        <StyledWrapper
            $play={playTransition}
        >
            <StyledUpperLayer $play={playTransition}>WEAPONS FREE</StyledUpperLayer>
            <StyledLowerLayer $play={playTransition}>OPEN COMBAT MISSON</StyledLowerLayer>
        </StyledWrapper>
    )
}
export default FullWidthToast; 