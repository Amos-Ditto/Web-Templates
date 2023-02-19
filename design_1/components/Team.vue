<template>
    <div class="w-full flex flex-col gap-y-4 py-8">
        <div class="w-full px-4 md:px-8 lg:px-20 xl:px-48 flex flex-col gap-y-4">
            <h4 class="text-base lg:text-lg text-[#AD9263] uppercase font-bold tracking-wide">
                Firm Attorneys & Partners
            </h4>
            <div class="w-[65%] flex flex-col gap-y-2 mt-4">
                <h2 class="text-3xl lg:text-4xl font-black">Meet our Team</h2>
                <p class="text-base text-neutral-700">
                    Our lawyers provide expert guidance and exceptional client service to protect and advance clients'
                    interests. Building strong relationships is our top priority.
                </p>
            </div>
            <div class="w-full flex items-center justify-between">
                <div class="flex flex-row items-center">
                    <span class="text-[#AD9263] text-base uppercase underline underline-offset-4 mt-3">
                        learn more</span
                    >
                </div>
                <div class="flex flex-row items-center gap-x-4">
                    <div class="flex flex-col items-center">
                        <NuxtImg src="/arrow-mobile.svg" class="rotate-180 opacity-60 cursor-pointer" />
                    </div>
                    <div class="flex flex-row items-center">
                        <span class="flex flex-row items-center gap-x-2 text-sm font-mono tracking-wide">01 / 02</span>
                    </div>
                    <div class="flex flex-col items-center">
                        <NuxtImg src="/arrow-mobile.svg" class="cursor-pointer opacity-95" />
                    </div>
                </div>
            </div>
        </div>
        <div class="w-full px-4 md:px-8 lg:px-20 xl:px-48 py-8 flex flex-col gap-y-5 bg-gray-100">
            <div class="w-full grid grid-cols-3 gap-x-3 lg:gap-x-6">
                <div class="flex flex-col gap-y-4 py-2 px-3 bg-white rounded-md">
                    <div class="w-full flex items-center justify-center">
                        <NuxtImg src="/team/1.png" class="w-[96%] bg-fit" />
                    </div>
                    <div class="w-full flex flex-col gap-y-3 px-2">
                        <div class="title w-full flex flex-col gap-y-1">
                            <h3 class="name text-xl xl:text-2xl font-semibold capitalize truncate">
                                Daniel Gatumu Ndeke
                            </h3>
                            <h4 class="text-lg text-[#AD9263] uppercase">Managing Partner</h4>
                        </div>
                        <div class="w-full flex flex-col gap-y-2">
                            <p class="line-clamp-2 text-base text-neutral-700">
                                D.N. Gatumu is the Managing Partner of the firm and the advocate in charge of
                            </p>
                            <span class="flex flex-row items-center gap-x-1.5 text-[#AD9263]">
                                View more
                                <div class="w-5 h-5">
                                    <IconsArrowRight />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 py-2 px-3 bg-white rounded-md">
                    <div class="w-full flex items-center justify-center">
                        <NuxtImg src="/team/2.png" class="w-[96%] bg-fit" />
                    </div>
                    <div class="w-full flex flex-col gap-y-3 px-2">
                        <div class="title w-full flex flex-col gap-y-1">
                            <h3 class="name text-xl xl:text-2xl font-semibold capitalize truncate">
                                Kisilah Daniel Gor
                            </h3>
                            <h4 class="text-lg text-[#AD9263] uppercase">Partner</h4>
                        </div>
                        <div class="w-full flex flex-col gap-y-2">
                            <p class="line-clamp-2 text-base text-neutral-700">
                                Kisilah D.G is aprtner in the firm and the advocate in charge of
                            </p>
                            <span class="flex flex-row items-center gap-x-1.5 text-[#AD9263]">
                                View more
                                <div class="w-5 h-5">
                                    <IconsArrowRight />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 py-2 px-3 bg-white rounded-md">
                    <div class="w-full flex items-center justify-center">
                        <NuxtImg src="/team/3.png" class="w-[96%] bg-fit" />
                    </div>
                    <div class="w-full flex flex-col gap-y-3 px-2">
                        <div class="title w-full flex flex-col gap-y-1">
                            <h3 class="name text-xl xl:text-2xl font-semibold capitalize truncate">Betty Mwangi</h3>
                            <h4 class="text-lg text-[#AD9263] uppercase">Partner</h4>
                        </div>
                        <div class="w-full flex flex-col gap-y-2">
                            <p class="line-clamp-2 text-base text-neutral-700">
                                Betty Mwangi is an associate at S&W Advocates
                            </p>
                            <span class="flex flex-row items-center gap-x-1.5 text-[#AD9263]">
                                View more
                                <div class="w-5 h-5">
                                    <IconsArrowRight />
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex flex-row items-center justify-center gap-x-2 pt-4">
                <button class="w-[4rem] h-[2px] bg-[#AD9263]"></button>
                <button class="w-[4rem] h-[2px] bg-gray-300"></button>
            </div>
        </div>
    </div>
</template>
