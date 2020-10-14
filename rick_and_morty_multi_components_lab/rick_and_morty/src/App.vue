<template>
  <div>
    <h1>Rick and Morty Characters</h1>
    <section>
      <character-list :characters="characters"></character-list>
      <character-detail :character="selectedCharacter"></character-detail>

    </section>

  </div>
</template>

<script>
import { eventBus } from './main.js'
import CharacterDetail from './components/CharacterDetail.vue'
import CharacterList from './components/CharacterList.vue'
// import ListItem from './components/ListItem.vue'

export default {
  name: 'App',
  data(){
    return {
      characters: [],
      selectedCharacter: null
    };
  },
  mounted(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then(characters => this.characters = characters.results)

// eventBus.$on("")
  },
  components: {
    "character-list": CharacterList,
    "character-detail": CharacterDetail
  },

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
