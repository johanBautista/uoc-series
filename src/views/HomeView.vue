<template>
  <header>
    <FilterBar />
  </header>
  <main>
    <ListMovies />
    <CardForm v-if="ui.isFormActive" @submit="handleSubmit" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListMovies from '@/components/ListMovies.vue'
import CardForm from '@/components/CardForm.vue'
import FilterBar from '@/components/FilterBar.vue'
import type { Movie } from '../utils/interface'
import { useMovieStore } from '@/stores/movieStore'

export default defineComponent({
  name: 'HomeView',
  components: {
    ListMovies,
    CardForm,
    FilterBar,
  },
  computed: {
    ui: () => useMovieStore(),
  },
  methods: {
    handleSubmit(newShow: Movie) {
      console.log('New Show handleSubmit:', newShow)
    },
  },
})
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
