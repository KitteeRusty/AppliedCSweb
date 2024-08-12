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
            router.push({ name: "projects" });
            break;
        case 2:
            router.push({ name: "about" });
            break;
        case 3:
            router.push({ name: "contacts" })
            break;
        default:
            break;
    }
}
</script>

<template>
    <div>
        <n-layout >
            <n-layout-header style="background-color:rgb(20, 8, 30) ; margin: 0 auto; padding: 12px 0; padding-top: px;">
                <n-flex justify="space-around">
                    <div>
                        <img style="max-width: 200px;" src="/public/logo1.png" alt="">
                    </div>
                    <n-flex justify="end" size="large">
                        <n-button style="color:#C705FF; font-weight: bold; padding: 12px;" text @click="handleRoutesChange(0)">Home</n-button>
                        <n-button style="color:#C705FF; font-weight: bold; padding: 12px;" text @click="handleRoutesChange(1)">Project</n-button>
                        <n-button style="color:#C705FF; font-weight: bold; padding: 12px;" text @click="handleRoutesChange(3)">Contact</n-button>
                        <n-button style="color:#C705FF; font-weight: bold; padding: 12px;" text @click="handleRoutesChange(2)">About</n-button>

                    </n-flex>
                </n-flex>

            </n-layout-header>
            <n-layout-content style="min-height: calc(100vh - 62px); background-color: none;">
                <router-view />
            </n-layout-content>
            <n-layout-footer inverted>
                <n-flex style="max-width: 960px; margin: 0 auto; padding: 24px 0" :align="'center'" :justify="'end'">
                    <n-flex :align="'center'">
                        <div>Contact me through: </div>
                        <n-icon :size="20">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 32 32">
                                <path
                                    d="M28 6H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-2.2 2L16 14.78L6.2 8zM4 24V8.91l11.43 7.91a1 1 0 0 0 1.14 0L28 8.91V24z"
                                    fill="currentColor"></path>
                            </svg>
                        </n-icon>
                        <div>{{ "s22360.pan@stu.scie.com.cn" }}</div>
                    </n-flex>
                    <n-divider vertical />
                    <n-flex :align="'center'">
                        <n-icon :size="20">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512">
                                <path data-name="XMLID 501 -1"
                                    d="M408.67 298.53a21 21 0 1 1 20.9-21a20.85 20.85 0 0 1-20.9 21m-102.17 0a21 21 0 1 1 20.9-21a20.84 20.84 0 0 1-20.9 21m152.09 118.86C491.1 394.08 512 359.13 512 319.51c0-71.08-68.5-129.35-154.41-129.35s-154.42 58.27-154.42 129.35s68.5 129.34 154.42 129.34c17.41 0 34.83-2.33 49.92-7c2.49-.86 3.48-1.17 4.64-1.17a16.67 16.67 0 0 1 8.13 2.34L454 462.83a11.62 11.62 0 0 0 3.48 1.17a5 5 0 0 0 4.65-4.66a14.27 14.27 0 0 0-.77-3.86c-.41-1.46-5-16-7.36-25.27a18.94 18.94 0 0 1-.33-3.47a11.4 11.4 0 0 1 5-9.35"
                                    fill="currentColor"></path>
                                <path data-name="XMLID 505 -7"
                                    d="M246.13 178.51a24.47 24.47 0 0 1 0-48.94c12.77 0 24.38 11.65 24.38 24.47c1.16 12.82-10.45 24.47-24.38 24.47m-123.06 0A24.47 24.47 0 1 1 147.45 154a24.57 24.57 0 0 1-24.38 24.47M184.6 48C82.43 48 0 116.75 0 203c0 46.61 24.38 88.56 63.85 116.53C67.34 321.84 68 327 68 329a11.38 11.38 0 0 1-.66 4.49C63.85 345.14 59.4 364 59.21 365s-1.16 3.5-1.16 4.66a5.49 5.49 0 0 0 5.8 5.83a7.15 7.15 0 0 0 3.49-1.17L108 351c3.49-2.33 5.81-2.33 9.29-2.33a16.33 16.33 0 0 1 5.81 1.16c18.57 5.83 39.47 8.16 60.37 8.16h10.45a133.24 133.24 0 0 1-5.81-38.45c0-78.08 75.47-141 168.35-141h10.45C354.1 105.1 277.48 48 184.6 48"
                                    fill="currentColor"></path>
                            </svg>
                        </n-icon>
                        <div>{{ "xinghan0611" }}</div>
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