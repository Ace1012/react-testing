import { IUser } from "../users";
import UserRow from "./userRow";

interface ITableProps {
    users: IUser[];
    deleteUser(id: number): void
    reset(): void
}

const Table = ({ users, deleteUser, reset }: ITableProps) => {
    return (
        <table style={{
            backgroundColor: "lightgray",
            color:"black",
            padding: 8,
            borderRadius: 4,
        }}
        >
            <thead >
                <tr>
                    <td style={{ textAlign: "center" }} colSpan={3}>
                        <h2>Users Table</h2>
                    </td>
                    <td>
                        <button onClick={() => reset()}>Reset</button>
                    </td>
                </tr>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>USERNAME</th>
                    <th>CONTROLS</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => (
                        <UserRow
                            key={user.id}
                            user={user}
                            deleteUser={deleteUser}
                            delay={100 * index}
                        />
                    ))
                }
            </tbody>

        </table >
    )
}
export default Table;