import { create } from "zustand";
import { ITodo } from "../interfaces";

interface Store {
  todos: ITodo[];
  addTodos: (todo: ITodo) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, todo: Partial<Omit<ITodo, "id">>) => void;
}

const useTodos = create<Store>((set) => ({
  todos: [
    {
      id: `${Date.now()}`,
      text: "Laundry",
      isDone: false,
    },
  ],
  addTodos(todo) {
    set((state) => ({
      ...state,
      todos: [...state.todos, todo],
    }));
  },
  deleteTodo(id) {
    set((state) => ({
      ...state,
      todos: [...state.todos.filter((todo) => todo.id !== id)],
    }));
  },
  editTodo(id, editedTodo) {
    set((state) => {
      const newTodos = state.todos.map((todo) => {
        return todo.id === id
          ? {
              ...todo,
              ...editedTodo,
            }
          : todo;
      });
      
      return {
        ...state,
        todos: newTodos,
      };
    });
  },
}));

export default useTodos;
