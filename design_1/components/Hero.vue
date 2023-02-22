<template>
    <div class="w-full flex flex-col">
        <div
            class="hero w-full flex flex-col lg:items-center justify-center h-[54vh] sm:h-[60vh] lg:h-[66vh] px-4 sm:px-8 lg:px-20 2xl:px-36 bg-cover bg-right bg-[#212121] z-0 relative"
        >
            <div
                class="w-full sm:w-[86%] md:w-[80%] lg:w-full grid grid-cols-1 lg:grid-cols-2 gap-x-4 px-2 sm:px-4 md:px-8 z-10"
            >
                <div class="col-span-2 lg:col-span-1 flex flex-col justify-center">
                    <h1
                        class="text-[#f8f8f2] font-mono text-4xl sm:text-5xl 2xl:text-6xl font-black uppercase leading-[1.18]"
                    >
                        Sheth & Wathigo advocates
                    </h1>
                    <div class="flex flex-col w-full gap-y-1 text-[#f8f8f2] mt-4">
                        <p class="text-base sm:text-lg">
                            More than 44 years Combined Experience Serving Businesses. Extensive Reasources and
                            commitment to clients
                        </p>
                    </div>
                    <div class="w-full flex mt-4">
                        <button
                            type="submit"
                            class="text-white bg-[#AD9263] hover:bg-[#AD9263]/80 focus:ring-2 outline-none focus:ring-[#AD9263] font-medium rounded-lg text-base sm:text-lg tracking-wide uppercase w-auto px-8 py-4 transition duration-200"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <!-- <div class="col-span-1 flex flex-row items-center justify-center">
                    <span class="h-full w-[1px] border-l border-neutral-600"></span>
                </div> -->
                <!-- <div class="col-span-5 flex flex-col gap-y-2 items-center text-[#f8f8f2]">
                    <div class="w-[64%] py-6 px-4 border border-neutral-600 rounded flex flex-col gap-y-3">
                        <h3 class="text-2xl tracking-wide font-semibold">We are Located At</h3>
                        <p class="text-lg text-start">
                            Sheth & Wathigo Advocates D & D House, 7th Floor West Road/Oginga Odinga Avenue Junction
                            P.O. Box 611-20100 NAKURU, KENYA.
                        </p>
                    </div>
                </div> -->
            </div>
            <div class="absolute bottom-0 right-0 z-30 pr-2 pb-2">
                <button class="flex flex-row px-2 py-2 border border-neutral-400 rounded">
                    <NuxtImg src="/location.png" class="w-6 md:w-10 h-6 md:h-10" />
                </button>
            </div>
            <div class="absolute top-0 bottom-0 right-0 left-0 z-0 bg-black/40 filter backdrop-blur-[3px]"></div>
        </div>
        <ul
            class="w-full grid grid-cols-2 sm:flex flex-row flex-wrap py-2 md:py-4 px-2 sm:px-4 md:px-8 lg:px-24 xl:px-48 bg-[#212121] gap-x-2.5 sm:gap-x-4 lg:gap-x-8 justify-between items-center"
        >
            <li class="flex flex-col gap-y-3 xl:gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        44 <span class="text-xl md:text-3xl xl:text-4xl">+</span>
                    </h4>
                </div>
                <p
                    class="text-neutral-200 font-light tracking-wide text-sm md:text-base xl:text-lg capitalize truncate"
                >
                    Business years
                </p>
            </li>
            <li class="flex flex-col gap-y-3 xl:gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        1,240 <span class="text-xl md:text-3xl xl:text-4xl">+</span>
                    </h4>
                </div>
                <p
                    class="text-neutral-200 font-light tracking-wide text-sm md:text-base xl:text-lg capitalize truncate"
                >
                    Satisfied clients
                </p>
            </li>
            <li class="flex flex-col gap-y-3 xl:gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        1000 <span class="text-xl md:text-3xl xl:text-4xl">+</span>
                    </h4>
                </div>
                <p
                    class="text-neutral-200 font-light tracking-wide text-sm md:text-base xl:text-lg capitalize truncate"
                >
                    successful cases
                </p>
            </li>
            <li class="flex flex-col gap-y-3 xl:gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        20 <span class="text-xl md:text-3xl xl:text-4xl">+</span>
                    </h4>
                </div>
                <p
                    class="text-neutral-200 font-light tracking-wide text-sm md:text-base xl:text-lg capitalize truncate"
                >
                    professional Attorneys
                </p>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.hero {
    background-image: url('~/law-bg.webp');
}
</style>
