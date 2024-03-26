<script lang="ts">
    import { onMount } from "svelte";
    import ThemeToggle from "./ThemeToggle.svelte";
    const refs = [
        {name: "Home", path: "/"},
        {name: "About", path: "/about"},
        {name: "Contact", path: "/contact"},
        {name: "Projects", path: "/projects"}
    ]

    let scrolling = false;

    const changeBackground = () => {
        if(window.scrollY >= 30) {
            scrolling = true;
        } else {
            scrolling = false;
        }
    }
    onMount(() => {
        window.addEventListener('scroll', changeBackground)   
    })
</script>


<div class={"w-full h-16 p-4 flex transition-colors justify-between fixed " + (scrolling?"bg-slate-200 dark:bg-slate-900":"")}>
    <div class="flex px-2 gap-8">
        <div class ="text-xl flex justify-center items-center gap-2">
            {#each refs as ref}
                <a class="p-2 hover:bg-slate-800 hover:text-slate-200 dark:hover:bg-slate-200 dark:hover:text-slate-800 rounded-md" href={ref.path}>{ref.name}</a>
            {/each}
        </div>
    </div>
    <ThemeToggle/>
</div>