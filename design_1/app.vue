<script setup lang="ts">
useHead({
    title: 'Web Template',
    meta: [
        {
            name: 'description',
            content: 'Template for first design',
        },
    ],
    link: [
        { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
        { href: 'https://fonts.gstatic.com', rel: 'preconnect' },
        {
            href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800;900&family=Nunito:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet',
        },
    ],
})
</script>
<template>
    <main class="w-full flex flex-col z-0">
        <NuxtPage />
    </main>
</template>
