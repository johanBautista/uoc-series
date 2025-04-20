<template>
  <div class="board">
    <CardMovie v-for="movie in showList" :key="movie.id" :movie="movie" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CardMovie from './CardMovie.vue'
import type { Movie } from '@/utils/interface'
import { moviesData } from '@/utils/data'

export default defineComponent({
  name: 'CardBoard',
  components: {
    CardMovie,
  },
  data() {
    return {
      showList: moviesData as Movie[],
    }
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
