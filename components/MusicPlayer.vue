<script setup lang="ts">
import { ref } from 'vue';

const songs = ref([
    { name: 'Billie Eilish - BIRDS OF A FEATHER', src: '/song/billie.mp3', img: '/image/billie.jpg' },
    { name: 'Coldplay - Yellow', src: '/song/coldplay.mp3', img: '/image/coldplay.jpg' },
]);

const audio = ref<HTMLAudioElement | null>(null);
const currentSongIndex = ref(0);

const playSong = (index: number) => {
    if (!audio.value) return;
    if (currentSongIndex.value === index && !audio.value.paused) {
        audio.value.pause();
    } else {
        currentSongIndex.value = index;
        audio.value.src = songs.value[ index ].src;
        audio.value.play();
    }
};

const nextSong = () => {
    currentSongIndex.value = (currentSongIndex.value + 1) % songs.value.length;
    playSong(currentSongIndex.value);
};
</script>

<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen p-5">
            <div class="bg-white w-[450px] p-5 rounded-lg shadow-lg">
                <!-- Title -->
                <h1 class="text-center text-xl font-semibold mb-4">Select a song</h1>

                <!-- Music List -->
                <div class="space-y-3">
                    <div v-for="(song, index) in songs" :key="song.src"
                        class="flex items-center bg-gray-200 rounded-lg p-3">
                        <!-- Image -->
                        <img :src="song.img" alt="Cover" class="w-[50px] h-[50px] rounded-md object-cover mr-4" />

                        <!-- Song Info -->
                        <div class="flex-1">
                            <h2 class="text-sm font-medium">{{ song.name }}</h2>
                        </div>

                        <!-- Play Button -->
                        <button
                            class="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 transition"
                            @click="playSong(index)">
                            {{ currentSongIndex === index && audio?.playing ? 'Pause' : 'Play' }}
                        </button>
                    </div>
                </div>

                <!-- Next Button -->
                <NuxtLink to="pageimg1" class="mt-4 flex justify-center">
                    <button class="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                        Next ▶
                    </button>
                </NuxtLink>

                <!-- Audio Element -->
                <audio ref="audio"></audio>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
