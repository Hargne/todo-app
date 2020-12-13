import { useContext } from "react";
import { INewTodo, ITodo } from "store/todo/todo.types";
import TodoItem from "./TodoItem/TodoItem";
import { StoreContext } from "store/store";
import CreateTodo from "./CreateTodo/CreateTodo";

import * as Style from "./TodoList.style";

interface Props {
  todos?: ITodo[];
}

const TodoList: React.FC<Props> = (props) => {
  const { state, dispatch } = useContext(StoreContext);

  const createTodo = (data: INewTodo) => {
    const generatedId = "_" + Math.random().toString(36).substr(2, 9);
    dispatch({
      type: "todo_add",
      payload: {
        id: generatedId,
        content: data.content,
        isComplete: data.isComplete || false,
      },
    });
  };

  const setComplete = (todoId: ITodo["id"], isComplete: boolean) => {
    dispatch({
      type: "todo_set_complete",
      payload: {
        id: todoId,
        isComplete,
      },
    });
  };

  const deleteTodo = (todoId: ITodo["id"]) => {
    dispatch({
      type: "todo_remove",
      payload: todoId,
    });
  };

  return (
    <Style.Container>
      <h3>Todo List</h3>
      <Style.TodoListContainer>
        {state.todo.list.map((todo, i) => (
          <div key={`todo-${todo.id || i}`} style={{ marginBottom: "1rem" }}>
            <TodoItem
              {...todo}
              onChangeCompleteStatus={setComplete}
              onDelete={deleteTodo}
            />
          </div>
        ))}
      </Style.TodoListContainer>
      <Style.CreateTodoContainer>
        <h5>Create</h5>

        <CreateTodo onSubmit={createTodo} />
      </Style.CreateTodoContainer>
    </Style.Container>
  );
};

export default TodoList;
