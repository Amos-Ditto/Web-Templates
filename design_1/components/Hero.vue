<template>
    <div class="w-full flex flex-col">
        <div
            class="w-full flex flex-col items-center justify-center h-[66vh] px-28 bg-[url('/law-bg.webp')] bg-cover bg-right bg-[#212121] z-0 relative"
        >
            <div class="w-full grid grid-cols-11 gap-x-4 px-8 z-10">
                <div class="col-span-5 flex flex-col justify-center">
                    <h1 class="text-[#f8f8f2] font-mono text-6xl font-black uppercase leading-[1.18]">
                        Sheth & Wathigo advocates
                    </h1>
                    <div class="flex flex-col w-full gap-y-1 text-[#f8f8f2] mt-4">
                        <p class="text-lg">
                            More than 44 years Combined Experience Serving Businesses. Extensive Reasources and
                            commitment to clients
                        </p>
                    </div>
                    <div class="w-full flex mt-4">
                        <button
                            type="submit"
                            class="text-white bg-[#AD9263] hover:bg-[#AD9263]/80 focus:ring-2 outline-none focus:ring-[#AD9263] font-medium rounded-lg text-lg tracking-wide uppercase w-full sm:w-auto px-8 py-4 transition duration-200"
                        >
                            Contact Us
                        </button>
                    </div>
                </div>
                <div class="col-span-1 flex flex-row items-center justify-center">
                    <span class="h-full w-[1px] border-l border-neutral-600"></span>
                </div>
                <div class="col-span-5 flex flex-col gap-y-2 items-center text-[#f8f8f2]">
                    <div class="w-[64%] py-6 px-4 border border-neutral-600 rounded flex flex-col gap-y-3">
                        <h3 class="text-2xl tracking-wide font-semibold">We are Located At</h3>
                        <p class="text-lg text-start">
                            Sheth & Wathigo Advocates D & D House, 7th Floor West Road/Oginga Odinga Avenue Junction
                            P.O. Box 611-20100 NAKURU, KENYA.
                        </p>
                    </div>
                </div>
            </div>
            <div class="absolute bottom-0 right-0 z-30 pr-2 pb-2">
                <button class="flex flex-row px-2 py-2 border border-neutral-400 rounded">
                    <NuxtImg src="/location.png" />
                </button>
            </div>
            <div class="absolute top-0 bottom-0 right-0 left-0 z-0 bg-black/40 filter backdrop-blur-[3px]"></div>
        </div>
        <ul class="w-full flex flex-row py-4 px-48 bg-[#212121] gap-x-20 justify-between items-center">
            <li class="flex flex-col gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        44 <span class="text-4xl">+</span>
                    </h4>
                </div>
                <p class="text-neutral-200 font-light tracking-wide text-lg capitalize truncate">Business years</p>
            </li>
            <li class="flex flex-col gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        1,240 <span class="text-4xl">+</span>
                    </h4>
                </div>
                <p class="text-neutral-200 font-light tracking-wide text-lg capitalize truncate">Satisfied clients</p>
            </li>
            <li class="flex flex-col gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        1000 <span class="text-4xl">+</span>
                    </h4>
                </div>
                <p class="text-neutral-200 font-light tracking-wide text-lg capitalize truncate">successful cases</p>
            </li>
            <li class="flex flex-col gap-y-4 items-start py-1.5 px-4">
                <div class="flex flex-row items-center py-2 pr-4 border-b border-neutral-600 justify-start">
                    <h4
                        class="text-6xl font-semibold tracking-wide text-neutral-200 flex flex-row items-center gap-x-1"
                    >
                        20 <span class="text-4xl">+</span>
                    </h4>
                </div>
                <p class="text-neutral-200 font-light tracking-wide text-lg capitalize truncate">
                    professional Attorneys
                </p>
            </li>
        </ul>
    </div>
</template>
