<template>
    <div class="bg-gradient-to-b from-[#FFB5EC] to-[#F13FC5] min-h-screen">
        <slot />
        <!-- Audio Element ที่เล่นเพลงได้ตลอดเวลา -->
        <audio ref="audio" v-if="currentSong && currentSong.src" :src="currentSong.src" autoplay loop></audio>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

// รายการเพลง
const songs = [
    { name: 'Billie Eilish - BIRDS OF A FEATHER', src: '/song/billie.mp3' },
    { name: 'Coldplay - Yellow', src: '/song/coldplay.mp3' },
];

// กำหนดสถานะเพลงที่เล่น
const audio = ref<HTMLAudioElement | null>(null);
const currentSong = ref(songs[0]); // เพลงเริ่มต้น

// ฟังก์ชันเล่นเพลง
const playSong = (songIndex: number) => {
    currentSong.value = songs[songIndex];
    if (audio.value && currentSong.value && currentSong.value.src) {
        audio.value.src = currentSong.value.src;
        audio.value.play();
    }
};

// ฟังเหตุการณ์จากหน้าอื่นๆ
onMounted(() => {
    window.addEventListener('playSong', (event: any) => {
        const songIndex = event.detail;
        playSong(songIndex);
    });

    const storedSongIndex = sessionStorage.getItem('currentSongIndex');
    if (storedSongIndex) {
        playSong(parseInt(storedSongIndex)); // เล่นเพลงที่เก็บไว้
    }
});

// เก็บสถานะเพลงเมื่อเปลี่ยนหน้า
onBeforeUnmount(() => {
    if (audio.value) {
        sessionStorage.setItem('currentSongIndex', songs.indexOf(currentSong.value).toString());
    }
});
</script>

<style scoped>
</style>
