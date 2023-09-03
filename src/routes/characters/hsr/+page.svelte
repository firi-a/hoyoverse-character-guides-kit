<script>
    import {base} from '$app/paths'
    export let data
    let fiveStar = "bg-gradient-to-b from-fiveStarTop to-fiveStarBottom";
    let fourStar = "bg-gradient-to-b from-fourStarTop to-fourStarBottom";
</script>
<div class="flex justify-center my-32 select-none">
    <section class="flex basis-auto flex-wrap max-w-5xl rounded-3xl">
        {#each data.characters as {name, rarity,}}
            <div class="mx-auto my-auto">
                <a class="" href="{base}/characters/hsr/{name}">
                    <img class="{rarity? fiveStar : fourStar} object-cover rounded-2xl w-32 h-32 m-1.5 transition ease-in-out delay-50 hover:scale-110 duration-500" src="{base}/img/{name}.webp" alt="{name}'s portrait">
                </a>
                <p class="text-base capitalize text-center ml-1.5">{name}</p>
            </div>
        {/each}
    </section>
</div>
