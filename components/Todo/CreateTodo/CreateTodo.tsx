import { useForm } from "react-hook-form";
import { INewTodo } from "store/todo/todo.types";

import * as Style from "./CreateTodo.style";

interface Props {
  onSubmit: (data: INewTodo) => void;
}

const CreateTodo: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    errors,
    formState,
    reset,
  } = useForm<INewTodo>({
    mode: "onChange",
  });

  const onSubmit = (data) => {
    props.onSubmit({
      content: data.content,
      isComplete: false,
    });
    reset();
  };

  return (
    <Style.Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Style.FormField>
          <Style.InputField
            type="text"
            name="content"
            placeholder="I need to..."
            ref={register({ required: true, minLength: 2 })}
            error={!!errors.content}
          />
        </Style.FormField>
        <Style.Button type="submit" disabled={!formState.isValid}>
          Add
        </Style.Button>
      </form>
    </Style.Container>
  );
};

export default CreateTodo;
