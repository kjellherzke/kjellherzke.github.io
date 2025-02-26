<script>
	import { projects, timeline } from '../../lib/config';
</script>

<header class="mb-16 px-8">
	<div class="flex items-center gap-x-2">
		<!-- <span class="text-5xl font-extralight text-gray-700"> / </span> -->
		<h1 class="text-6xl text-gray-200">about me</h1>
		<!-- <span class="text-5xl font-extralight text-gray-700"> / </span> -->
	</div>

	<p class="mt-6 max-w-3xl text-gray-400 italic">not much yet.</p>

	<p class="mt-6 max-w-3xl text-gray-400">
		Hello! I'm Kjell, a passionate software engineer with a strong foundation in sciences and
		mathematics. Since 2020, I've been crafting innovative solutions, from Minecraft plugins to
		full-stack applications. My journey includes leading open-source projects like web-based games,
		streaming platforms, and social networking sites. I thrive on solving complex problems and am
		dedicated to contributing to forward-thinking organizations with my expertise and enthusiasm.
	</p>
</header>

{#if timeline.visible}
	{#each timeline.data as sec}
		<div class="flex gap-x-6 border-t border-gray-800 px-8 py-5 last:border-b">
			<div>{sec.date}</div>

			<div>
				<div class="flex items-center gap-x-2">
					<h4 class="text-lg text-gray-200">{sec.title}</h4>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 16 16"
						fill="currentColor"
						class="size-4"
					>
						<path
							fill-rule="evenodd"
							d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
							clip-rule="evenodd"
						/>
					</svg>
					<h4 class="text-lg text-gray-400">{sec.company}</h4>
				</div>

				<p class="my-2 text-sm text-gray-400">{sec.description}</p>
				<!-- <div class="flex items-center gap-x-2">
				<span class="text-base font-extralight text-gray-700"> / </span>
				 {#each project.technologies as technology}
					<p class="text-sm">{technology.toLowerCase()}</p>
					<span class="text-base font-extralight text-gray-700"> / </span>
				{/each}
			</div> -->
			</div>
		</div>
	{/each}
{/if}
