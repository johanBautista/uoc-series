<template>
  <article class="card" :style="{ borderTop: `4px solid ${movie.color}` }">
    <!-- image -->
    <img :src="movie.image" alt="movie.title" class="cover" />
    <!-- description -->
    <div>
      <h2 class="info__title">{{ movie.title }}</h2>
      <p class="info__description">
        {{ movie.description }}
      </p>
      <p class="info__year">{{ movie.releaseDate }}</p>
      <ul class="info__tags">
        <li v-for="tag in movie.tags">{{ tag }}</li>
      </ul>

      <blockquote class="info__notes">{{ movie.notes }}</blockquote>

      <section class="info__rating">
        <span v-for="star in 5" :key="star">
          <font-awesome-icon
            :icon="['fas', 'star']"
            :class="star <= Math.floor(movie.rating) ? 'full-star' : ''"
          />
        </span>
      </section>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Movie } from '@/utils/interface'

defineProps<{ movie: Movie }>()
</script>

<style scoped>
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 10px;
  padding: 10px;
  border-radius: 5px;
  color: #292626;
  border-top: 10px outset;
  position: relative;
  box-shadow: 10px 10px 11px -6px rgba(0, 0, 0, 0.12);
  height: 270px;
}

.cover {
  flex: 25% 0 0;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
  max-width: 100%;
}

.delete-btn {
  position: absolute;
  top: 0;
  right: 0;
  color: white;
  cursor: pointer;
  background-color: transparent;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-block: 0px;
  padding-inline: 0px;
  border: none;
}

.info__title {
  font-size: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  overflow: hidden;
}

.info__description {
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  height: 60px;
  overflow: hidden;
}

.info__year {
  font-size: 0.7rem;
  color: #5c5c5c;
}

.info__tags {
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;
  padding: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  padding-inline-start: 0;
  height: 50px;
}

.info__tags li {
  font-size: 0.6rem;
  background-color: rgba(0, 0, 0, 0.15);
  padding: 2px 4px;
  border-radius: 10px;
  height: 15px;
  display: flex;
  align-items: center;
}

.info__notes {
  font-size: 0.65rem;
  font-style: italic;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 50px;
  color: rgb(92, 92, 92);
}

.full-star {
  color: gold;
}
</style>
