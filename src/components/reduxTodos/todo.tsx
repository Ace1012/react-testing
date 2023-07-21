import { useDispatch } from "react-redux";
import { ITodo } from "../../store/slices/todoSlice";
import { toggleDone } from "../../store/store";

interface ITodoProps {
    todo: ITodo
}

const Todo = ({ todo }: ITodoProps) => {
    const dispatch = useDispatch();

    function handleToggleDone() {
        dispatch(toggleDone(todo))
    }

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            textDecorationLine: todo.done ? "line-through" : "",
            opacity: todo.done ? 0.3 : 1
        }}>
            <span>{todo.description}</span>
            <div>
                <button onClick={handleToggleDone}>{todo.done ? "UNDO" : "DONE"}</button>
            </div>
        </div>
    )
}
export default Todo;