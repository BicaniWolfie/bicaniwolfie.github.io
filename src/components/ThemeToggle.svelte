<script>
    import { onMount } from "svelte";
    import { darkMode } from "../store";


    darkMode.listen((value) => {
        if(value) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    })

    onMount(() => {
        if(localStorage.getItem('theme') === "dark") {
            darkMode.set(true)
        } else {
            darkMode.set(false)
        }
    })
</script>

<button
    on:click={() => $darkMode = !$darkMode}
    class="h-8 w-8 flex align-center"
>
    {#if $darkMode}
        <iconify-icon
            class="rounded-lg text-4xl outline outline-slate-200 hover:bg-slate-200 hover:text-slate-800 transition-colors duration-50"
            icon="mdi:weather-night"
        />
    {:else}
        <iconify-icon
            class="rounded-lg text-4xl outline outline-slate-800 hover:bg-slate-800 hover:text-slate-200 transition-colors duration-50"
            icon="mdi:weather-sunny"
        />
    {/if}
</button>
