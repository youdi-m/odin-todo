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
	const delete_div = document.createElement('div')
	const description_div = document.createElement('div')

	main_div.todoData = todoDiv

	main_div.appendChild(title_div)
	main_div.appendChild(dueDate_div)
	main_div.appendChild(starred_div)
	main_div.appendChild(delete_div)
	main_div.appendChild(description_div)

	dueDate_div.style.marginLeft = 'auto'
	starred_div.style.marginLeft = '10px'
	starred_div.style.cursor = 'pointer'
	delete_div.style.marginLeft = '10px'
	delete_div.style.cursor = 'pointer'
	
	description_div.style.position = 'absolute'
	description_div.style.display = 'none'
	description_div.style.width = '200px'
	description_div.style.height = '100px'
	description_div.style.right = '38%'
	description_div.style.borderRadius = '7px'
	description_div.style.color = '#EAEFEF'
	description_div.style.backgroundColor = '#25343F'

	description_div.textContent = todoDiv.desc

	title_div.textContent = todoDiv.title
	dueDate_div.textContent = todoDiv.dueDate
	starred_div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>'
	delete_div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>'

	main_div.dataset.id = todoDiv.title
	main_div.classList.add('todo')

	starred_div.addEventListener('click', () => {
		star_todo(main_div)
	})

	delete_div.addEventListener('click', () => {
		main_div.remove()
	})

	main_div.addEventListener('mouseover', () => {
		description_div.style.display = 'flex'
	})

	main_div.addEventListener('mouseout', () => {
  	description_div.style.display = 'none'
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