<template>
  <div class="movie-filter">
    <!-- Input y botones -->
    <div class="movie-filter__input-container">
      <input
        v-model="search"
        type="text"
        class="movie-filter__input"
        placeholder="Search film..."
      />
      <button class="movie-filter__button movie-filter__button--clear" @click="clearInput">
        Clear
      </button>
      <button class="movie-filter__button movie-filter__button--add" @click="addNewShow">
        Add New Show
      </button>
    </div>

    <!-- Filtros -->
    <div class="movie-filter__controls">
      <label class="movie-filter__label">
        Tags:
        <select v-model="selectedGenre" class="movie-filter__dropdown">
          <option value="" disabled>Selected option</option>
          <option v-for="genre in genres" :key="genre" :value="genre">{{ genre }}</option>
        </select>
      </label>

      <label class="movie-filter__label">
        Rating: {{ rating }}
        <input
          v-model="rating"
          type="range"
          min="0"
          max="5"
          step="0.5"
          class="movie-filter__slider"
        />
      </label>

      <label class="movie-filter__label">
        Sort by:
        <select v-model="sortBy" class="movie-filter__dropdown">
          <option value="name">Name</option>
          <option value="rating">Rating</option>
          <option value="rating">Date</option>
        </select>
      </label>

      <label class="movie-filter__label">
        Order:
        <select v-model="sortDirection" class="movie-filter__dropdown">
          <option value="asc">Ascendente</option>
          <option value="desc">Descendente</option>
        </select>
      </label>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const search = ref('')
const selectedGenre = ref('')
const rating = ref(0)
const sortBy = ref('name')
const sortDirection = ref('asc')

const genres = [
  'Action',
  'Adventure',
  'Comedy',
  'Drama',
  'Fantasy',
  'Horror',
  'Mystery',
  'Romance',
  'Sci-Fi',
  'Thriller',
]

const clearInput = () => {
  search.value = ''
}

const addNewShow = () => {
  console.log('Añadir nueva película', search.value)
}
</script>

<style scoped>
.movie-filter {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  margin: auto;
  background-color: #11212d;
  color: #f9f9f9;
}

.movie-filter__input-container {
  /* max-width: 800px; */
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.movie-filter__input {
  flex: 1;
  width: 80%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.movie-filter__button {
  padding: 0.5rem 1rem;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}

.movie-filter__button--clear {
  background-color: #f1f0f0;
  color: #292626;
}
.movie-filter__button--clear:hover {
  background-color: #ffffff;
}

.movie-filter__button--add {
  background-color: #4b3ca3;
  color: white;
}
.movie-filter__button--add:hover {
  background-color: #5740d8;
}

.movie-filter__controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.movie-filter__label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.movie-filter__dropdown,
.movie-filter__slider {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>
