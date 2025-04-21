import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import ListMovies from '@/components/ListMovies.vue'
import CardMovie from '../CardMovie.vue'

vi.mock('../CardMovie.vue', () => ({
  default: {
    name: 'CardMovie',
    props: ['movie'],
    template: '<div class="show-card">{{ movie.title }}</div>',
  },
}))

const mockMoviesData = [
  {
    id: 1,
    title: 'The Witcher',
    description: 'Movie description #1',
  },
  {
    id: 2,
    title: 'The Witcher-2',
    description: 'Movie description #2',
  },
  {
    id: 3,
    title: 'The Witcher',
    description: 'Movie description #3',
  },
  {
    id: 4,
    title: 'The Witcher',
    description: 'Movie description #4',
  },
  {
    id: 5,
    title: 'The Witcher',
    description: 'Movie description #5',
  },
  {
    id: 6,
    title: 'The Witcher',
    description: 'Movie description #6',
  },
]

describe('ListMovies.vue', () => {
  it('renders the correct number of ShowCard components', () => {
    const wrapper = mount(ListMovies, {
      global: {
        mocks: {
          moviesData: mockMoviesData,
        },
      },
    })

    const showCards = wrapper.findAllComponents(CardMovie)
    expect(showCards).toHaveLength(mockMoviesData.length)
  })
})
