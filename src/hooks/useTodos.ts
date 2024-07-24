import { useEffect, useReducer } from 'react';
import { Todo } from '../08-useReducer/interfaces';
import { todoReducer } from '../08-useReducer/todoReducer';

const init = () => {
    return JSON.parse(localStorage.getItem('todos') as any) || [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo: Todo) => {
        dispatch({
            type: '[TODO] Add Todo',
            payload: todo
        });
    }

    const handleDeleteTodo = (id: string) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: {id}
        });
    }

    const handleToggleTodo = (id: string) => {
        dispatch({
            type: '[TODO] Toggle Todo',
            payload: {id: id}
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