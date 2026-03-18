<template>
    <ContentPageProfile :is_empty="is_empty">
        <div class="flex gap-3.5 gap-y-14 p-5 pt-9 flex-wrap">
   
       
            <div
                class="block-black relative h-[150px] w-[130px] rounded-xl border border-StrokeGray "
            >
               <img
                    src="/images/ak.png "
                    class="absolute top-1/2 left-1/2 z-10 h-16 w-max -translate-1/2"
                    alt=""
                />
                <img
                    src="/images/ak.png "
                    class="absolute top-1/2 left-1/2 h-16 w-max -translate-1/2 "
                    alt=""
                />

                <div
                    class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-5 py-3.5 text-xs font-bold text-white uppercase "
                >
                    Elitepack

                </div>
                <div
                    class="absolute bottom-[-22px] left-1/2 z-10 -translate-x-1/2 rounded-lg bg-PaleOrange px-5 py-3.5 text-sm font-bold text-Orange uppercase"
                >
                    x3
                </div>
            </div>
            <div
                class="block-black relative h-[150px] w-[130px] rounded-xl border border-StrokeGray "
            >
               <img
                    src="/images/subscriptions/elete-pack.png"
                    class="absolute top-1/2 left-1/2 z-10 h-16 w-max -translate-1/2"
                    alt=""
                />
                <img
                    src="/images/subscriptions/elete-pack.png"
                    class="absolute top-1/2 left-1/2 h-16 w-max -translate-1/2 "
                    alt=""
                />

                <div
                    class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg bg-PaleOrange px-5 py-3.5 text-xs font-bold text-Orange uppercase"
                >
                    Elitepack

                </div>
                <div
                    class="absolute bottom-[-22px] left-1/2 z-10 -translate-x-1/2 rounded-lg bg-PaleOrange px-5 py-3.5 text-sm font-bold text-Orange uppercase"
                >
                    x3
                </div>
            </div>
            <div
                class="block-black relative h-[150px] w-[130px] rounded-xl border border-StrokeGray "
            >
               <img
                    src="/images/subscriptions/elete-pack.png"
                    class="absolute top-1/2 left-1/2 z-10 h-16 w-max -translate-1/2"
                    alt=""
                />
                <img
                    src="/images/subscriptions/elete-pack.png"
                    class="absolute top-1/2 left-1/2 h-16 w-max -translate-1/2 "
                    alt=""
                />

                <div
                    class="absolute -top-[22px] left-1/2 -translate-x-1/2 rounded-lg bg-PaleOrange px-5 py-3.5 text-xs font-bold text-Orange uppercase"
                >
                    Elitepack

                </div>
                <div
                    class="absolute bottom-[-22px] left-1/2 z-10 -translate-x-1/2 rounded-lg border border-StrokeGray bg-[#0E1012] px-5 py-3.5 text-xs font-bold text-white uppercase "
                >
                    x3
                </div>
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
