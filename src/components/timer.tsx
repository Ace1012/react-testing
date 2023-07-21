import { useEffect, useState } from "react";

interface ITimerProps {
    render: (time: number) => JSX.Element
}

const Timer = ({ render }: ITimerProps) => {
    const [time, setTime] = useState(Date.now());
    const RenderedTime = () => render(time);

    useEffect(() => {
        const timerInterval = setInterval(() => setTime(Date.now()), 1000)
        return () => clearInterval(timerInterval)
    }, []);

    return <RenderedTime />
}
export default Timer