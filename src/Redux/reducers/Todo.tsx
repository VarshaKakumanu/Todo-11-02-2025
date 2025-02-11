import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Todos {
  id: number;
  text: string;
}

// Load initial state from localStorage
const getInitialTodos = (): Todos[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
};

const initialState: Todos[] = getInitialTodos();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodolist: (state, action: any) => {
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodolist: (state, action: any) => {
      const updatedTodo = state.filter((todo) => todo.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(updatedTodo));
      return updatedTodo;
    },
    editTodolist: (state, action: PayloadAction<{ id: number; text: string; }>) => {
      const todo = state.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      localStorage.setItem("todos", JSON.stringify(state));
    },
  },
});

export const {addTodolist,deleteTodolist,editTodolist } = todoSlice.actions;
export default todoSlice.reducer;
