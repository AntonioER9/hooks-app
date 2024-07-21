import { useEffect, useReducer } from 'react';
import { Todo } from '../08-useReducer/interfaces';
import { todoReducer } from '../08-useReducer/todoReducer';

type TodoAction =
    | { type: '[TODO] Add Todo', payload: Todo }
    | { type: '[TODO] Toggle Todo', id: string }
    | { type: '[TODO] Remove Todo', id: string };

const init = () => {
    return JSON.parse(localStorage.getItem('todos') as any) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo: Todo) => {
        const action: TodoAction = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id: any) => {

        dispatch({
            type: '[TODO] Remove Todo',
            id: id
        });
    }

    const handleToggleTodo = (id: any) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            id: id
        });
    }

    return {
        todos,

        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.completed).length,

        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}