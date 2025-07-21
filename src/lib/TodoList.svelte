<script lang="ts">
	import { getTodos } from '$lib/todos.remote';
	let todolist = getTodos();

	async function handleRefresh(
		event: MouseEvent & { currentTarget: EventTarget & HTMLButtonElement }
	) {
		console.log('clicked');
		await todolist.refresh();
	}
</script>

<ul>
	<button class="mb-6 border px-3 py-2" onclick={handleRefresh}>Refresh</button>

	{#await todolist}
		<p>Fetching todos...</p>
	{:then todos}
		{#each todos as todo}
			<li>{todo.id} - {todo.text}</li>
		{/each}
	{/await}
</ul>
