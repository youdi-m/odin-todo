export function createTodo(title, desc, dueDate) {
	console.log('creating todo')
	return {title, desc, dueDate, done: false};
}