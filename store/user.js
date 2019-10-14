import { async } from "q";

export const state = () => {
    return {
        userInfo: {}
    }
}

// 同步state修改方法
export const mutations = {
    setUserInfo(state,data){
        state.userInfo = data;
    }
}

// 异步state修改方法
export const actions = {
    async login(store,data){
        var res = await this.$axios({
            url: "/accounts/login",
            method: "POST",
            data
        })

        if(res.status === 200){
            store.commit("setUserInfo",res.data)
        }
        return res;
    },

    // 发送手机验证码，传入手机号码
    async sendCaptcha(store,tel){
        const res = await this.$axios({
            url: "/captchas",
            method: "POST",
            data: {
                tel
            }
        })
        return res;
    }
}