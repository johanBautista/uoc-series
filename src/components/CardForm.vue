<template>
  <div class="card-form">
    <h2 class="card-form__title">Add a New Show</h2>
    <form @submit.prevent="submitForm" class="card-form__form">
      <label class="card-form__label">
        Title:
        <input
          v-model="title"
          type="text"
          class="card-form__input"
          @blur="validateFieldHandler('title')"
        />
        <div v-if="errors.title" class="card-form__error">{{ errors.title }}</div>
      </label>

      <label class="card-form__label">
        Description:
        <textarea
          v-model="description"
          class="card-form__textarea"
          @blur="validateFieldHandler('description')"
        ></textarea>
        <div v-if="errors.description" class="card-form__error">{{ errors.description }}</div>
      </label>

      <label class="card-form__label">
        Image URL:
        <input
          v-model="imageUrl"
          type="url"
          class="card-form__input"
          @blur="validateFieldHandler('imageUrl')"
        />
        <div v-if="errors.imageUrl" class="card-form__error">{{ errors.imageUrl }}</div>
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
          @blur="validateFieldHandler('rating')"
        />
        <div v-if="errors.rating" class="card-form__error">{{ errors.rating }}</div>
      </label>

      <label class="card-form__label">
        Tags (comma separated):
        <input
          v-model="tags"
          type="text"
          class="card-form__input"
          placeholder="Action, Drama..."
          @blur="validateFieldHandler('tags')"
        />
        <div v-if="errors.tags" class="card-form__error">{{ errors.tags }}</div>
      </label>

      <label class="card-form__label">
        Notes:
        <textarea v-model="notes" class="card-form__textarea"></textarea>
        <div v-if="errors.notes" class="card-form__error">{{ errors.notes }}</div>
      </label>

      <label class="card-form__label">
        Select Color:
        <input v-model="color" type="color" class="card-form__color-picker" />
      </label>

      <button type="submit" class="card-form__button">Submit</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useUiStore } from '@/stores/counter'
import { validateField } from '@/utils/validateField'
import type { FormErrors, FormValues } from '@/utils/interface'

export default defineComponent({
  name: 'CardForm',
  data() {
    return {
      title: '',
      description: '',
      imageUrl: '',
      rating: 0,
      tags: '',
      notes: '',
      color: '#000000',
      errors: {
        title: '',
        description: '',
        imageUrl: '',
        rating: '',
        tags: '',
        notes: '',
      },
    }
  },
  computed: {
    isFormValid(): any {
      return (
        this.title.trim() &&
        this.description.trim() &&
        this.imageUrl.trim() &&
        this.rating >= 0 &&
        this.rating <= 5 &&
        this.tags.trim() &&
        this.color
      )
    },
  },
  methods: {
    validateFieldHandler(field: keyof FormErrors) {
      const error = validateField(field as keyof FormValues, {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        rating: this.rating,
        tags: this.tags,
        notes: this.notes,
      })
      this.errors[field] = error
    },

    validateAllFields() {
      this.validateFieldHandler('title')
      this.validateFieldHandler('description')
      this.validateFieldHandler('imageUrl')
      this.validateFieldHandler('rating')
      this.validateFieldHandler('tags')

      return Object.values(this.errors).every((e) => e === '')
    },

    submitForm() {
      const isValid = this.validateAllFields()

      const newShow = {
        title: this.title,
        description: this.description,
        imageUrl: this.imageUrl,
        rating: this.rating,
        tags: this.tags.split(',').map((tag) => tag.trim()),
        notes: this.notes,
        color: this.color,
      }

      if (isValid) {
        const ui = useUiStore()
        ui.hideForm()
        this.$emit('submit', newShow)
        this.resetForm()
      }
    },

    resetForm() {
      this.title = ''
      this.description = ''
      this.imageUrl = ''
      this.rating = 0
      this.tags = ''
      this.notes = ''
      this.color = '#000000'
    },
  },
})
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
.card-form__button:disabled {
  background-color: #999;
  cursor: not-allowed;
  opacity: 0.6;
}

.card-form__error {
  color: red;
  font-size: 0.8rem;
}
</style>
