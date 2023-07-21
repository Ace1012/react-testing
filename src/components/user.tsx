import { IUser } from "./users"

interface IUserProps {
    user: IUser
}

const User = ({ user }: IUserProps) => {
    return (
        <div role="contentinfo" className="user">
            <span>Name: {user.name}</span>
        </div>
    )
}
export default User