<script>
    import {base} from '$app/paths'
    export let data
</script>
{#each data.characters as {name}}
<li><a href="{base}/characters/hsr/{name}"><img src="{base}/img/{name}.png" alt=""></a>
</li>
{/each}
