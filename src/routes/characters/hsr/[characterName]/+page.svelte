<script>
    import {page} from '$app/stores'
</script>
<h1 class="name">{$page.params.characterName}</h1>
<style>
    .name{
        text-transform: capitalize;
    }
</style>
