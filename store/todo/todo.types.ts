export interface ITodoState {
  list: ITodo[];
}

export interface ITodo {
  id: string;
  content: string;
  isComplete: boolean;
}

export interface INewTodo {
  content: string;
  isComplete?: boolean;
}

export type TodoDispatchActions =
  | {
      type: "todo_add";
      payload: ITodo;
    }
  | {
      type: "todo_set_complete";
      payload: {
        id: ITodo["id"];
        isComplete: boolean;
      };
    }
  | {
      type: "todo_remove";
      payload: ITodo["id"];
    };
