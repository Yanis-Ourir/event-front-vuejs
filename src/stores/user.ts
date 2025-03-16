import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

type User = {
  name: string
  email: string
  id: number
}

export const userStore = defineStore('user', () => {
  const user = ref({
    name: '',
    email: '',
    id: 0,
  })

  function fillUser(data: User) {
    user.value = data
  }

  function clearUser() {
    user.value = {
      name: '',
      email: '',
      id: 0,
    }
  }

  return { user, fillUser, clearUser }
})
