<template>
  <div class="board">
    <CardMovie v-for="movie in ui.filteredMovies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import CardMovie from './CardMovie.vue'
import { useMovieStore } from '@/stores/movieStore'

const ui = useMovieStore()

onMounted(() => {
  ui.fetchMovies()
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
