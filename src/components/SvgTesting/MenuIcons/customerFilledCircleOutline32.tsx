import { IMenuIcon } from "./interfaces";

interface ICustomerFilledCircleOutlineProps extends IMenuIcon { }

const CustomerFilledCircleOutline32 = ({ fill = "white", size }: ICustomerFilledCircleOutlineProps) => {
    return (
        <svg viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <title>MenuIconCustomerFilledCircleOutline32</title>
            <g id="MenuIconCustomerFilledCircleOutline32" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="iconmonstr-user-20" transform="translate(4.000000, 4.000000)">
                    <path fill={fill} d="M12,0 C5.373,0 0,5.373 0,12 C0,18.627 5.373,24 12,24 C18.627,24 24,18.627 24,12 C24,5.373 18.627,0 12,0 Z M19.753,18.305 C19.492,17.719 18.964,17.314 17.882,17.064 C15.589,16.535 13.454,16.071 14.489,14.119 C17.634,8.177 15.322,5 12,5 C8.612,5 6.356,8.299 9.511,14.119 C10.577,16.083 8.363,16.546 6.118,17.064 C5.034,17.314 4.51,17.722 4.251,18.31 C2.846,16.587 2,14.391 2,12 C2,6.486 6.486,2 12,2 C17.514,2 22,6.486 22,12 C22,14.389 21.155,16.583 19.753,18.305 Z" id="Shape"></path>
                </g>
            </g>
        </svg>
    )
}
export default CustomerFilledCircleOutline32;