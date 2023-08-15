import { IMenuIcon } from "./interfaces";

interface ISearchOutline54Props extends IMenuIcon {
    fill?: string;
}

const SearchOutline54 = ({ fill = "white", size }: ISearchOutline54Props) => {
    return (
        <svg viewBox="0 0 54 54" version="1.1" xmlns="http://www.w3.org/2000/svg" >
            <title>MenuIconSearchOutline54</title>
            <defs>
                <path d="M35.0745101,31.5815877 C36.6429926,29.4244202 37.570373,26.7713059 37.570373,23.9058348 C37.570373,16.6951162 31.7036839,10.8284271 24.4916213,10.8284271 C17.2809026,10.8284271 11.4142136,16.6951162 11.4142136,23.9058348 C11.4142136,31.1178975 17.2809026,36.9832425 24.4916213,36.9832425 C27.2253774,36.9832425 29.7642493,36.140536 31.8663115,34.7010803 L38.8361544,41.6709232 C39.617203,42.4519718 40.8835329,42.4519718 41.6645815,41.6709232 L42,41.3355047 C42.7810486,40.5544561 42.7810486,39.2881262 42,38.5070776 L35.0745101,31.5815877 L35.0745101,31.5815877 Z M15.250074,23.9058348 C15.250074,18.8092747 19.3964052,14.6629435 24.4929653,14.6629435 C29.5895254,14.6629435 33.7358566,18.8092747 33.7358566,23.9058348 C33.7358566,29.002395 29.5895254,33.1487262 24.4929653,33.1487262 C19.3950611,33.1487262 15.250074,29.002395 15.250074,23.9058348 Z" id="path-2"></path>
            </defs>
            <g id="MenuIconSearchOutline54" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <mask id="mask-2" fill="white">
                    <use href="#path-2"></use>
                </mask>
                <use id="Shape" fill={fill} fillRule="nonzero" href="#path-2"></use>
            </g>
        </svg>
    )
}
export default SearchOutline54;