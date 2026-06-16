<template>
    <MainLayout>
        <div class="">
            <h1 class="page-section text-center text-[19px] font-bold text-white uppercase">
                {{ $t('nav.rating') }}
            </h1>
            <div class="">
                <iframe
                    ref="iframeRef"
                    class=""
                    style="height: 0; overflow: hidden;"
                    frameborder="0"
                    scrolling="no"
                    sandbox="allow-scripts allow-same-origin allow-popups"
                />
            </div>
        </div>
    </MainLayout>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';
import MainLayout from '@/layouts/main.vue';

const iframeRef = ref<HTMLIFrameElement | null>(null);

const RANKEVAL_SRC = 'https://cdn.rankeval.gg/integration/latest/rankeval-widget.js';
const RANKEVAL_KEY = 'a748debd-fc51-4057-8095-4fd4af19f398';

onMounted(() => {
    gsap.fromTo(
        '.page-section',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: 'power2.out' },
    );

    const iframe = iframeRef.value;
    if (!iframe) return;

    const doc = iframe.contentDocument || iframe.contentWindow?.document;
    if (!doc) return;

    doc.open();
    doc.write(`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body { background: transparent; }
  /* RankEval-виджет рендерится ВНУТРИ этого iframe, поэтому стили из app.css сюда не доходят.
     Правило для .v-container должно жить здесь — в документе самого iframe. */
</style>
</head>
<body>
<div id="rankeval-widget"></div>
<script src="${RANKEVAL_SRC}" data-target="${RANKEVAL_KEY}" async><\/script>
</body>
</html>`);
    doc.close();

    // Auto-resize iframe to fit content
    const resize = () => {
        if (!iframe.contentDocument?.body) return;
        const h = iframe.contentDocument.body.scrollHeight;
        if (h > 0) {
            iframe.style.height = h + 'px';
        }
    };

    iframe.addEventListener('load', resize);
    // Poll briefly after script may have rendered
    const timer = setInterval(() => {
        resize();
    }, 300);
    setTimeout(() => clearInterval(timer), 8000);
});
</script>
