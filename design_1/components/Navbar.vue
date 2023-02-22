<script setup lang="ts">
const showmenu = ref<boolean>(false)

const closeMenu = (): void => {
    setTimeout(() => {
        showmenu.value = false
    }, 200)
}
</script>
<template>
    <nav class="w-full z-50 sticky top-0">
        <div
            class="w-full flex flex-row items-center justify-between py-2 sm:py-3 px-4 sm:px-8 xl:px-16 2xl:px-28 z-30 shadow bg-[#f8f8f2]"
        >
            <div class="left flex flex-row items-center z-10">
                <NuxtImg src="/logos/black-logo.png" class="h-[3.8rem] xl:h-[4.2rem] w-auto hidden sm:block" />
                <NuxtImg src="/logos/black-logo-mobile.png" class="h-[3.8rem] xl:h-[4.2rem] w-auto block sm:hidden" />
            </div>
            <div class="right flex flex-row items-center gap-x-8 relative">
                <div class="links hidden lg:flex flex-row items-center gap-x-6 xl:gap-x-8">
                    <span class="hover:text-[#AD9263] transition-colors">About</span>
                    <span class="hover:text-[#AD9263] transition-colors">practice areas</span>
                    <span class="hover:text-[#AD9263] transition-colors">our clients</span>
                    <span class="hover:text-[#AD9263] transition-colors">team</span>
                    <span class="hover:text-[#AD9263] transition-colors">contact Us</span>
                </div>
            </div>
            <div class="flex flex-row items-center gap-x-8 z-10">
                <button
                    class="px-4 py-2 rounded-sm border border-[#AD9263] text-base xl:text-lg font-medium hidden lg:flex flex-row items-center gap-x-2"
                >
                    <div class="w-4 xl:w-5 h-4 xl:h-5">
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
                    <span class="tracking-wide">+254 794 818111</span>
                </button>
                <div class="flex lg:hidden flex-row items-center relative">
                    <button
                        @click="() => (showmenu = !showmenu)"
                        class="text-neutral-700 border border-transparent focus:border-neutral-300 rounded transition duration-200"
                    >
                        <Transition mode="out-in">
                            <div v-if="showmenu" class="w-10 h-10">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                                    ></path>
                                </svg>
                            </div>
                            <div v-else class="w-10 h-10">
                                <svg
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    aria-hidden="true"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        fill-rule="evenodd"
                                        d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z"
                                    ></path>
                                </svg>
                            </div>
                        </Transition>
                    </button>
                </div>
            </div>
        </div>
        <Transition name="drop-down">
            <div
                v-if="showmenu"
                class="mobile-drop-down -z-10 absolute left-0 right-0 top-full translate-y-[0.2px] min-h-[8rem] bg-[#f8f8f2] shadow-lg px-3.5 py-3.5 lg:hidden flex flex-col gap-y-2"
            >
                <h1 class="text-xl md:text-2xl tracking-wide font-medium">Sheth & Wathigo Advocates.</h1>
                <ul class="w-[90%] md:w-3/4 flex flex-col gap-y-1 px-0 py-2.5">
                    <li
                        @click="() => closeMenu()"
                        class="w-full py-2.5 px-2.5 flex flex-row items-center justify-between hover:bg-[#AD9263]/20 rounded-md transition duration-200 cursor-pointer"
                    >
                        <span class="text-base md:text-lg">About</span>
                    </li>
                    <li
                        @click="() => closeMenu()"
                        class="w-full py-2.5 px-2.5 flex flex-row items-center justify-between hover:bg-[#AD9263]/20 rounded-md transition duration-200 cursor-pointer"
                    >
                        <span class="text-base md:text-lg capitalize">practice areas</span>
                    </li>
                    <li
                        @click="() => closeMenu()"
                        class="w-full py-2.5 px-2.5 flex flex-row items-center justify-between hover:bg-[#AD9263]/20 rounded-md transition duration-200 cursor-pointer"
                    >
                        <span class="text-base md:text-lg capitalize">our clients</span>
                    </li>
                    <li
                        @click="() => closeMenu()"
                        class="w-full py-2.5 px-2.5 flex flex-row items-center justify-between hover:bg-[#AD9263]/20 rounded-md transition duration-200 cursor-pointer"
                    >
                        <span class="text-base md:text-lg capitalize">team</span>
                    </li>
                    <li
                        @click="() => closeMenu()"
                        class="w-full py-2.5 px-2.5 flex flex-row items-center justify-between hover:bg-[#AD9263]/20 rounded-md transition duration-200 cursor-pointer"
                    >
                        <span class="text-base md:text-lg capitalize">contact Us</span>
                    </li>
                </ul>
                <div class="flex flex-row mt-2">
                    <button
                        class="px-6 py-2 rounded-sm border border-[#AD9263] text-base xl:text-lg font-medium flex flex-row items-center gap-x-2"
                    >
                        <div class="w-4 xl:w-5 h-4 xl:h-5">
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
                        <span class="tracking-wide">+254 794 818111</span>
                    </button>
                </div>
            </div>
        </Transition>
        <div
            v-if="showmenu"
            @click="() => (showmenu = !showmenu)"
            class="fixed -z-20 right-0 left-0 bottom-0 top-0 bg-[#0000]/10 lg:hidden"
        ></div>
    </nav>
</template>

<style scoped>
.links span {
    @apply text-base xl:tracking-wide uppercase font-medium cursor-pointer;
}

.drop-down-enter-from,
.drop-down-leave-to {
    @apply -translate-y-[20%] opacity-0;
}
.drop-down-enter-active,
.drop-down-leave-active {
    @apply transition duration-300;
}
</style>
