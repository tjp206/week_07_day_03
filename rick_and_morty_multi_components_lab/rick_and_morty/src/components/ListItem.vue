<template lang="html">
    <li>{{ character.name }}</li>
  
</template>

<script>
import {eventBus} from '../main.js'
export default {
    name: "list-item",
    props: ["character"],
    // methods:

}
</script>

<style lang="css" scoped>
</style>