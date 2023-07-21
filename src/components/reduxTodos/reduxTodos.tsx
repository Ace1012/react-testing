import { useDispatch, useSelector } from "react-redux";
import { selectTodos, setTodos } from "../../store/store";
import Todo from "./todo";
import { ITodo } from "../../store/slices/todoSlice";
import { useEffect } from "react";

interface IReduxTodosProps { }

const LOREM = "Lorem ipsum dolor sit amet consectetur adipisicing elit"

function generateTodos(length: number = 10) {
    return Array.from({ length })
        .map<ITodo>((_, i) => ({
            id: Date.now() + i,
            description: `#${i + 1} ${LOREM}`,
            done: false
        }))
}

const ReduxTodos = ({ }: IReduxTodosProps) => {
    const dispatch = useDispatch();

    const todos = useSelector(selectTodos);

    useEffect(() => {
        dispatch(setTodos(generateTodos()))
    }, []);

    return (
        <div>
            {todos.map((todo) => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </div>
    )
}
export default ReduxTodos;