<template>
<div v-if="character">
    <h2>{{character.name}}</h2>
    <p>Status: {{character.status}} </p>
    <p>Species: {{character.species}} </p>
</div>
  
</template>

<script>
export default {
    name: 'character-detail',
    props: ['character']
}
</script>

<style>

</style>