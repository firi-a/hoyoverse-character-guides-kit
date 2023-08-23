<script>
    import {base} from '$app/paths'
    export let data
</script>
{#each data.characters as {name}}
<li><a href="{base}/characters/hsr/{name}"><img src="{base}/img/{name}.webp" alt=""></a>
</li>
{/each}
