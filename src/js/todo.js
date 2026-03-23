export function createTodo(title, dueDate) {
	console.log('creating todo')
	return {title, dueDate, done: false};
}