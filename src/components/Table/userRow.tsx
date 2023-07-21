import { useEffect, useRef, useState } from "react";
import { IUser } from "../users";

interface IUserRowProps {
    user: IUser;
    delay: number;
    deleteUser(id: number): void
}

const UserRow = ({ user, delay, deleteUser }: IUserRowProps) => {
    const [isVisible, setIsVisible] = useState(false);

    function handleDelete() {
        deleteUser(user.id);
    }

    useEffect(() => {
        const animateInTimeout = setTimeout(() => {
            setIsVisible(true)
        }, (300 + delay))
        return () => {
            clearTimeout(animateInTimeout);
        }
    }, []);

    return (
        <tr
            key={user.id}
            style={{
                // translate: isVisible ? "0" : `100%`,
                scale: isVisible ? 1 : 0.2,
                opacity: isVisible ? 1 : 0,
                transition: "translate ease-in-out 300ms, opacity ease-in-out 400ms"
            }}
        >
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td style={{
                // width: "10%",
                // backgroundColor: "red"
            }}>
                <button onClick={handleDelete}>Delete</button>
            </td>
        </tr>
    )
}
export default UserRow;