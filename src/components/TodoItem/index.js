// Write your code here

import './index.css'

const TodoItem = props => {
  const {initialTodoListDetails, deleteTodo} = props
  const {id, title} = initialTodoListDetails

  const onDeleteTodo = () => {
    deleteTodo(id)
  }
  return (
    <li className="list-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onDeleteTodo}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
