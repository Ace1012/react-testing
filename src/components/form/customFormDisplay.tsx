import { useFormContext } from "../../contexts/form";
import { Store } from "../../utilities/customStore";

interface ICustomFormDisplayProps {
    label: keyof Store;
}

const CustomFormDisplay = ({ label }: ICustomFormDisplayProps) => {
    const [name, _] = useFormContext((store) => store[label]);
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 8
        }}>
            <span>{label}: {name}</span>
        </div>
    )
}
export default CustomFormDisplay;