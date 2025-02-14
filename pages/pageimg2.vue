<script setup lang="ts">

</script>

<template>
    <div class="container mx-auto">
        <div class="flex justify-center items-center h-screen">
            <div class="bg-white w-[350px] h-[600px] rounded-[4px]">
                <div class="max-w-full">
                    <img src="public\image\LINE_ALBUM_แม่ตุย_250214_5.jpg" alt="Cover"
                        class="w-[350px] h-[350px] rounded-t-[4px] object-cover" />
                </div>
                <!-- detail -->
                <div class="p-2">
                    <h1>พระเจ้าใช้ไหมที่ส่งเธอมาให้ผม ผมขอหน่อมรับเธอไว้สำหรับผมเธอเป็นคนที่เก่งมากและดีกับผมมากๆและขอบคุณท่านที่ส่งเธอมา
                        
                    </h1>
                </div>
                <!-- Next Button -->
                <div class="flex justify-center gap-4">
                    <NuxtLink to="/pageimg3" class="mt-20 flex justify-center">
                        <button
                            class="px-5 py-2 bg-blue-600 text-white text-sm rounded-md hover:bg-blue-700 transition">
                            Next
                        </button>
                    </NuxtLink>
                    <NuxtLink to="/pageimg1" class="mt-20 flex justify-center">
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