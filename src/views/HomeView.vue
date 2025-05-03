<template>
  <header>
    <FilterBar />
  </header>
  <main>
    <ListMovies />
    <CardForm v-if="ui.isFormActive" />
  </main>
</template>

<script setup lang="ts">
import ListMovies from '@/components/ListMovies.vue'
import CardForm from '@/components/CardForm.vue'
import FilterBar from '@/components/FilterBar.vue'
import { useMovieStore } from '@/stores/movieStore'

const ui = useMovieStore()
</script>

<style scoped>
main {
  display: flex;
  justify-content: space-between;
}
@media screen and (max-width: 768px) {
  main {
    flex-direction: column;
    align-items: center;
  }
}
</style>
