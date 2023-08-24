<script>
    import {page} from '$app/stores'
</script>
<h1 class="name text-3xl text-black">{$page.params.characterName}</h1>
<style>
    .name{
        text-transform: capitalize;
    }
</style>
