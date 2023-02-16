<template>
    <nav class="w-full flex flex-row items-center justify-between py-3 px-28 z-30 sticky top-0 shadow-sm bg-[#f8f8f2]">
        <div class="left flex flex-row items-center">
            <NuxtImg src="/logos/black-logo.png" class="h-[4.2rem] w-auto" />
        </div>
        <div class="right flex flex-row items-center gap-x-8">
            <div class="links flex flex-row items-center gap-x-8">
                <span>About</span>
                <span>practice areas</span>
                <span>our clients</span>
                <span>team</span>
                <span>contact</span>
            </div>
        </div>
        <div class="flex flex-row items-center">
            <button
                class="px-4 py-2 rounded-3xl border border-blue-500 text-blue-500 text-lg font-semibold flex flex-row items-center gap-x-2"
            >
                <div class="w-5 h-5">
                    <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        ></path>
                    </svg>
                </div>
                <span>+254 794 818111</span>
            </button>
        </div>
    </nav>
</template>

<style scoped>
.links span {
    @apply text-base tracking-wide uppercase font-medium cursor-pointer;
}
</style>
