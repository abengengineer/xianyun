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