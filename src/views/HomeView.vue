<template>
  <header>
    <FilterBar />
  </header>
  <main>
    <ListMovies />
    <CardForm />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListMovies from '@/components/ListMovies.vue'
import CardForm from '@/components/CardForm.vue'
import FilterBar from '@/components/FilterBar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ListMovies,
    CardForm,
    FilterBar,
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
