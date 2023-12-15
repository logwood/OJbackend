import router from "@/router";
import store from "@/store";
import accessList from "@/access/accessList";
import checkAccess from "@/access/checkAccess";
router.beforeEach(async (to, from, next) => {
  // 自动登录
  let loginUser = store.state.user.loginUser;
  if (!loginUser || !loginUser.userRole) {
    await store.dispatch("user/getLoginUser");
    loginUser = store.state.user.loginUser;
  }
  const needAccess = (to.meta?.access as string) ?? accessList.NOT_LOGIN;
  console.log("needAccess", needAccess);
  // 如果页面需要登录，但是当前用户未登录，则跳转到登录页面
  if (needAccess !== accessList.NOT_LOGIN) {
    console.log("需要登陆");
    if (
      !loginUser ||
      !loginUser.userRole ||
      loginUser.userRole === accessList.NOT_LOGIN
    ) {
      console.log("没有登陆");
      next(`/user/login`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next("/noAuth");
      return;
    }
  }
  next();
});
