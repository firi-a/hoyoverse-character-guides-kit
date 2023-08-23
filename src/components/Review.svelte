<script>
    import {page} from '$app/stores'
    import LynxScript from "../characterScripts/lynx_script.md"
    import BladeScript from "../characterScripts/blade_script.md"
    import InbibitorScript from "../characterScripts/il_dh_script.md"
    import KafkaScript from "../characterScripts/kafka_script.md"
</script>
<div>
    {#if $page.params.characterName === 'lynx'}
    <LynxScript/>
    {:else if $page.params.characterName === 'blade'}
    <BladeScript/>
    {:else if $page.params.characterName === 'kafka'}
    <KafkaScript/>
    {:else if $page.params.characterName === 'inbibitor lunae - dan heng'}
    <InbibitorScript/>
    {:else}
    <p>This is where the review goes</p>
    {/if}
</div>
