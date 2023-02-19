<template>
    <div class="w-full h-full z-0">
        <l-map ref="map" v-model:zoom="zoom" :center="[-0.289656, 36.067809]">
            <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                layer-type="base"
                name="OpenStreetMap"
            ></l-tile-layer>
            <l-marker :lat-lng="[-0.289656, 36.067809]">
                <l-icon :icon-anchor="[13, 40]">
                    <NuxtImg src="/placeholder.png" class="w-10 h-10" />
                </l-icon>
            </l-marker>
        </l-map>
    </div>
</template>

<script setup lang="ts">
import 'leaflet/dist/leaflet.css'
import { LMap, LTileLayer, LIcon, LMarker } from '@vue-leaflet/vue-leaflet'

const zoom = ref<number>(16)
const iconWidth = ref<number>(25)
const iconHeight = ref<number>(40)
const iconUrl = ref<string>(`https://placekitten.com/${iconWidth.value}/${iconHeight.value}`)
</script>

<style></style>
