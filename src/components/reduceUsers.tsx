import { useReducer } from "react";
import { mockedUsers } from "../constants/constants";
import { IUser } from "./users";

interface IReduceUsersProps { }

enum UsersReducerAction {
    LOG = "LOG",
    DELETE = "DELETE"
}

interface IUserState {
    users: IUser[]
}

interface IUsersAction {
    type: UsersReducerAction;
    payload: number;
}

function reducer(state: IUserState, action: IUsersAction): IUserState {
    const { payload, type } = action;

    switch (type) {
        case UsersReducerAction.DELETE:
            const newState = [...state.users];
            newState.splice(action.payload, 1)
            return {
                users: newState
            };
        case UsersReducerAction.LOG:
            console.log(state.users[payload])
            alert(state.users[payload].name)
            return state;
        default:
            return state;
    }
}

const ReduceUsers = ({ }: IReduceUsersProps) => {
    const [state, dispatch] = useReducer(reducer, { users: mockedUsers });

    return (
        <>
            {state.users.map((user, index) => (
                <div key={`${user.id}${index}`} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "1rem",
                    margin: 8
                }}>
                    <span>{user.name}</span>
                    <div style={{
                        display: "flex",
                        gap: 8
                    }}>
                        <button onClick={() => dispatch({ payload: index, type: UsersReducerAction.LOG })}>LOG</button>
                        <button onClick={() => dispatch({ payload: index, type: UsersReducerAction.DELETE })}>DELETE</button>
                    </div>
                </div>
            ))}
        </>
    )
}
export default ReduceUsers