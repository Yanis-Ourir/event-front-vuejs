<script setup lang="ts">
import { createEvent } from '@/functions/event'
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
    formModal: Boolean
})

const emit = defineEmits(['closeFormModal'])

const closeModal = () => {
    emit('closeFormModal')
}

const event = ref({
    title: '',
    description: '',
    date: '',
    time: '',
    location: ''
});

const submitForm = () => {
    createEvent(event.value);
}

</script>

<template>
              <form class="flex flex-col bg-gray-900 p-10 md:p-16 rounded-2xl border border-white/20 backdrop-blur-lg shadow-lg w-full max-w-md"
                @submit.prevent="">

                <h4 class="text-4xl font-bold text-white text-center mb-8">
                    Create Event
                </h4>
                <button @click="closeModal" class="absolute top-3 right-3 text-gray-400 hover:text-white focus:outline-none">
                    ❌
                </button>
        
                <label for="title" class="text-gray-300 mb-2">Title</label>
                <div class="relative">
                    <input type="title" id="title" placeholder="Next.js conference" v-model="event.title"
                        class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" />
                    <span class="absolute right-3 top-3 text-gray-400">
                        📧
                    </span>
                </div>

            
                <label for="description" class="text-gray-300 mt-4 mb-2">Description</label>
                <div class="relative">
                    <textarea type="text" id="description" placeholder="A conference about the latest in Next.js development." v-model="event.description"
                        class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" />
                </div>

                <label for="date" class="text-gray-300 mt-4 mb-2">Date</label>
                <div class="relative">
                    <input type="date" id="date" placeholder="2023-10-15" v-model="event.date" class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" />
                </div>

                <label for="time" class="text-gray-300 mt-4 mb-2">Time</label>
                <div class="relative">
                    <input type="time" id="time" placeholder="10:00" v-model="event.time" class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" /> 
                </div>

                <label for="location" class="text-gray-300 mt-4 mb-2">Location</label>
                <div class="relative">
                    <input type="location" id="location" placeholder="London, United Kingdom" v-model="event.location" class="bg-gray-800 w-full rounded-lg px-4 py-2 border border-gray-700 focus:ring-2 focus:ring-violet-500 focus:outline-none transition-all" />
                </div>

            
                <button type="submit" @click="submitForm"
                    class="relative flex justify-center items-center bg-gradient-to-r from-[#673AB7] to-[#9C27B0] text-white rounded-4xl py-3 mt-6 font-semibold text-lg transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9C27B0]">
                    Create Event
                </button>

        
            </form>
</template>