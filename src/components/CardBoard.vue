<template>
  <div class="board">
    <ShowCard v-for="movie in showList" :key="movie.id" :movie="movie" />
  </div>
</template>

<script setup lang="ts">
import type { Movie } from '@/utils/interface'
import ShowCard from './ShowCard.vue'
import { moviesData } from '@/utils/data'

const showList: Movie[] = moviesData
</script>

<style scoped>
.board {
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  grid-auto-rows: min-content;
  gap: 20px;
  /*  */
}
</style>
