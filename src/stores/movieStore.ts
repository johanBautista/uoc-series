import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { Movie } from '@/utils/interface'
import { moviesData } from '../utils/data'

export const useMovieStore = defineStore('ui', {
  state: () => ({
    isFormActive: false,
    movies: [] as Movie[],
    sortBy: 'name',
    rating: 0,
    minRating: 0,
    selectedGenre: '',
    searchQuery: '',
    sortDirection: 'asc',
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
    clearFilters() {
      this.searchQuery = ''
      this.selectedGenre = ''
      this.minRating = 0
      this.sortBy = 'name'
      this.sortDirection = 'asc'
    },
    addMovie(movie: Omit<Movie, 'id'>) {
      const newMovie: Movie = {
        ...movie,
        id: crypto.randomUUID(),
      }
      this.movies.push(newMovie)
    },
    removeMovie(id: string) {
      return (this.movies = this.movies.filter((x) => x.id !== id))
    },
  },
  getters: {
    filteredMovies: (state) => {
      let result = state.movies

      // títle
      if (state.searchQuery.trim()) {
        result = result.filter((movie) =>
          movie.title.toLowerCase().includes(state.searchQuery.toLowerCase()),
        )
      }

      // genre
      if (state.selectedGenre) {
        result = result.filter((movie) => movie.tags.includes(state.selectedGenre))
      }

      // rating
      if (state.rating) {
        result = result.filter((movie) => movie.rating >= state.rating)
      }

      // sortby
      result = [...result].sort((a, b) => {
        if (state.sortBy === 'name') {
          return a.title.localeCompare(b.title)
        }
        if (state.sortBy === 'rating') {
          return b.rating - a.rating
        }
        if (state.sortBy === 'date') {
          return new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()
        }
        return 0
      })

      // asc/desc
      if (state.sortDirection === 'desc') {
        result.reverse()
      }
      return result
    },
  },
})
