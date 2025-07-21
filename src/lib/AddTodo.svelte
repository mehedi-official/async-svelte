<script lang="ts">
	import { addTodo, getTodos } from './todos.remote';

	async function handleAddTodo(
		e: KeyboardEvent & { currentTarget: EventTarget & HTMLInputElement }
	): any {
		if (e.key === 'Enter') {
			const data = await addTodo(e.currentTarget.value);
			console.log(data);
			e.currentTarget.value = '';
		}
	}
</script>

<div class="mb-4">
	<label>
		Enter your task: <br />
		<input type="text" class="rounded-sm border px-3 py-2" onkeydown={(e) => handleAddTodo(e)} />
	</label>
</div>
