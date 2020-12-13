import { ITodoState, TodoDispatchActions } from "./todo.types";

export const todoInitialState: ITodoState = {
  list: [
    {
      id: "1",
      content: "First thing",
      isComplete: false,
    },
  ],
};

function todoReducer(
  state = todoInitialState,
  action: TodoDispatchActions
): ITodoState {
  switch (action.type) {
    case "todo_add": {
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    }
    case "todo_remove": {
      return {
        ...state,
        list: state.list.filter((t) => t.id !== action.payload),
      };
    }
    case "todo_set_complete": {
      return {
        ...state,
        list: state.list.map((todo) =>
          todo.id === action.payload.id
            ? {
                ...todo,
                isComplete: action.payload.isComplete,
              }
            : todo
        ),
      };
    }
  }
}

export default todoReducer;
