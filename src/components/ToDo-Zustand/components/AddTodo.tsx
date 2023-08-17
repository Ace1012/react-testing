import { Done } from "@mui/icons-material";
import { IconButton, styled } from "@mui/material";
import { useRef } from "react";
import useTodos from "../store/store";

interface IAddTodoProps { }

const AddTodoWrapper = styled("div")`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`

const StyledInput = styled("input")`
    /* background-color: rosybrown; */
    border: none;
    color: white;
    padding: 0.5rem;
    flex: 1;
    height: 100%;
`

const StyledSubmit = styled(IconButton)`
    min-width: 50px;
    height: 100%;
    background-color: white;
    border-radius: 0;

    &:hover{
        background-color: black;
        & path{
            fill: lightgrey;
        }
    }

`

const AddTodo = ({ }: IAddTodoProps) => {
    const { addTodos } = useTodos();
    const inputRef = useRef<HTMLInputElement>({} as HTMLInputElement);

    function handleSubmit() {
        const text = inputRef.current.value;
        if (text.length > 0) {
            addTodos({
                id: `${Date.now()}`,
                text,
                isDone: false
            })
        }

        inputRef.current.value = ""
    }

    return (
        <AddTodoWrapper>
            <StyledInput ref={inputRef} type="text" />
            <StyledSubmit onClick={handleSubmit} children={<Done />} />
        </AddTodoWrapper>
    )
}
export default AddTodo;