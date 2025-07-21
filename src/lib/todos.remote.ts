import { command, query } from '$app/server';

type Todo = { id: number; text: string; done: boolean };

let todos: Todo[] = [{ id: 1, text: 'Make a coffee', done: true }];

export const getTodos = query(async () => {
	await new Promise((r) => setTimeout(r, 1500));

	return todos;
});

export const addTodo = command('unchecked', async (text: string) => {
	todos.push({ id: todos.length + 1, done: false, text });
	getTodos().refresh();
	return todos;
});
