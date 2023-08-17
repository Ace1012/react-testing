import useTodos from "./store/store";
import ToDo from "./components/Todo";
import { styled } from "@mui/material";
import AddTodo from "./components/AddTodo";

interface IToDoZustandProps { }

const ContentWrapper = styled("div")`
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
`

const TodosWrapper = styled("div")`
    width: 80%;
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    gap: 0.5rem;
`

const ToDoZustandPlayground = ({ }: IToDoZustandProps) => {
    const { todos } = useTodos();
    return (
        <>
            <h1>ToDoZustand</h1>
            <ContentWrapper>
                <TodosWrapper>
                    {todos.length > 0
                        ? todos.map((todo) => (
                            <ToDo key={`${Date.now()}-${todo.id}`} todo={todo} />
                        ))
                        : <h2>Nothing to see here...</h2>
                    }
                </TodosWrapper>
                <AddTodo />
            </ContentWrapper>
        </>
    )
}
export default ToDoZustandPlayground;