<template>
  <div class="card-form">
    <h2 class="card-form__title">Add a New Show</h2>
    <form @submit.prevent="submitForm" class="card-form__form">
      <label class="card-form__label">
        Title:
        <input v-model="title" type="text" class="card-form__input" required />
      </label>

      <label class="card-form__label">
        Description:
        <textarea v-model="description" class="card-form__textarea" required></textarea>
      </label>

      <label class="card-form__label">
        Image URL:
        <input v-model="imageUrl" type="url" class="card-form__input" required />
      </label>

      <label class="card-form__label">
        Rating:
        <input
          v-model.number="rating"
          type="number"
          min="0"
          max="5"
          step="0.5"
          class="card-form__input"
          required
        />
      </label>

      <label class="card-form__label">
        Tags (comma separated):
        <input v-model="tags" type="text" class="card-form__input" placeholder="Action, Drama..." />
      </label>

      <label class="card-form__label">
        Notes:
        <textarea v-model="notes" class="card-form__textarea"></textarea>
      </label>

      <label class="card-form__label">
        Select Color:
        <input v-model="color" type="color" class="card-form__color-picker" />
      </label>

      <button type="submit" class="card-form__button">Submit</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const title = ref('')
const description = ref('')
const imageUrl = ref('')
const rating = ref(0)
const tags = ref('')
const notes = ref('')
const color = ref('#000000')

const submitForm = () => {
  const newShow = {
    title: title.value,
    description: description.value,
    imageUrl: imageUrl.value,
    rating: rating.value,
    tags: tags.value.split(',').map((tag) => tag.trim()),
    notes: notes.value,
    color: color.value,
  }
  console.log('New Show:', newShow)
}
</script>

<style scoped>
.card-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.5rem;
  width: 450px;
  margin: 2rem 0;
  border-radius: 2px;
  background-color: #11212d;
  color: #f9f9f9;
}
@media screen and (max-width: 768px) {
  .card-form {
    width: 100%;
    margin: 0;
  }
}

.card-form__title {
  text-align: center;
  font-size: 1.5rem;
}

.card-form__form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-form__label {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.card-form__input,
.card-form__textarea,
.card-form__color-picker {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
}

.card-form__textarea {
  resize: vertical;
  height: 100px;
}

.card-form__button {
  padding: 0.75rem;
  background-color: #4b3ca3;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  font-size: 1rem;
}

.card-form__button:hover {
  background-color: #5740d8;
}
</style>
