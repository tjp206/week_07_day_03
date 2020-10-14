<template>
  <div id="app">
    <h1>Rick and Morty Characters</h1>
    <section>
      <label for="character-selected">Enter a character name:</label>
      <input type="text" autocomplete="on"><br>
      <p>or</p>
      <label for="character-selected">Choose a character:</label>
      <select id="character-selected" v-model="selectedCharacter">
        <option disabled value="">Choose a character</option>
        <option v-for="(character, index) in characters" :value="character" :key='index'>{{character.name}}</option>
      </select>
      <!-- <character-list :characters="characters"></character-list> -->

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
      selectedCharacter: null,
    };
  },
  mounted(){
    fetch("https://rickandmortyapi.com/api/character/")
    .then(res => res.json())
    .then(characters => this.characters = characters.results)

    eventBus.$on("character-selected", (character) => {
      this.selectedCharacter = character
    })
  },
  components: {
    "character-list": CharacterList,
    "character-detail": CharacterDetail
  },
  computed: {
  filterCharacters: function(){
    return this.characters.filter((character) => {
      return this.selectedCharacter.results.includes() 
    })
  }
  }

}
</script>

<style>
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: black;
  color:whitesmoke;
  margin: 10px;
  border-radius: 5%;
}
</style>
