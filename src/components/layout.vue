<script setup lang="ts">
import { ref } from 'vue'
import {
    NButton,
    NDivider,
    NFlex,
    NIcon,
    NLayout, NLayoutHeader, NLayoutContent,
    NLayoutFooter
} from 'naive-ui';
import router from '../router/router';

const contentRef = ref<string | null>(null);

// defineProps<{ msg: string }>()

// const count = ref(0)

initial();

function initial() {
    contentRef.value = "1";
}

function handleRoutesChange(action: 0 | 1 | 2 | 3 | 4) {
    switch (action) {
        case 0:
            router.push({ name: "landing" });
            break;
        case 1:
            router.push({ name: "project" });
            break;
        case 2:
            router.push({ name: "about" });
            break;
        case 3:
            router.push({ name: "competition" })
            break;
        case 4:
            router.push({ name: "activity" })
            break;
        default:
            break;
    }
}
</script>

<template>
    <div>
        <n-layout>
            <n-layout-header style="max-width: 960px; margin: 0 auto; padding: 24px 0">
                <n-flex justify="end" size="large">
                    <n-button text @click="handleRoutesChange(0)">Home</n-button>
                    <n-button text @click="handleRoutesChange(1)">Project</n-button>
                    <n-button text @click="handleRoutesChange(3)">Competition</n-button>
                    <n-button text @click="handleRoutesChange(4)">Activity</n-button>
                    <n-button text @click="handleRoutesChange(2)">About</n-button>
                </n-flex>
            </n-layout-header>
            <n-layout-content style="min-height: calc(100vh - 62px);background-color: none;">
                <router-view />
            </n-layout-content>
            <n-layout-footer inverted>
                <n-flex style="max-width: 960px; margin: 0 auto; padding: 24px" :align="'center'" :justify="'end'">
                    <n-flex :align="'center'">
                        <n-icon :size="20">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32">
                                <path
                                    d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"
                                    fill="currentColor"></path>
                            </svg>
                        </n-icon>
                        <div>{{ "sampan090611@gmail.com" }}</div>
                    </n-flex>
                    <n-divider vertical />
                    <n-flex :align="'center'">
                        <n-icon :size="20">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 448 512">
                                <path
                                    d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8c0-5.4.2-33 .2-55.3c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6c-14.1 0-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 13.9.2 36.5.2 40.6c0 4.3-3 9.5-11.5 8c-66-22.1-112.2-84.9-112.2-158.3c0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7c-.2-1.5 1.1-2.8 3-3.2c1.9-.2 3.7.6 3.9 1.9c.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4c-2.2.2-3.7-.9-3.7-2.4c0-1.3 1.5-2.4 3.5-2.4c1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3c-1.9-.4-3.2-1.9-2.8-3.2c.4-1.3 2.4-1.9 4.1-1.5c2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6c-1.5-1.3-1.9-3.2-.9-4.1c.9-1.1 2.8-.9 4.3.6c1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3c1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6c-1.1-1.3-1.3-2.8-.4-3.5c.9-.9 2.4-.4 3.5.6c1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4c-1.3-.6-1.9-1.7-1.5-2.6c.4-.6 1.5-.9 2.8-.4c1.3.7 1.9 1.8 1.5 2.6z"
                                    fill="currentColor"></path>
                            </svg>
                        </n-icon>
                        <div>{{ "firepool@163.com" }}</div>
                    </n-flex>
                </n-flex>
            </n-layout-footer>
        </n-layout>
    </div>
</template>

<style scoped lang="less">
.light-green {
    height: 108px;
    background-color: rgba(25, 146, 4, 0.939);
}

.green {
    height: 108px;
    background-color: rgba(119, 220, 4, 0.868);
}

.yellow-green {
    height: 108px;
    background-color: rgba(135, 245, 9, 0.902);
}

.yellow {
    height: 108px;
    background-color: rgba(196, 248, 8, 0.879);
}

.n-gradient-text {
    font-size: 16px;
}
</style>