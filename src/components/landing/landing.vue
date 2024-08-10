<script setup lang="ts">
import { ref } from 'vue'
import {
  NAvatar,
  NFlex,
  NGrid, NGi,
  NLayout, NLayoutHeader, NLayoutContent, NLayoutSider,
  NSplit,
  NText,
  NTimeline,
  NTimelineItem,
  NGradientText, NEllipsis, NDivider, NCarousel
} from 'naive-ui';
import router from '../../router/router';

const contentRef = ref<string | null>(null);

// defineProps<{ msg: string }>()

// const count = ref(0)

initial();

function initial() {
  contentRef.value = "1";
}
</script>

<template>
    <div>hello</div>
</template>

<style>

</style>