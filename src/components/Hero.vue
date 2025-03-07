<script setup lang="ts">
import Button from './ui/Button.vue';
import MarketingCard from './ui/MarketingCard.vue';

</script>

<template>
    <div class="text-center flex flex-col h-100 mt-44 justify-around items-center gap-12">
        <h1 class="text-5xl font-bold">
            Manage your events and tasks with ease 
        </h1>
        <p class="w-1/2">
            Organize your schedule <span class="font-bold">effortlessly with our intuitive event management platform</span>.  
            Create, track, and collaborate on events in real-time, ensuring you never miss an  
            important moment. Stay productive and in control, whether for personal or  
            professional use.
        </p>
        <Button link="/events" text="Get started"/>
        <div class="flex justify-center gap-4">
            <MarketingCard stat="1000+" text="Events created" />
            <MarketingCard stat="500+" text="Users registered" />
            <MarketingCard stat="100+" text="Collaborations" />
            <MarketingCard stat="50+" text="Countries" />
        </div>
    </div>

</template>
