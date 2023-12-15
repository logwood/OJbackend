<template>
  <div id="basicLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content class="content">
        <router-view />
      </a-layout-content>
      <a-layout-footer class="footer">
        <a href="https://yupi.icu" target="_blank"> 编程之路 </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>
<style scoped>
#basicLayout .header {
  margin-bottom: 16px;
  box-shadow: #eee 1px 1px 5px;
}
#basicLayout .content {
  background: linear-gradient(to right, #eeeeee, #383232);
  background-color: linear-gradient(to right, #dfa4a4, #eb3030);
  padding: 20px;
}
#basicLayout .footer {
  background: #b2b0b0;
  position: sticky;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
</style>
<script lang="ts">
import GlobalHeader from "@/components/GlobalHeader.vue"; // 根据实际路径导入 GlobalHeader 组件

export default {
  components: {
    GlobalHeader, // 在 components 中注册 GlobalHeader 组件
  },
  // Other component options and logic
};
</script>
