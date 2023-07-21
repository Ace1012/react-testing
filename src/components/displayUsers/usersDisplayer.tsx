import { useMemo } from "react"
import { IUser } from "../users"

interface IUsersDisplayerProps {
    users: IUser[];
    input: string
}

const UsersDisplayer = ({ users, input }: IUsersDisplayerProps) => {
    const list = useMemo(() => {
        return Array.from({ length: 20000 }).map((_, i) => <div key={i}>{input}</div>)
    }, [input])

    return (
        <>
            {users.map(user => (
                <div key={user.id}>{user.id}. {user.name}</div>
            ))}
            {/* {list} */}
        </>
    )
}
export default UsersDisplayer