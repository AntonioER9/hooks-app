import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

interface props {
  onNewTodo: Function
}

export const TodoAdd = ({ onNewTodo }: props) => {

  const { description, onInputChange, onResetForm } = useForm({
    description: ''
  });

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      completed: false,
      description: description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-1"
      >
        Agregar
      </button>
    </form>
  )
}