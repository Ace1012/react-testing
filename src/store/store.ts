import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./slices/todoSlice";

const store = configureStore({
  reducer: {
    todos: todoSlice.reducer,
  },
});

type RootType = ReturnType<typeof store.getState>;

/**
 * Actions
 */
export const { addTodo, toggleDone, setTodos } = todoSlice.actions;

/**
 * Selectors
 */
export const selectTodos = (state: RootType) => state.todos.todos;

export default store;
