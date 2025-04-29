export interface Movie {
  id: string
  title: string
  description: string
  imageUrl: string
  rating: number
  tags: string[]
  notes: string
  color: string
  releaseDate: string
}

export interface MovieList {
  movies: Movie[]
}

///////////
export interface FormValues {
  title: string
  description: string
  imageUrl: string
  rating: number
  tags: string
  notes?: string
}

export interface FormErrors {
  title: string
  description: string
  imageUrl: string
  rating: string
  tags: string
  notes?: string
}
