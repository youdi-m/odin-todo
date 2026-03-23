export function renderTodo(todoDiv) {
	console.log('rendering todo')
	const div = document.createElement('div')
	div.textContent = todoDiv.title + ' Due by: ' + todoDiv.dueDate
	div.dataset.id = todoDiv.title
	div.classList.add('todo')
	document.querySelector('.today_container').appendChild(div)
}