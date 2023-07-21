import { useDeferredValue, useEffect, useState } from "react";
import { mockedUsers } from "../../constants/constants";
import SearchBar from "./searchBar";
import UsersDisplayer from "./usersDisplayer";

interface ISearchUsersProps { }

const SearchUsers = ({ }: ISearchUsersProps) => {
    const [users, setUsers] = useState(mockedUsers);
    const [input, setInput] = useState("");

    const deferredUsers = useDeferredValue(users)
    const deferredInput = useDeferredValue(input)

    function handleFilter(e: React.ChangeEvent<HTMLInputElement>) {
        const searchParam = e.target.value;
        setUsers(searchParam.length === 0 ? mockedUsers : mockedUsers.filter(({ name }) => name.includes(searchParam)))
        setInput(searchParam)
    }

    useEffect(() => {
        console.log("\n############")
        console.log("Input: ", input)
        console.log("Deferred input: ", deferredInput)
        console.log("############\n")
    });

    return (
        <>
            <input type="text" onChange={handleFilter} />
            <UsersDisplayer users={deferredUsers} input={deferredInput} />
        </>
    )
}
export default SearchUsers