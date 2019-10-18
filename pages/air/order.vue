<template>
    <div class="container">
        <el-row type="flex" justify="space-between">
            <!-- 订单表单 -->
            <div class="main">
                <OrderForm @getDetail="getDetail" @getAllPrice="getAllPrice"/>
            </div>

            <!-- 侧边栏 -->
                <OrderAside :data="detail" :allPrice="allPrice"/>
        </el-row>
    </div>
</template>

<script> 
import OrderForm from "@/components/air/orderForm";
import OrderAside from "@/components/air/orderAside"

export default {
    data(){
        return {
            // 机票详情
            detail: {
                seat_infos: {}
            },
            allPrice: 0
        }
    },

    components: {
        OrderForm,
        OrderAside
    },

    methods: {
        // 获取机票详情的方法
        getDetail(detail){
            this.detail = detail;
        },

        // 获取总价格的方法
        getAllPrice(price){
            this.allPrice = price;
        }
    }
};
</script>

<style lang="less" scoped>
.container {
    width: 1000px;
    margin: 20px auto;
}

/*aside*/
.aside {
    width: 350px;
    height: fit-content;
    border: 1px #ddd solid;
}
</style>