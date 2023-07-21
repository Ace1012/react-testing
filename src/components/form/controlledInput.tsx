import { forwardRef, useImperativeHandle, useRef } from "react";
import { useFormContext } from "../../contexts/form";
import { Store } from "../../utilities/customStore";

export interface ISemiControlledInputForwardRefProps {
    getValue(): string
    getName(): string
}

interface ISemiControlledInputProps {
    label: keyof Store;
    name: string;
}

const labelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "8px 0px"
}

const ControlledInput = forwardRef<ISemiControlledInputForwardRefProps, ISemiControlledInputProps>(({ label, name }, ref) => {
    const [_, setFormState] = useFormContext((store) => store[label]);

    const inputRef = useRef<HTMLInputElement>(null);
    const nameVal = useRef("");

    function handleNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        nameVal.current = inputRef.current!.value || "";
        setFormState({
            [label]: nameVal.current
        })
    }

    function getValue() {
        return inputRef.current!.value;
    }

    function getName() {
        return inputRef.current!.name;
    }

    useImperativeHandle(ref, () => ({
        getValue,
        getName
    }))

    return (
        <label style={labelStyle}>
            {label}
            <input ref={inputRef} autoComplete="" name={name} type="text" onChange={handleNameChange} />
        </label>
    )
})
export default ControlledInput;