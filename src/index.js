import {format} from 'date-fns'

import './styles/main.css'
import {createTodo} from './js/todo.js'
import {renderTodo} from './js/ui.js'
import {parseISO} from 'date-fns'
import {renderTodo_container} from './js/ui.js'

const sideBar_addTask = document.getElementById("sideBar_addTask")
const sideBar_search_input = document.getElementById("sideBar_search_input")
const sideBar_today = document.getElementById("sideBar_today")
const sideBar_week = document.getElementById("sideBar_week")
const sideBar_upcoming = document.getElementById("sideBar_upcoming")
const sideBar_starred = document.getElementById("sideBar_starred")

const today_container = document.getElementById("today_container")
const week_container = document.getElementById("week_container")
const upcoming_container = document.getElementById("upcoming_container")
const starred_container = document.getElementById("starred_container")

const create_container = document.getElementById("create_container")
const create_title = document.getElementById("create_title")
const create_description = document.getElementById("create_description")
const create_dueDate = document.getElementById("create_dueDate")
const create_addTask_button = document.getElementById("create_addTask_button")
const create_project = document.getElementById("create_project")
const create_closeContainer = document.getElementById("create_closeContainer")

// make today visible at start
today_container.style.display = 'flex'

// remove suggestions for input fields
document.querySelectorAll('input').forEach(input => {
    input.autocomplete = 'off'
})

// create todo
function addTodo(title, desc, dueDate) {
	const todo = createTodo(title, desc, dueDate)
	renderTodo(todo)
}

// show create screen
sideBar_addTask.addEventListener('click', () => {
	create_container.style.display = 'flex';
})

// create the todo (UTC)
create_addTask_button.addEventListener('click', () => {
	addTodo(create_title.value, create_description.value, format(parseISO(create_dueDate.value), 'MMMM d, yyyy'))
	create_title.value = ""
	create_description.value = ""
	create_dueDate.value = ""
	create_project.value = ""

})

// create the todo
create_closeContainer.addEventListener('click', () => {
	create_container.style.display = 'none';
})

// render/hide containers in todo section
sideBar_today.addEventListener('click', () => {renderTodo_container(today_container)})
sideBar_week.addEventListener('click', () => {renderTodo_container(week_container)})
sideBar_upcoming.addEventListener('click', () => {renderTodo_container(upcoming_container)})
sideBar_starred.addEventListener('click', () => {renderTodo_container(starred_container)})
