import { Property } from "csstype"
import { memo, useCallback, useMemo, useState } from "react"

interface IMemoizeTestProps { }

interface ISwatchProps {
    params: {
        backgroundColor: Property.BackgroundColor;
        onclick(): void
    }
}

const Swatch = ({ params: { backgroundColor, onclick } }: ISwatchProps) => {
    console.log("Rendered swatch")
    return (
        <div
            style={{
                height: 50,
                width: 50,
                backgroundColor
            }}
            onClick={onclick}
        />
    )
}

const MemoSwatch = memo(Swatch)

const MemoizeTest = ({ }: IMemoizeTestProps) => {
    const [count, setCount] = useState(0);
    const [backgroundColor, setBackgroundColor] = useState<Property.BackgroundColor>("red");

    const onclick = useCallback(() => function () {
        return {}
    }, [])

    const params: ISwatchProps["params"] = useMemo(() => ({
        backgroundColor,
        onclick
    }), [backgroundColor])

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 16
        }}>
            <MemoSwatch params={params} />
            <button onClick={() => setBackgroundColor(prev => prev === "red" ? "blue" : "red")} >Change Color</button>
            <span>{count}</span>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 16
            }}>
                <button onClick={() => setCount(prev => prev - 1)} >-</button>
                <button onClick={() => setCount(prev => prev + 1)} >+</button>
            </div>
        </div>
    )
}
export default MemoizeTest;