import { Checkbox, IconButton, styled } from "@mui/material";
import { ITodo } from "../interfaces";
import { Delete } from '@mui/icons-material'
import useTodos from "../store/store";
import { useState } from "react";

interface IToDoProps {
    todo: ITodo
}

const TodoStyledWrapper = styled("div")`
    background-color: #cecece;
    color: black;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TodoContent = styled("span")`
    /* border: 1px solid black; */
    padding: 0.4rem 0.3rem;
`

const ToDo = ({ todo }: IToDoProps) => {
    const { id, isDone, text } = todo;

    const { editTodo, deleteTodo } = useTodos();
    // const [isContentEditable, setIsContentEditable] = useState(false);

    function handleDone(e: React.ChangeEvent<HTMLInputElement>) {
        editTodo(id, {
            ...todo,
            isDone: e.target.checked
        })
    }

    function handleDelete() {
        deleteTodo(todo.id)
    }

    function handleFinishedEditing(e: React.KeyboardEvent<HTMLSpanElement>) {
        if (e.key.toLocaleLowerCase() === "enter") {
            e.currentTarget.blur();
            editTodo(id, {
                ...todo,
                text: e.currentTarget.innerText
            })
        }
    }

    return (
        <TodoStyledWrapper>
            <div>
                <Checkbox onChange={handleDone} checked={isDone} />
                <TodoContent
                    tabIndex={0}
                    onKeyDown={handleFinishedEditing}
                    // onFocus={() => setIsContentEditable(prev => !prev)}
                    // contentEditable={isContentEditable}
                    contentEditable
                >
                    {text}
                </TodoContent>
            </div>
            <IconButton onClick={handleDelete} children={<Delete />} />
        </TodoStyledWrapper>
    )
}
export default ToDo;