<script setup lang="ts">

</script>

<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen">
            <div class="bg-white w-[350px] h-auto rounded-[4px]">
                <div class="max-w-full">
                    <img src="public\image\LINE_ALBUM_แม่ตุย_250214_4.jpg" alt="Cover"
                        class="w-[350px] h-[350px] rounded-t-[4px] object-cover" />
                </div>
                <!-- detail -->
                <div class="p-2">
                    <h1>ถึงพระเจ้า
                        ผมขอให้ท่านไม่ลงโทษเธอในสิ่งที่เธอทำถ้าท่านจะลงโทษให้ท่านมาลงที่ผม
                    </h1>
                </div>
                <!-- Next Button -->
                <div class="flex justify-center mb-8 gap-4">
                    <NuxtLink to="pageimg2" class="mt-20 flex justify-center">
                        <button
                            class="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                            Next
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/" class="mt-20 flex justify-center">
                        <button
                            class="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                            Back
                        </button>
                    </NuxtLink>
                </div>
            </div>

        </div>

    </div>
</template>

<style scoped></style>