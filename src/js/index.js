import {createTodo} from './todo.js'
import {renderTodo} from './ui.js'

function addTodo(title, dueDate) {
	const todo = createTodo(title, dueDate)
	renderTodo(todo)
}

addTodo('Ayo', 'Tomorrow')
addTodo('Hey', 'Today')
addTodo('Yooo', 'NOW!')