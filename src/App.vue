<script setup lang="ts">
import {
  NConfigProvider,
  NDialogProvider,
  NMessageProvider
} from 'naive-ui';
import store from './store/store';
import hljs from 'highlight.js/lib/core'
import cpp from 'highlight.js/lib/languages/cpp'

hljs.registerLanguage('cpp', cpp)

store.state.display.isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(navigator.userAgent.toLowerCase());

const themeOverrides = {
  common: {
    "primaryColor": "#4350FFFF",
    "primaryColorHover": "#747EFEFF",
    "primaryColorPressed": "#182084FF",
    "primaryColorSuppl": "#3B44BEFF",
  },
};
</script>

<template>
  <n-config-provider :theme-overrides="themeOverrides" :hljs="hljs">
    <n-dialog-provider>
      <n-message-provider>
        <div class="app">
          <router-view />
        </div>
      </n-message-provider>
    </n-dialog-provider>
  </n-config-provider>
</template>

<style lang="less">
@import "./style.css";

#app {
  margin: 0 auto;
  padding: 0;
}
</style>