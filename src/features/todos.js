import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const todoSlice = createSlice({
  name: "ToDo",
  initialState: { value: [] },
  reducers: {
    AddTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        taskName: action.payload,
        isTaskDone: false,
        isEdited: false,
      };
      state.value.push(newTask);
    },
    DeleteTask: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    TaskDone: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload ? { ...task, isTaskDone:!task.isTaskDone } : task
      );
    },

    Edit: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload
          ? { ...task, isEdited: !task.isEdited }
          : task
      );
    },

    Update: (state, action) => {
      const { id, taskEdited} = action.payload;
      state.value = state.value.map((task) =>
        task.id === id
          ? { ...task, taskName:taskEdited, isEdited:false }
          : task
      );
    },
  },
});

export const { AddTask, DeleteTask, TaskDone, Edit, Update } =
  todoSlice.actions;
export default todoSlice.reducer;
