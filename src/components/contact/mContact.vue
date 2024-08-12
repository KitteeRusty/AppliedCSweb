<script setup lang="ts">
import { NImage, NGrid, NGi } from 'naive-ui';
</script>
<template>
    <div style="background-image: linear-gradient(to top, #f65aca 0%, #a6c1ee 100%); padding-bottom: 200px;">
        <div class="heading" style="padding-bottom: 50px;">Join Us</div>
        <div
            style="padding-left: 100px; padding-right: 100px; display: flex; justify-content: center; text-align: center;">
            <n-grid :cols="1" x-gap="30" style="align-items: baseline;">
                <n-gi style="max-width: 300;">
                    <div class="subheading">As a student...</div>
                    <div><b>Official Wechat Group</b></div>
                    <n-image width="300" src="/qr.png"></n-image>
                </n-gi>
                <n-gi style="max-width: 300;">
                    <div class="subheading">As a lecturer...</div>
                    <div>If you want to participate in the ECA by giving a lecture that share your knowledge on the
                        topic, you're welcome to
                        contact the leader through the Wechat QR code below. The Email address is also given at the
                        bottom of the page.
                    </div>
                    <n-image width="300" src="/qr2.png"></n-image>
                </n-gi>
            </n-grid>
        </div>
    </div>
</template>
<style>
.heading {
    text-align: center;
    font-size: 32px;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    color: firebrick;
    border-top: 1px solid 50%;
}

p {
    color: darkviolet;
    max-width: 1000px;
    text-align: center !important;
    margin: 0 auto;

}

.card {
    border-radius: 12px;
    padding: 24px;
    cursor: pointer;
    transition: all 0.2s;
    box-shadow: var(--boxShadow-light);

    &:hover {
        box-shadow: var(--boxShadow-regular)
    }
}

.timeline-item {
    cursor: pointer;
}

.subheading {
    text-align: left;
    font-weight: bold;
    font-size: 18px;
}

.description {
    text-align: left;
    font-size: 14px;
}


x {
    font-weight: bold;
}


.container {
    max-width: 800px;
    padding: 20px;
    border-radius: 8px;
    border-color: bisque;
}
</style>