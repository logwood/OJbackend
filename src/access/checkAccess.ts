import accessList from "./accessList";

/**
 * 检查权限
 * @param loginUser 当前登录用户
 * @param needAccess 需要有的权限
 * @returns boolean 是否有权限
 */
const checkAccess = (loginUser: any, needAccess = accessList.NOT_LOGIN) => {
  //获取当前用户的权限
  const loginUserAccess = loginUser?.userRole ?? accessList.NOT_LOGIN;
  if (needAccess === accessList.NOT_LOGIN) {
    return true;
  }
  //如果页面需要登录，但是当前用户未登录，则无权限
  if (needAccess === accessList.USER) {
    if (loginUserAccess === accessList.NOT_LOGIN) {
      return false;
    }
  }
  //如果页面需要管理员权限，但是当前用户不是管理员，则无权限
  if (needAccess === accessList.ADMIN) {
    if (loginUserAccess !== accessList.ADMIN) {
      return false;
    }
  }

  return true;
};
export default checkAccess;
