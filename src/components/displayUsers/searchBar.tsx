import { mockedUsers } from "../../constants/constants";
import { IUser } from "../users"

interface ISearchBarProps {
    handleFilter(e: React.ChangeEvent<HTMLInputElement>): void
}

const SearchBar = ({ handleFilter }: ISearchBarProps) => {

    return (
        <input type="text" onChange={handleFilter} />
    )
}
export default SearchBar