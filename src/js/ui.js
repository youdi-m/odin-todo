import {isToday, isThisWeek, isFuture} from 'date-fns'
import {star_todo} from './todo.js'

const today_container = document.getElementById("today_container")
const week_container = document.getElementById("week_container")
const upcoming_container = document.getElementById("upcoming_container")
const starred_container = document.getElementById("starred_container")
const projects_container = document.getElementById("projects_container")

// render todo div
export function renderTodo(todoDiv) {
	const main_div = document.createElement('div')
	const title_div = document.createElement('div')
	const dueDate_div = document.createElement('div')
	const starred_div = document.createElement('div')

	main_div.todoData = todoDiv

	main_div.appendChild(title_div)
	main_div.appendChild(dueDate_div)
	main_div.appendChild(starred_div)

	dueDate_div.style.marginLeft = 'auto'
	starred_div.style.marginLeft = '10px'

	title_div.textContent = todoDiv.title
	dueDate_div.textContent = todoDiv.dueDate
	starred_div.textContent = '⭐'

	main_div.dataset.id = todoDiv.title
	main_div.classList.add('todo')

	starred_div.addEventListener('click', () => {
		star_todo(main_div)
	})

	if(isToday(todoDiv.dueDate)) {
		today_container.appendChild(main_div)
	}
	else if(isThisWeek(todoDiv.dueDate)) {
		week_container.appendChild(main_div)
	}
	else if(isFuture(todoDiv.dueDate)) {
		upcoming_container.appendChild(main_div)
	}
}

// change todo container contents
export function renderTodo_container(containerDiv) {
	today_container.style.display = "none"
	week_container.style.display = "none"
	upcoming_container.style.display = "none"
	starred_container.style.display = "none"
	projects_container.style.display = "none"

	containerDiv.style.display = "flex"
}