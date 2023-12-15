import accessList from "@/access/accessList";
import { StoreOptions } from "vuex";
import { UserControllerService } from "../../generated";
export default {
  namespaced: true,
  state: () => ({
    loginUser: {
      userName: "未登录",
    },
  }),
  actions: {
    async getLoginUser({ commit, state }, payload) {
      const res = await UserControllerService.getLoginUserUsingGet();
      console.log(state, res.data);
      if (res.code === 0) {
        commit("updateUser", res.data);
      } else {
        commit("updateUser", {
          ...state.loginUser,
          userRole: accessList.NOT_LOGIN,
        });
      }
    },
  },
  mutations: {
    updateUser(state, payload) {
      state.loginUser = payload; // mutations always need to be synchronous
    },
  },
} as StoreOptions<any>;
