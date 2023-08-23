<script>
    import {base} from '$app/paths'
    export let data
</script>
{#each data.summaries as {slug, title, id}}
<li><a href="{base}/characters/hsr/{id}/{slug}"><img src="{base}/img/{slug}.png" alt=""></a>
</li>
{/each}
