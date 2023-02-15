<template>
    <nav class="w-full flex flex-row items-center justify-between py-3 px-28 z-30 sticky top-0 shadow-sm bg-[#f8f8f2]">
        <div class="left flex flex-row items-center">
            <NuxtImg src="/logos/black-logo.png" class="h-[4.2rem] w-auto" />
        </div>
        <div class="right flex flex-row items-center gap-x-8">
            <div class="links flex flex-row items-center gap-x-14">
                <span>About</span>
                <span>practice areas</span>
                <span>our clients</span>
                <span>team</span>
                <span>contact</span>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.links span {
    @apply text-lg tracking-wide capitalize font-medium cursor-pointer;
}
</style>
