import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CardBoard from '@/components/CardBoard.vue'
import ShowCard from '../ShowCard.vue'

vi.mock('../ShowCard.vue', () => ({
  default: {
    name: 'ShowCard',
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

describe('CardBoard.vue', () => {
  it('renders the correct number of ShowCard components', () => {
    const wrapper = mount(CardBoard, {
      global: {
        mocks: {
          moviesData: mockMoviesData,
        },
      },
    })

    const showCards = wrapper.findAllComponents(ShowCard)
    expect(showCards).toHaveLength(mockMoviesData.length)
  })
})
