import './styles/main.css'
import {createTodo} from './js/todo.js'
import {renderTodo} from './js/ui.js'
import { parseISO } from 'date-fns'

const addTask_button = document.getElementById("sideBar_addTask")
const create_container = document.getElementById("create_container")
const create_title = document.getElementById("create_title")
const create_desc = document.getElementById("create_desc")
const create_dueDate = document.getElementById("create_dueDate")
const create_submitButton = document.getElementById("create_submitButton")
const create_close = document.getElementById("create_close")


// create todo
function addTodo(title, desc, dueDate) {
	const todo = createTodo(title, desc, dueDate)
	renderTodo(todo)
}

// show create screen
create_button.addEventListener('click', () => {
	create_container.style.display = 'flex';
})

// create the todo (UTC)
create_submitButton.addEventListener('click', () => {
	addTodo(create_title.value, create_desc.value, parseISO(create_dueDate.value))
})


// create the todo
create_close.addEventListener('click', () => {
	create_container.style.display = 'none';
})