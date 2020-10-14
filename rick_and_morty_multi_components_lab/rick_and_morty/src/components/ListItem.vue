<template lang="html">
    <li v-on:click="handleClick">{{ character.name }}</li>
  
</template>

<script>
import {eventBus} from '../main.js'

export default {
    name: "list-item",
    props: ["character"],
    methods: {
        handleClick() {
            eventBus.$emit('character-selected', this.character)
        },
    },
}
</script>

<style lang="css" scoped>
</style>