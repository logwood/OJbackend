<template>
  <div class="userLoginView">
    <h2 style="margin-bottom: 16px">用户登录</h2>
    <a-form
      style="max-width: 480px; margin: 0 auto"
      auto-label-width
      nax-width="300px"
      :model="form"
      @submit="handleSubmit"
    >
      <a-form-item field="userAccount" label="账号">
        <a-input v-model="form.userAccount" placeholder="请输入用户名" />
      </a-form-item>
      <a-form-item field="userPassword" tooltip="密码不少于8位" label="密码">
        <a-input-password
          v-model="form.userPassword"
          placeholder="请输入你的密码"
        />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" html-type="submit" style="width: 120px"
          >提交</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>

<script setup lang="ts">
import { UserControllerService, UserLoginRequest } from "../../../generated";
import { reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import * as message from "../../../node_modules/@arco-design/web-vue/es";
const form = reactive({
  userAccount: "",
  userPassword: "",
  role: "",
} as UserLoginRequest);
const router = useRouter();
const store = useStore();
const handleSubmit = async () => {
  const res = await UserControllerService.userLoginUsingPost(form);
  // 登陆成功，跳转到主页
  if (res.code === 0) {
    await store.dispatch("user/getLoginUser");
    console.log("状态" + store.state.user.loginUser);
    router.push({
      path: "/",
      replace: true,
    });
  } else {
    message.Message.error("登陆失败," + res.message);
  }
};
</script>
