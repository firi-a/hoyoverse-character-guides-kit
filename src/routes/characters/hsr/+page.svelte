<script>
    import {base} from '$app/paths'
    export let data
</script>
<div class="container mx-auto content-center h-fit">
    <section class="container mx-auto h-max border border-red-600 p-3">
        <div class="border-blue-600">
            <div class="grid grid-rows-4 grid-flow-col gap-1 justify-center border-green-600 p-3">
                {#each data.characters as {name}}
                    <div class="border border-purple-600 p-3">
                        <a class="text-sm name" href="{base}/characters/hsr/{name}"><img class="w-24 border border-black"  src="{base}/img/{name}.webp" alt="">{name}</a>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</div>

<style>
    .name{
        text-transform: capitalize;
    }
</style>
