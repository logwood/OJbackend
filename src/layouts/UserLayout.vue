<template>
  <div id="userLayout">
    <a-layout style="min-height: 100vh">
      <a-layout-header class="header">
        <a-space>
          <img src="../assets/logo.png" class="logo" width="64" height="64" />
          <div>wangsangOJ</div>
        </a-space>
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
#userLayout .header {
  margin-top: 16px;
}
#userLayout .content {
  margin-bottom: 16px;
  padding: 20px;
}
#userLayout .logo {
  width: 64px;
  height: 64px;
}
#userLayout .footer {
  background: #efefee;
  position: sticky;
  padding: 16px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
}
#userLayout {
  text-align: center;
  background: url("https://gw.alipayobjects.com/zos/rmsportal/TVYTbAXWheQpRcWDaDMu.svg")
    0% 0% / 100% 100%;
}
</style>
