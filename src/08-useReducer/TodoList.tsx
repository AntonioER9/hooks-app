import { Todo } from './interfaces'
import { TodoItem } from "./TodoItem"


interface props {
  todos: Todo[]
  onDeleteTodo: Function
  onToggleTodo: Function
}
export const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: props) => {
  
  return (
    <ul className="list-group">
        {
            todos.map( todo => (
                <TodoItem 
                  key={ todo.id } 
                  todo={ todo } 
                  onDeleteTodo={ onDeleteTodo } 
                  onToggleTodo={ onToggleTodo }
                />
            ))
        }
    </ul>
  )
}