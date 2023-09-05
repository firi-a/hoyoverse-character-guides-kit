<script>
import {charData} from "$lib/characterData"
import { page } from "$app/stores"
console.log(charData[$page.params.id])
</script>
<div>
    {charData[$page.params.id-1].review}
</div>
