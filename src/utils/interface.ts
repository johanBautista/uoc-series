export interface Movie {
  id: number
  title: string
  description: string
  image: string
  rating: number
  tags: string[]
  notes: string
  color: string
  releaseDate: string
}

export interface MovieList {
  movies: Movie[]
}
