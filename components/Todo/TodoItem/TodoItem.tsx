import { ITodo } from "store/todo/todo.types";

import * as Style from "./TodoItem.style";

interface Props extends ITodo {
  onChangeCompleteStatus: (id: ITodo["id"], isComplete: boolean) => void;
  onDelete: (id: ITodo["id"]) => void;
}

const TodoItem: React.FC<Props> = (props) => {
  const toggleComplete = () =>
    props.onChangeCompleteStatus(props.id, !props.isComplete);

  const deleteTodo = () => props.onDelete(props.id);

  return (
    <Style.Container>
      <Style.Content isComplete={props.isComplete}>
        <Style.CompleteButton
          onClick={toggleComplete}
          isTicked={props.isComplete}
        />
        <Style.Text strikeThrough={props.isComplete}>
          {props.content}
        </Style.Text>
      </Style.Content>

      <Style.ActionBar>
        <Style.Action type="destructive" onClick={deleteTodo}>
          Delete
        </Style.Action>
      </Style.ActionBar>
    </Style.Container>
  );
};

export default TodoItem;
