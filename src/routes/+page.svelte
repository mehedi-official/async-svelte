<script lang="ts">
	import AddTodo from '$lib/AddTodo.svelte';
	import BestProject from '$lib/BestProject.svelte';
	import Footer from '$lib/Footer.svelte';
	import Header from '$lib/Header.svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Services from '$lib/Services.svelte';
	import { theme } from '$lib/theme.svelte';
	import TodoList from '$lib/TodoList.svelte';

	function changeTheme(themeName: 'light' | 'dark'): any {
		theme.name = themeName;
	}
</script>

<div>
	<Header />
	<BestProject />
	<Services />
	<Footer />

	<!-- <div class="mt-100">
        <button onclick={() => changeTheme("light")} class="btn">Light theme</button>
        <button onclick={() => changeTheme("dark")} class="btn">Dark theme</button>
    </div> -->
</div>

<svelte:head>
	<title>Mehedi — Website Developer</title>
</svelte:head>

<!-- <div bind:this={root} data-theme={themeName} class="mx-16 mt-16 flex flex-col items-center">
    <AddTodo />
    <TodoList />

    <input type="text" class="text-content-default" bind:value={themeName}>

    <button onclick={(e) => {
        console.log(root?.dataset?.theme);
        
    }} class="text-content-default">Theme</button>
</div> -->
