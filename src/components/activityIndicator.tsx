import { Property } from "csstype"

interface IActivityIndicatorProps {
    color?: Property.Color
}

const ActivityIndicator = ({
    color = "white"
}: IActivityIndicatorProps) => {
    return (
        <svg role="progressbar" id="spinner" viewBox="-5 0 110 100">
            {/* // <svg role="progressbar" id="spinner" viewBox="0 0 50 50"> */}
            <circle id="spinner-path" stroke={color} r={20} cx={25} cy={25} />
        </svg>
    )
}
export default ActivityIndicator