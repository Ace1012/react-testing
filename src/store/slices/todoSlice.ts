import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ITodo {
  id: number;
  description: string;
  done: boolean;
}

interface ITodoSlice {
  todos: ITodo[];
}

const initialState: ITodoSlice = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<ITodo[]>) => {
      state.todos = action.payload;
    },
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    toggleDone: (state, action: PayloadAction<ITodo>) => {
      state.todos.forEach((todo) => {
        if (todo.id === action.payload.id) {
          todo.done = !todo.done;
        }
        return todo;
      });
    },
  },
});

export default todoSlice;
