import { useMemo, useState } from "react";
import useFetch from "../../hooks/useFetch";

import ActivityIndicator2 from "../activityIndicator2";
import Table from "./Table";

import { IUser } from "../users";

interface IUserTableProps { }

const URL = "https://jsonplaceholder.typicode.com/users";

const UserTable = ({ }: IUserTableProps) => {
    const { data: users } = useFetch<IUser[]>(URL);
    const [deletedUsers, setDeletedUsers] = useState<number[]>([]);

    const filteredUsers = useMemo(() => {
        return users.filter(({ id }) => !deletedUsers.some((filterID) => filterID === id))
    }, [deletedUsers, users])

    function deleteUser(id: number) {
        setDeletedUsers(prev => {
            return prev.some(prevID => prevID === id)
                ? prev
                : [...prev, id]
        })
    }

    function reset() {
        setDeletedUsers([])
    }

    return (
        <div>
            {users.length > 0
                ? <Table users={filteredUsers} deleteUser={deleteUser} reset={reset} />
                : <ActivityIndicator2 />}
        </div>
    )
}
export default UserTable;