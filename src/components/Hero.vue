<script setup lang="ts">
import Button from './ui/Button.vue';

</script>

<template>
    <div class="text-center h-100 flex flex-col justify-center items-center">
        <h1 class="text-6xl font-bold">
            Manage your events and tasks with ease 
        </h1>
        <p class="w-1/2 mt-4">
            Organize your schedule <span class="font-bold">effortlessly with our intuitive event management platform</span>.  
            Create, track, and collaborate on events in real-time, ensuring you never miss an  
            important moment. Stay productive and in control, whether for personal or  
            professional use.
        </p>
        <Button link="/events" text="Get started"/>
            
    </div>
</template>
