<template>
  <header>
    <FilterBar />
  </header>
  <main>
    <CardBoard />
    <CardForm />
  </main>
</template>
<script setup lang="ts">
import CardBoard from '@/components/CardBoard.vue'
import CardForm from '@/components/CardForm.vue'
import FilterBar from '@/components/FilterBar.vue'
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
