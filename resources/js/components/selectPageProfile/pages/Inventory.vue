<template>
    <ContentPageProfile :is_empty="is_empty">
        <div class="flex flex-wrap gap-2.5 p-5">
            <div
                class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
            >
                <img
                    src="/images/ak.png"
                    alt=""
                    class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                />

                <img
                    src="/images/ak.png"
                    alt=""
                    class="size-full object-cover"
                />
            </div>
            <div
                class="block-black relative size-14 rounded-lg border border-StrokeGray p-1 "
            >
                <img
                    src="/images/ak.png"
                    alt=""
                    class="absolute top-1/2 left-1/2 size-full -translate-x-1/2 -translate-y-1/2 opacity-70 "
                />

                <img
                    src="/images/ak.png"
                    alt=""
                    class="size-full object-cover"
                />
            </div>
        </div>
    </ContentPageProfile>
</template>

<script>
import ContentPageProfile from '../content.vue';
export default {
    props: {
        is_empty: {
            type: Boolean,
            default: false,
        },
    },
    components: {
        ContentPageProfile,
    },
};
</script>

<style></style>
