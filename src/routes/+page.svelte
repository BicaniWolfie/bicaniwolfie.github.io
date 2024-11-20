<script lang="ts">
	import { onMount } from "svelte";

    let numDots = $state(0)

    const incDot = async () => {
        setTimeout(() => {
            numDots = (numDots + 1) % 4;
            incDot()
        }, 1000)
    }

    let wipText = $state("")
    let constructText = $derived(`Site is under construction${'.'.repeat(numDots)}`)

    onMount(async () => {
        setTimeout(() => {
            incDot()
        }, 2000);
        
    })
</script>

<div class="w-full h-full flex-grow flex flex-col gap-4 justify-center items-center select-none">
    <h1 class="relative text-8xl text-slate-700 font-console">
        [WIP]
    </h1>
    <h1 class="relative text-4xl text-slate-400 font-console before:absolute before:inset-0 before:animate-typewriter before:bg-gray-950">
        {constructText}
    </h1>
</div>