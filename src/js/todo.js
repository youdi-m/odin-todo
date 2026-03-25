import {isToday, isThisWeek, isFuture} from 'date-fns'

const today_container = document.getElementById("today_container")
const week_container = document.getElementById("week_container")
const upcoming_container = document.getElementById("upcoming_container")
const starred_container = document.getElementById("starred_container")
const projects_container = document.getElementById("projects_container")

// create todo
export function createTodo(title, desc, dueDate) {
	return {title, desc, dueDate, done: false, starred: false};
}

export function star_todo(div) {
	if(div.todoData.starred == false) {
		div.todoData.starred = true
		div.remove()
		starred_container.appendChild(div)
	} else {
		div.todoData.starred = false
		div.remove()

		if(isToday(div.todoData.dueDate)) {
			today_container.appendChild(div)
		}
		else if(isThisWeek(div.todoData.dueDate)) {
			week_container.appendChild(div)
		}
		else if(isFuture(div.todoData.dueDate)) {
			upcoming_container.appendChild(div)
		}
	}
}