<script>
    import {page} from '$app/stores'
    import LynxScript from "../characterScripts/lynx_script.md"
    import BladeScript from "../characterScripts/blade_script.md"
    import InbibitorScript from "../characterScripts/il_dh_script.md"
    import KafkaScript from "../characterScripts/kafka_script.md"
</script>
<!-- There has got to be a more elegant way to do this but here we are -->
<div class="bg-subBG m-5 justify-center text-left leading-6 text-lg rounded-3xl max-w-5xl mx-auto py-10 shadow-2xl border-mainAccent border-2">
    <div class="review px-32">
        {#if $page.params.characterName === 'lynx'}
        <LynxScript/>
        {:else if $page.params.characterName === 'blade'}
        <BladeScript/>
        {:else if $page.params.characterName === 'kafka'}
        <KafkaScript/>
        {:else if $page.params.characterName === 'inbibitor lunae'}
        <InbibitorScript/>
        {:else}
        <p>This is where the review goes</p>
        {/if}
    </div>
</div>
