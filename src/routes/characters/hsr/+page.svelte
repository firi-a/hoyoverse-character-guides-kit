<script>
    import {base} from '$app/paths'
    export let data
</script>
<div class="flex justify-center my-32 select-none">
    <section class="flex flex-wrap max-w-5xl">
        {#each data.characters as {name}}
            <div class="">
                <a class="name text-base" href="{base}/characters/hsr/{name}">
                    <img class="rounded-2xl w-32 p-1.5 transition ease-in-out delay-50 hover:scale-110 duration-500" src="{base}/img/{name}.webp" alt="{name}'s portrait">
                </a>
            </div>
        {/each}
    </section>
</div>

<style>
    .name{
        text-transform: capitalize;
    }
</style>
