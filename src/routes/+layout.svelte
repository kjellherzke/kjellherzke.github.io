<script lang="ts">
	import '../app.css';
	import { navs } from '../lib/config';
	let { children } = $props();

	let isMobileMenuOpen = $state(false);
</script>

<div class="container mx-auto flex h-screen flex-col justify-between gap-y-10">
	<nav
		class="relative flex w-full items-center justify-between border-b border-b-gray-800 px-8 py-3 text-gray-400"
	>
		<div>
			<a href="/" class="transition duration-200 hover:text-gray-200"> kjell herzke </a>
		</div>

		<div class="hidden items-center gap-x-2 md:flex">
			{#each navs as { title, href }, i}
				<a {href} class="transition duration-200 hover:text-gray-200"> {title} </a>
				{#if i < navs.length - 1}
					<span class="text-xl text-gray-700"> / </span>
				{/if}
			{/each}
		</div>

		<div class="hidden items-center gap-x-2 md:flex">
			<span class="text-xl text-gray-700"> / </span>
			<a
				href="https://github.com/kjellherzke"
				target="_blank"
				class="transition duration-200 hover:text-gray-200"
			>
				get in touch
			</a>
			<span class="text-xl text-gray-700"> / </span>
		</div>

		<button
			onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
			class="cursor-pointer md:hidden"
			aria-label="toggle menu"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 16 16"
				fill="currentColor"
				class="size-4"
			>
				<path
					fill-rule="evenodd"
					d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75ZM2 8a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 2 8Zm0 4.25a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z"
					clip-rule="evenodd"
				/>
			</svg>
		</button>

		<div
			class="md:hidden {isMobileMenuOpen
				? 'flex flex-col'
				: 'hidden'} fixed top-13 bottom-12 left-0 z-20 w-full bg-gray-950 py-4"
		>
			<div class="flex h-full flex-col gap-y-1 px-8">
				{#each navs as { title, href }, i}
					<div class="flex items-center gap-x-2">
						<span class="text-xl text-gray-700"> / </span>
						<a {href} class="transition duration-200 hover:text-gray-200">
							{title}
						</a>
					</div>
				{/each}
			</div>
		</div>
	</nav>

	<main class="h-full w-full">
		{@render children()}
	</main>

	<footer
		class="flex w-full items-center justify-between border-t border-t-gray-800 px-8 py-3 text-gray-400"
	>
		<div class="flex items-center gap-x-2">
			<p class="text-sm">kjell herzke</p>
			<span class="text-sm text-gray-700"> / </span>
			<a
				href="https://github.com/kjellherzke"
				class="transition duration-200 hover:text-gray-200"
				target="_blank"
				aria-labelledby="github"
			>
				<svg
					class="size-3.5"
					fill="currentColor"
					stroke-width="0"
					viewBox="0 0 16 16"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M8 0.198c-4.418 0-8 3.582-8 8 0 3.535 2.292 6.533 5.471 7.591 0.4 0.074 0.547-0.174 0.547-0.385 0-0.191-0.008-0.821-0.011-1.489-2.226 0.484-2.695-0.944-2.695-0.944-0.364-0.925-0.888-1.171-0.888-1.171-0.726-0.497 0.055-0.486 0.055-0.486 0.803 0.056 1.226 0.824 1.226 0.824 0.714 1.223 1.872 0.869 2.328 0.665 0.072-0.517 0.279-0.87 0.508-1.070-1.777-0.202-3.645-0.888-3.645-3.954 0-0.873 0.313-1.587 0.824-2.147-0.083-0.202-0.357-1.015 0.077-2.117 0 0 0.672-0.215 2.201 0.82 0.638-0.177 1.322-0.266 2.002-0.269 0.68 0.003 1.365 0.092 2.004 0.269 1.527-1.035 2.198-0.82 2.198-0.82 0.435 1.102 0.162 1.916 0.079 2.117 0.513 0.56 0.823 1.274 0.823 2.147 0 3.073-1.872 3.749-3.653 3.947 0.287 0.248 0.543 0.735 0.543 1.481 0 1.070-0.009 1.932-0.009 2.195 0 0.213 0.144 0.462 0.55 0.384 3.177-1.059 5.466-4.057 5.466-7.59 0-4.418-3.582-8-8-8z"
					></path>
				</svg>
			</a>
		</div>

		<div class="flex items-center gap-x-2">
			<p class="text-sm">2020</p>
			<span class="text-sm text-gray-700"> / </span>
			<p class="text-sm">2025</p>
		</div>
	</footer>
</div>
