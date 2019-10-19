import {Message} from "element-ui";

export default (context) => {
    context.$axios.onError(res => {
        const {statusCode, message} = res.response.data;
        
        // 还未使用
        // if(statusCode === 401 || statusCode === 403){
        //     Message.warning({message: "请先登录"});
        //     redirect("/user/login");
        // }

        if(statusCode === 400){
            Message.error({message});
        }

        if(statusCode === 403 || statusCode === 401){
            // 路由重定向的方法
            context.redirect("/user/login")
        }
    })
}