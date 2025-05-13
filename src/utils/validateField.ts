import type { FormValues } from './interface'

export function validateField(field: keyof FormValues, values: FormValues): string {
  const titleRegex = /^.{4,}$/
  const descriptionRegex = /^.{11,}$/
  const tagsRegex = /^(\s*\w+\s*)(,\s*\w+\s*)*$/

  switch (field) {
    case 'title':
      if (!values.title.trim()) return 'El título es obligatorio.'
      if (!titleRegex.test(values.title)) return 'El título debe tener al menos 4 caracteres.'
      break

    case 'description':
      if (!values.description.trim()) return 'La descripción es obligatoria.'
      if (!descriptionRegex.test(values.description))
        return 'La descripción debe tener al menos 11 caracteres.'
      break

    case 'image':
      if (!values.image.trim()) return 'La URL de la imagen es obligatoria.'
      break

    case 'rating':
      if (values.rating < 0.5 || values.rating > 5) return 'El rating debe estar entre 0.5 y 5.'
      break

    case 'tags':
      if (!values.tags.trim()) return 'Introduce al menos una etiqueta.'
      if (!tagsRegex.test(values.tags))
        return 'Formato incorrecto. Usa palabras separadas por comas.'
      break
  }

  return ''
}
