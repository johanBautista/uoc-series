import { defineStore } from 'pinia'
import type { Movie } from '@/utils/interface'
import axios from 'axios'
import { toast } from 'vue3-toastify'

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
    clearFilters() {
      this.searchQuery = ''
      this.selectedGenre = ''
      this.minRating = 0
      this.sortBy = 'name'
      this.sortDirection = 'asc'
    },
    async fetchMovies() {
      try {
        const response = await axios.get<Movie[]>('http://localhost:3000/shows')
        this.movies = response.data.data
        return response.data
      } catch (error) {
        console.error('Error fetching movies:', error)
      }
    },
    async addMovie(movie: Omit<Movie, 'id'>) {
      try {
        const response = await axios.post<Movie>('http://localhost:3000/show', movie)
        this.movies.push(response.data.data)
        toast.success('Movie added successfully!')
        return response.data
      } catch (error) {
        console.error('Error adding movie:', error)
        toast.error('Failed to add movie')
      }
    },
    async removeMovie(id: string) {
      try {
        const response = await axios.delete(`http://localhost:3000/show/${id}`)
        toast.success('Movie deleted successfully!')
        this.movies = this.movies.filter((movie) => movie.id !== id)
        return response.data
      } catch (error) {
        console.error('Error deleting movie:', error)
        toast.error('Failed to delete movie')
      }
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
        console.log(state.selectedGenre)

        result = result.filter((movie) => {
          console.log(movie.tags)

          return movie.tags.includes(state.selectedGenre.toLowerCase())
        })
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
