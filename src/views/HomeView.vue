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
import { defineComponent, computed } from 'vue'
import ListMovies from '@/components/ListMovies.vue'
import CardForm from '@/components/CardForm.vue'
import FilterBar from '@/components/FilterBar.vue'
import type { Movie } from '../utils/interface'
import { useUiStore } from '@/stores/counter'

export default defineComponent({
  name: 'HomeView',
  components: {
    ListMovies,
    CardForm,
    FilterBar,
  },
  data() {
    return {}
  },
  computed: {
    ui: () => useUiStore(),
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
