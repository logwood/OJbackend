<template>
  <div>
    <a-row
      id="globalHeader"
      class="grad-demo"
      style="margin-bottom: 16px"
      align="center"
      :wrap="false"
    >
      <a-col flex="100px">
        <div>{{ store.state.user?.loginUser?.userName ?? "未登录" }}</div>
      </a-col>
      <a-col flex="auto">
        <a-menu
          mode="horizontal"
          :selected-keys="selectedKeys"
          @menu-item-click="doMenuClick"
        >
          <a-menu-item
            key="0"
            :style="{ padding: 0, marginRight: '38px' }"
            disabled
          >
            <div class="title-bar">
              <img class="logo" src="../assets/logo.png" alt="logo" />
              <span class="title">王桑 Online Judge</span>
            </div>
          </a-menu-item>
          <a-menu-item v-for="item in visibleRoutes" :key="item.path">{{
            item.name
          }}</a-menu-item>
        </a-menu>
      </a-col>
    </a-row>
  </div>
</template>

<script setup>
import { routes } from "../router/routes";
import { useRouter } from "vue-router";
import { ref } from "vue";
import { useStore } from "vuex";
import checkAccess from "@/access/checkAccess";
import accessList from "@/access/accessList.ts";
import { computed } from "vue";
const router = useRouter();
const store = useStore();
const loginUser = store.state.user.loginUser;
const selectedKeys = ref(["/"]);

const visibleRoutes = computed(() => {
  return routes.filter((item, index) => {
    if (item.meta?.hideInMenu) {
      return false;
    }
    if (!checkAccess(store.state.user.loginUser, String(item?.meta?.access))) {
      return false;
    }
    return true;
  });
});

router.afterEach((to, from, next) => {
  selectedKeys.value = [to.path];
});
//setTimeout(() => {
//  store.dispatch("user/getLoginUser", {
//    loginUser: {
//      userName: "王桑",
//      userRole: accessList.ADMIN,
//    },
//  });
//}, 0);
const doMenuClick = (key) => {
  router.push({
    path: key,
  });
};
//隐藏渲染界面
</script>
<style scoped>
.title-bar {
  display: flex;
  align-items: center;
  justify-content: center;
}
.title {
  color: #444;
  margin-left: 16px;
}
.logo {
  width: 48px;
}
</style>
<script>
export default {
  name: "GlobalHeader",
  // Other component options, if any
};
</script>
