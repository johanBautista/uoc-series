import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Movie } from '@/utils/interface'
import { moviesData } from '../utils/data'

export const useMovieStore = defineStore('ui', {
  state: () => ({
    isFormActive: false,
    movies: [] as Movie[],
    sortBy: 'name',
  }),
  actions: {
    showForm() {
      this.isFormActive = true
    },
    hideForm() {
      this.isFormActive = false
    },
    fetchMovies() {
      this.movies = moviesData
    },
  },
  getters: {
    sortedMoviesBy: (state) => {
      return state.movies.sort((a, b) => {
        if (state.sortBy === 'name') {
          return a.title.localeCompare(b.title)
        } else if (state.sortBy === 'rating') {
          return b.rating - a.rating
        } else if (state.sortBy === 'date') {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        }
        return 0
      })
    },
  },
})
