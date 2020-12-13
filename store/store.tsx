import React, { createContext, Dispatch, useReducer } from "react";
import { IStore } from "./store.types";
import todoReducer, { todoInitialState } from "./todo/todo";
import { TodoDispatchActions } from "./todo/todo.types";

const initialState: IStore = {
  todo: todoInitialState,
};

const reducer = (state: IStore, action) => ({
  todo: todoReducer(state.todo, action),
});

export const StoreContext = createContext<{
  state: IStore;
  dispatch: Dispatch<TodoDispatchActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const StoreProvider: React.FC = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};
