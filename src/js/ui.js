import {isToday, isThisWeek, isFuture} from 'date-fns'

export function renderTodo(todoDiv) {
	console.log('rendering todo')
	const div = document.createElement('div')
	div.textContent = todoDiv.title + ' ' + todoDiv.dueDate
	div.dataset.id = todoDiv.title
	div.classList.add('todo')
	
	if(isToday(todoDiv.dueDate)) {
		document.querySelector('.today_container').appendChild(div)
	}
	else if(isThisWeek(todoDiv.dueDate)) {
		document.querySelector('.week_container').appendChild(div)
	}
	else if(isFuture(todoDiv.dueDate)) {
		document.querySelector('.upcoming_container').appendChild(div)
	}
}