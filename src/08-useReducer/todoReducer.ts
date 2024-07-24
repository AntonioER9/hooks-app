import { Todo } from './interfaces';

type TodoAction =
    | { type: '[TODO] Add Todo', payload: Todo }
    | { type: '[TODO] Toggle Todo', payload: { id: string } }
    | { type: '[TODO] Remove Todo', payload: { id: string } };

export const todoReducer = (initialState: Todo[] = [], action: TodoAction): Todo[] => {

    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]


        case '[TODO] Remove Todo':
            return initialState.filter( todo => todo.id !== action.payload.id );

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {

                if ( todo.id === action.payload.id ) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                } 

                return todo;
            });

        default:
            return initialState;
    }

}