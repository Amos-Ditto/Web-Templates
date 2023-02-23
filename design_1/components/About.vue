<script setup lang="ts">
const slides = ref<{ image: string }[]>([
    { image: '/about/2.webp' },
    { image: '/about/3.webp' },
    { image: '/about/4.webp' },
])
</script>
<template>
    <div class="w-full flex flex-col gap-y-4 py-0">
        <div class="w-full px-4 md:px-8 lg:px-20 xl:px-48 flex flex-col py-12 bg-[url('/pattern.svg')] bg-top">
            <h4 class="text-base lg:text-lg text-[#AD9263] uppercase font-bold tracking-wide">Firm overview</h4>
            <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 mt-4">
                <div class="flex flex-col items-start justify-between xl:py-8 gap-y-10">
                    <div class="w-full flex flex-col gap-y-4">
                        <h3 class="text-3xl lg:text-4xl font-semibold mt-3">Who we are</h3>
                        <div class="flex flex-col gap-y-1 w-full">
                            <p class="text-base sm:text-lg">
                                Sheth & Wathigo Advocates aspires to be the most innovative law firm by building
                                long-term relationships with clients based on reciprocity, trust and highest standards
                                of professional ethics. By adopting new models and technology for efficient delivery of
                                legal services, we strive to redefine the role that a law firm plays in emerging times,
                                in order to produce truly exceptional results for our clients.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="md:row-span-2 px-0 py-8">
                    <div class="w-full h-full flex flex-col items-center justify-center bg-[#AD9263]/20 px-2 py-2">
                        <!-- <NuxtImg src="/about/2.webp" class="w-[98%]" /> -->
                        <FeaturesCarouselAbout />
                    </div>
                </div>
                <div class="flex flex-col gap-y-4 mt-4">
                    <h3 class="text-3xl lg:text-4xl font-semibold">Our Practice Areas</h3>
                    <p class="text-base sm:text-lg">
                        At S&W we specialize in a wide range of legal services to meet the diverse needs of the clients
                    </p>
                    <p class="text-base sm:text-lg">
                        Our lawyers provide expert guidance and exceptional client service to protect and advance
                        clients' interests. Building strong relationships is our top priority.
                    </p>
                    <span class="text-[#AD9263] text-base uppercase underline underline-offset-4 mt-3">
                        learn more</span
                    >
                </div>
            </div>
        </div>
        <div class="w-full flex flex-col gap-y-3 py-10 sm:py-16 px-4 md:px-8 lg:px-20 xl:px-48 bg-zinc-200">
            <div
                class="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 md:gap-x-6 xl:gap-x-10 gap-y-4 md:gap-y-6 xl:gap-y-10"
            >
                <div class="rounded py-5 px-5 flex flex-col gap-y-2 bg-zinc-100">
                    <div class="w-full">
                        <NuxtImg src="/Icons/property-law_64.png" class="w-10 xl:w-auto h-10 xl:h-auto" />
                    </div>
                    <div class="w-full flex flex-col gap-y-2 mt-2.5 text-neutral-700">
                        <h3 class="text-xl xl:text-2xl capitalize font-semibold truncate">Landloard/Tenant Law</h3>
                        <p class="text-base">
                            This law covers all aspects of renting a property. Lawyers can help landlords create an
                            enforceable lease without ...
                        </p>
                    </div>
                </div>
                <div class="rounded py-5 px-5 flex flex-col gap-y-2 bg-zinc-100">
                    <div class="w-full">
                        <NuxtImg src="/Icons/justice.png" class="w-10 xl:w-auto h-10 xl:h-auto" />
                    </div>
                    <div class="w-full flex flex-col gap-y-2 mt-2.5 text-neutral-700">
                        <h3 class="text-xl xl:text-2xl capitalize font-semibold truncate">Civil Litigation Law</h3>
                        <p class="text-base">
                            This law covers all aspects of renting a property. Lawyers can help landlords create an
                            enforceable lease without ...
                        </p>
                    </div>
                </div>
                <div class="rounded py-5 px-5 flex flex-col gap-y-2 bg-zinc-100">
                    <div class="w-full">
                        <NuxtImg src="/Icons/conveyance.png" class="w-10 xl:w-auto h-10 xl:h-auto" />
                    </div>
                    <div class="w-full flex flex-col gap-y-2 mt-2.5 text-neutral-700">
                        <h3 class="text-xl xl:text-2xl capitalize font-semibold truncate">Conveyance & Property Law</h3>
                        <p class="text-base">
                            This law covers all aspects of renting a property. Lawyers can help landlords create an
                            enforceable lease without ...
                        </p>
                    </div>
                </div>
                <div class="rounded py-5 px-5 flex flex-col gap-y-2 bg-zinc-100">
                    <div class="w-full">
                        <NuxtImg src="/Icons/law.png" class="w-10 xl:w-auto h-10 xl:h-auto" />
                    </div>
                    <div class="w-full flex flex-col gap-y-2 mt-2.5 text-neutral-700">
                        <h3 class="text-xl xl:text-2xl capitalize font-semibold truncate">Criminal Law</h3>
                        <p class="text-base">
                            This law covers all aspects of renting a property. Lawyers can help landlords create an
                            enforceable lease without ...
                        </p>
                    </div>
                </div>
                <div class="rounded py-5 px-5 flex flex-col gap-y-2 bg-zinc-100">
                    <div class="w-full">
                        <NuxtImg src="/Icons/labour-law.png" class="w-10 xl:w-auto h-10 xl:h-auto" />
                    </div>
                    <div class="w-full flex flex-col gap-y-2 mt-2.5 text-neutral-700">
                        <h3 class="text-xl xl:text-2xl capitalize font-semibold truncate">Employment & Labor Law</h3>
                        <p class="text-base">
                            This law covers all aspects of renting a property. Lawyers can help landlords create an
                            enforceable lease without ...
                        </p>
                    </div>
                </div>
                <div class="rounded py-5 px-5 flex flex-col gap-y-2 bg-zinc-100">
                    <div class="w-full">
                        <NuxtImg src="/Icons/family.png" class="w-10 xl:w-auto h-10 xl:h-auto" />
                    </div>
                    <div class="w-full flex flex-col gap-y-2 mt-2.5 text-neutral-700">
                        <h3 class="text-xl xl:text-2xl capitalize font-semibold truncate">Family & Succession Law</h3>
                        <p class="text-base">
                            This law covers all aspects of renting a property. Lawyers can help landlords create an
                            enforceable lease without ...
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
