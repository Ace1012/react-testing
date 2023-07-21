import { useEffect, useRef, useState } from "react";
import ControlledInput, { ISemiControlledInputForwardRefProps } from "./controlledInput";
import { useFormContext } from "../../contexts/form";

interface ICustomeFormProps { }

const labelStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start"
}

const CustomForm = ({ }: ICustomeFormProps) => {
    const myFormRef = useRef<HTMLFormElement>(null);
    const firstNameRef = useRef<ISemiControlledInputForwardRefProps>(null);
    const lastNameRef = useRef<ISemiControlledInputForwardRefProps>(null);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
    }

    return (
        <form
            ref={myFormRef}
            name="myForm"
            style={{
                display: "flex",
                flexDirection: "column",
                padding: "1rem 0.75rem",
                margin: "1rem 0",
                backgroundColor: "grey",
                borderRadius: 8
            }}
            onSubmit={handleSubmit}
        >
            <ControlledInput ref={firstNameRef} label="firstName" name="firstName" />
            <ControlledInput ref={lastNameRef} label="lastName" name="lastName" />

            {/* <button type="submit">Submit</button> */}
        </form>
    )
}
export default CustomForm