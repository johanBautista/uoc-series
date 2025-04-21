<template>
  <header>
    <FilterBar @showForm="toggleForm" :showButtonForm="!isActiveForm" />
  </header>
  <main>
    <ListMovies />
    <CardForm v-show="isActiveForm" @submit="handleSubmit" />
  </main>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import ListMovies from '@/components/ListMovies.vue'
import CardForm from '@/components/CardForm.vue'
import FilterBar from '@/components/FilterBar.vue'
import type { Movie } from '../utils/interface'

export default defineComponent({
  name: 'HomeView',
  components: {
    ListMovies,
    CardForm,
    FilterBar,
  },
  data() {
    return {
      isActiveForm: false,
    }
  },
  methods: {
    toggleForm() {
      this.isActiveForm = !this.isActiveForm
    },
    handleSubmit(newShow: Movie) {
      console.log('New Show handleSubmit:', newShow)
      this.isActiveForm = false
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
