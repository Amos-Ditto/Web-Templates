<script setup lang="ts">
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet'

const url = ref<string>('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
const attribution = ref<string>(
    '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors'
)
const zoom = ref<number>(15)
const center = ref<number[]>([51.505, -0.159])
const markerLatLng = ref<number[]>([51.504, -0.159])
</script>
<template>
    <div class="w-full flex flex-col gap-y-2 px-48 py-4 mt-6 bg-[url('/pattern.svg')] bg-top">
        <div class="w-full grid grid-cols-2 gap-8 pt-4">
            <div class="flex flex-col gap-y-4">
                <div class="w-full flex flex-col gap-y-1">
                    <h4 class="text-base uppercase font-light text-[#AD9263]">Let's talk</h4>
                    <h1 class="text-4xl capitalize font-semibold mt-2">Request Consultation</h1>
                </div>

                <form class="mt-6 w-full">
                    <div class="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label for="first_name" class="block mb-2 text-base font-medium text-gray-900"
                                >First name</label
                            >
                            <input
                                type="text"
                                id="first_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                                placeholder="John"
                                required
                            />
                        </div>
                        <div>
                            <label for="last_name" class="block mb-2 text-base font-medium text-gray-900"
                                >Last name</label
                            >
                            <input
                                type="text"
                                id="last_name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                                placeholder="Doe"
                                required
                            />
                        </div>
                    </div>
                    <div class="mb-6">
                        <label for="phone" class="block mb-2 text-base font-medium text-gray-900">Phone number</label>
                        <input
                            type="tel"
                            id="phone"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                            placeholder="123-45-678"
                            pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label for="email" class="block mb-2 text-base font-medium text-gray-900">Email address</label>
                        <input
                            type="email"
                            id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                            placeholder="john.doe@company.com"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label for="subject" class="block mb-2 text-base font-medium text-gray-900">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-[#AD9263] focus:border-[#AD9263] block w-full p-2.5 outline-none transition duration-200"
                            placeholder="Subject"
                            required
                        />
                    </div>
                    <div class="mb-6">
                        <label for="message" class="block mb-2 text-base font-medium text-gray-900">Your message</label>
                        <textarea
                            id="message"
                            rows="4"
                            class="block p-2.5 w-full text-base text-gray-900 bg-gray-50 rounded-lg outline-none border border-gray-300 focus:ring-[#AD9263] focus:border-[#AD9263] transition duration-200"
                            placeholder="Write your thoughts here..."
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        class="mt-4 text-white bg-[#AD9263] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base tracking-wide uppercase w-full sm:w-auto px-10 py-3 text-center"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div class="flex flex-col">
                <div class="w-full">
                    <client-only>
                        <l-map style="height: 300px" :zoom="zoom" :center="center">
                            <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
                            <l-marker :lat-lng="markerLatLng"></l-marker>
                        </l-map>
                    </client-only>
                </div>
            </div>
        </div>
    </div>
</template>
