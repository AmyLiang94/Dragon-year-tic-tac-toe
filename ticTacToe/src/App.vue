<template>
  <div id="app">
  <router-view>
  </router-view>
  </div>
</template>

<script>
import NameInput from './components/NameInput.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  components: {
    NameInput,
    Game
  }
};
</script>

<style>
</style>


