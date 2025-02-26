<script>
	import { projects, tags } from '../lib/config';
</script>

<header class="mb-16 px-8">
	<div class="mb-4 flex items-center gap-x-2">
		<!-- <span class="text-5xl font-extralight text-gray-700"> / </span> -->
		<h1 class="text-6xl text-gray-200">kjell herzke</h1>
		<!-- <span class="text-5xl font-extralight text-gray-700"> / </span> -->
	</div>

	<div class="flex items-center gap-x-2 text-gray-400">
		<span class="text-xl font-extralight text-gray-700"> / </span>
		{#each tags as tag}
			<p class="text-lg">{tag}</p>
			<span class="text-xl font-extralight text-gray-700"> / </span>
		{/each}
	</div>

	<p class="mt-10 max-w-3xl text-gray-400">
		Hello! I'm Kjell, a passionate software developer with a strong background in engineering,
		design, and mathematics. I thrive on solving complex problems and creating innovative solutions.
		With a keen eye for detail and a commitment to excellence, I aim to deliver high-quality work
		that exceeds expectations.
	</p>
</header>

{#if projects.visible}
	{#each projects.data as project}
		<div class="border-t border-gray-800 px-8 py-5 last:border-b">
			<a href={project.link} target="_blank">
				<div class="flex items-center gap-x-2">
					<h2 class="text-lg text-gray-200">{project.name}</h2>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-3.5"
					>
						<path
							fill-rule="evenodd"
							d="M8.914 6.025a.75.75 0 0 1 1.06 0 3.5 3.5 0 0 1 0 4.95l-2 2a3.5 3.5 0 0 1-5.396-4.402.75.75 0 0 1 1.251.827 2 2 0 0 0 3.085 2.514l2-2a2 2 0 0 0 0-2.828.75.75 0 0 1 0-1.06Z"
							clip-rule="evenodd"
						/>
						<path
							fill-rule="evenodd"
							d="M7.086 9.975a.75.75 0 0 1-1.06 0 3.5 3.5 0 0 1 0-4.95l2-2a3.5 3.5 0 0 1 5.396 4.402.75.75 0 0 1-1.251-.827 2 2 0 0 0-3.085-2.514l-2 2a2 2 0 0 0 0 2.828.75.75 0 0 1 0 1.06Z"
							clip-rule="evenodd"
						/>
					</svg>
				</div>

				<p class="my-2 text-sm text-gray-400">{project.description}</p>
				<div class="flex items-center gap-x-2">
					<span class="text-base font-extralight text-gray-700"> / </span>
					{#each project.technologies as technology}
						<p class="text-sm">{technology.toLowerCase()}</p>
						<span class="text-base font-extralight text-gray-700"> / </span>
					{/each}
				</div>
			</a>
		</div>
	{/each}
{/if}
