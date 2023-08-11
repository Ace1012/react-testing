import { IMenuIcon } from "./interfaces";

interface ICustomerFilledCircleOutline54Props extends IMenuIcon { }

const CustomerFilledCircleOutline54 = ({ fill = "white", size = 54 }: ICustomerFilledCircleOutline54Props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size ?? 54}
            height={size ?? 54}
            // viewBox="7 7 40 40"
            viewBox={`0 0 ${size} ${size}`}
            version="1.1"
        >
            <path
                fill={fill}
                d="M 27 6.75 C 15.816406 6.75 6.75 15.816406 6.75 27 C 6.75 38.183594 15.816406 47.25 27 47.25 C 38.183594 47.25 47.25 38.183594 47.25 27 C 47.25 15.816406 38.183594 6.75 27 6.75 Z M 40.082031 37.640625 C 39.644531 36.652344 38.75 35.96875 36.925781 35.546875 C 33.054688 34.652344 29.453125 33.871094 31.199219 30.574219 C 36.507812 20.546875 32.605469 15.1875 27 15.1875 C 21.28125 15.1875 17.476562 20.753906 22.800781 30.574219 C 24.597656 33.890625 20.863281 34.671875 17.074219 35.546875 C 15.246094 35.96875 14.359375 36.65625 13.921875 37.648438 C 11.550781 34.742188 10.125 31.035156 10.125 27 C 10.125 17.695312 17.695312 10.125 27 10.125 C 36.304688 10.125 43.875 17.695312 43.875 27 C 43.875 31.03125 42.449219 34.734375 40.082031 37.640625 Z M 40.082031 37.640625 " />
        </svg>
    )
}
export default CustomerFilledCircleOutline54;