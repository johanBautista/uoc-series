<template>
  <div class="board">
    <CardMovie v-for="movie in ui.sortedMoviesBy" :key="movie.id" :movie="movie" />

    {{ ui.sortedMoviesBy.length }} movies
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardMovie from './CardMovie.vue'
import { useMovieStore } from '@/stores/movieStore'

export default defineComponent({
  name: 'CardBoard',
  components: {
    CardMovie,
  },
  data() {
    return {
      ui: useMovieStore(),
    }
  },
  created() {
    this.ui.fetchMovies()
  },
})
</script>

<style scoped>
.board {
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: min-content;
  gap: 20px;
  margin: 2rem;
  /*  */
}
</style>
