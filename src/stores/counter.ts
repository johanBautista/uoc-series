import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUiStore = defineStore('ui', {
  state: () => ({
    isFormActive: false,
  }),
  actions: {
    showForm() {
      this.isFormActive = true
    },
    hideForm() {
      this.isFormActive = false
    },
  },
})
