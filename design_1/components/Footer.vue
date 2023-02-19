<script setup>
import { Collapse } from 'vue-collapsed'
// About drop down
const isAbout = ref(false)
function handleAboutCollapse() {
    isAbout.value = !isAbout.value
}
// Links drop down
const isLinks = ref(false)
function handleLinksCollapse() {
    isLinks.value = !isLinks.value
}
// Practice drop down
const isAreas = ref(false)
function handleAreasCollapse() {
    isAreas.value = !isAreas.value
}
// Contacts drop down
const isContact = ref(false)
function handleContactCollapse() {
    isContact.value = !isContact.value
}
</script>
<template>
    <footer class="w-full flex flex-col mt-12">
        <div class="bg-[#dd9933] h-[4px] w-full"></div>
        <div class="w-full flex flex-col gap-y-4 px-2 lg:px-12 xl:px-48 pt-8 lg:pt-12 pb-4 app-dark">
            <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-14 pb-4 lg:pb-12">
                <div
                    class="flex flex-col gap-y-3 text-white border-b lg:border-none border-[#725222] py-1 px-2 lg:px-0 lg:py-0"
                >
                    <div class="w-full flex flex-row justify-between items-center py-2" @click="handleAboutCollapse">
                        <h4 class="text-xl lg:text-2xl tracking-tight font-semibold">About us</h4>
                        <div
                            class="w-4 h-4 text-white transition-transform duration-200 lg:hidden"
                            :class="isAbout && 'rotate-180'"
                        >
                            <IconsChevronDown />
                        </div>
                    </div>
                    <div class="hidden lg:block w-full">
                        <p class="text-neutral-400 text-base line-clamp-5">
                            Sheth & Wathigo Advocates aspires to be the most innovative law firm by building long-term
                            relationships with clients based on reciprocity, trust and highest standards of professional
                            ethics.
                        </p>
                    </div>
                    <!-- Collapse -->
                    <Collapse :when="isAbout" class="v-collapse">
                        <div class="lg:hidden block w-full pb-3">
                            <p class="text-neutral-400 text-sm line-clamp-5">
                                Sheth & Wathigo Advocates aspires to be the most innovative law firm by building
                                long-term relationships with clients based on reciprocity, trust and highest standards
                                of professional ethics.
                            </p>
                        </div>
                    </Collapse>
                </div>
                <div
                    class="flex flex-col gap-y-3 text-white border-b lg:border-none border-[#725222] py-1 px-2 lg:px-0 lg:py-0"
                >
                    <div class="w-full flex flex-row justify-between items-center py-2" @click="handleLinksCollapse">
                        <h4 class="text-xl lg:text-2xl tracking-tight font-semibold">Useful links</h4>
                        <div
                            class="w-4 h-4 text-white transition-transform duration-200 lg:hidden"
                            :class="isLinks && 'rotate-180'"
                        >
                            <IconsChevronDown />
                        </div>
                    </div>
                    <ul class="useful-links w-full flex-col gap-x-1 hidden lg:flex">
                        <li><span>Home</span></li>
                        <li><span>features</span></li>
                        <li><span>About Us</span></li>
                        <li><span>contact us</span></li>
                    </ul>
                    <Collapse :when="isLinks" class="v-collapse">
                        <ul class="useful-links w-full flex-col gap-x-1 flex lg:hidden">
                            <li><span>Home</span></li>
                            <li><span>features</span></li>
                            <li><span>About Us</span></li>
                            <li><span>contact us</span></li>
                        </ul>
                    </Collapse>
                </div>
                <div
                    class="flex flex-col gap-y-3 text-white border-b lg:border-none border-[#725222] py-1 px-2 lg:px-0 lg:py-0"
                >
                    <div class="w-full flex flex-row justify-between items-center py-2" @click="handleAreasCollapse">
                        <h4 class="text-xl lg:text-2xl tracking-tight font-semibold capitalize">practice areas</h4>
                        <div
                            class="w-4 h-4 text-white transition-transform duration-200 lg:hidden"
                            :class="isAreas && 'rotate-180'"
                        >
                            <IconsChevronDown />
                        </div>
                    </div>
                    <ul class="w-full flex-col gap-x-1 hidden lg:flex">
                        <li>Civil Litigation</li>
                        <li>Family & Succession Law</li>
                        <li>Criminal Law</li>
                        <li>Conveyance & Property Law</li>
                        <li>Personal Injury</li>
                        <li>Tenant/Landlord Law</li>
                        <li>Employment & Labor Law</li>
                    </ul>
                    <Collapse :when="isAreas" class="v-collapse">
                        <ul class="w-full flex-col gap-x-1 flex lg:hidden pb-2">
                            <li>Civil Litigation</li>
                            <li>Family & Succession Law</li>
                            <li>Criminal Law</li>
                            <li>Conveyance & Property Law</li>
                            <li>Personal Injury</li>
                            <li>Tenant/Landlord Law</li>
                            <li>Employment & Labor Law</li>
                        </ul>
                    </Collapse>
                </div>
                <div class="flex flex-col gap-y-3 text-white py-1 px-2 lg:px-0 lg:py-0">
                    <div class="w-full flex flex-row justify-between items-center py-2" @click="handleContactCollapse">
                        <h4 class="text-xl lg:text-2xl tracking-tight font-semibold capitalize">Contact us</h4>
                        <div
                            class="w-4 h-4 text-white transition-transform duration-200 lg:hidden"
                            :class="isContact && 'rotate-180'"
                        >
                            <IconsChevronDown />
                        </div>
                    </div>
                    <div class="w-full hidden lg:flex flex-col gap-y-3">
                        <p class="text-neutral-400 text-base line-clamp-5">
                            Sheth & Wathigo Advocates D & D House, 7th Floor West Road/Oginga Odinga Avenue Junction
                            P.O. Box 611-20100 NAKURU, KENYA. Phone: 051 221 3085, 051 221 1701, 0710 273 232 (call &
                            sms) 0797 736 500(call)
                        </p>
                        <div class="w-full flex flex-col gap-y-3">
                            <div class="flex flex-row gap-x-2 items-center">
                                <div class="w-5 h-5 text-[#dd9933] opacity-70">
                                    <IconsPhone />
                                </div>
                                <span class="text-neutral-400 text-lg">0710 273 232</span>
                            </div>
                            <div class="flex flex-row gap-x-2 items-center">
                                <div class="w-5 h-5 text-[#dd9933] opacity-70">
                                    <IconsMail />
                                </div>
                                <span class="text-neutral-400 text-base truncate"
                                    >info@shethandwathigoadvocates.co.ke</span
                                >
                            </div>
                            <div class="flex flex-row gap-x-2 items-center">
                                <div class="w-5 h-5 text-[#dd9933] opacity-70">
                                    <IconsCalendar />
                                </div>
                                <span class="text-neutral-400 text-base truncate">Mon - Fri</span>
                                <span class="text-neutral-400 text-base">8am - 5pm</span>
                            </div>
                        </div>
                    </div>
                    <Collapse :when="isContact" class="v-collapse">
                        <div class="w-full flex lg:hidden flex-col gap-y-3 pb-2">
                            <p class="text-neutral-400 text-sm line-clamp-5">
                                Sheth & Wathigo Advocates D & D House, 7th Floor West Road/Oginga Odinga Avenue Junction
                                P.O. Box 611-20100 NAKURU, KENYA. Phone: 051 221 3085, 051 221 1701, 0710 273 232 (call
                                & sms) 0797 736 500(call)
                            </p>
                            <div class="w-full flex flex-col gap-y-3">
                                <div class="flex flex-row gap-x-2 items-center">
                                    <div class="w-5 h-5 text-[#dd9933] opacity-70">
                                        <IconsPhone />
                                    </div>
                                    <span class="text-neutral-400 text-base">0710 273 232</span>
                                </div>
                                <div class="flex flex-row gap-x-2 items-center">
                                    <div class="w-5 h-5 text-[#dd9933] opacity-70">
                                        <IconsMail />
                                    </div>
                                    <span class="text-neutral-400 text-sm truncate"
                                        >info@shethandwathigoadvocates.co.ke</span
                                    >
                                </div>
                                <div class="flex flex-row gap-x-2 items-center">
                                    <div class="w-5 h-5 text-[#dd9933] opacity-70">
                                        <IconsCalendar />
                                    </div>
                                    <span class="text-neutral-400 text-sm truncate">Mon - Fri</span>
                                    <span class="text-neutral-400 text-sm">8am - 5pm</span>
                                </div>
                            </div>
                        </div>
                    </Collapse>
                </div>
            </div>
            <div class="border-t border-[#48361a] flex justify-center pt-4 pb-3 items-center w-full">
                <small class="text-sm md:text-base text-neutral-500 text-center"
                    >S&W Advocates © 2023. All Rights Reserved.</small
                >
            </div>
        </div>
    </footer>
</template>

<style scoped>
.app-dark {
    background-color: rgba(16, 16, 16, 255);
}
ul li {
    @apply py-1.5 capitalize text-sm lg:text-base text-neutral-400 tracking-wide flex flex-row items-start;
}
.useful-links li span {
    @apply pr-3 cursor-pointer;
    background-image: linear-gradient(#dd9933, #dd9933);
    background-position: 0% 100%;
    background-repeat: no-repeat;
    background-size: 0% 0px;
    transition: background-size 0.2s, padding 0.2s;
}
.useful-links li span:hover {
    background-size: 100% 1px;
}
.v-collapse {
    transition: height 300ms cubic-bezier(0.33, 1, 0.68, 1);
}
</style>
