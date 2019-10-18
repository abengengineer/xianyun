// 计算相隔时间

export function computeTime(arr_time, dep_time) {
    //   如果参数是一个空值，直接返回
    if(!arr_time || !dep_time) return;

    const arrTime = arr_time.split(":");
    const depTime = dep_time.split(":");

    // 如果是凌晨到达的飞机
    if (arrTime[0] < depTime[0]) {
        arrTime[0] += 24;
    }

    // 到达的时间转换成分钟
    const end = arrTime[0] * 60 + (+arrTime[1]);
    // 出发的时间转换成分钟
    const start = depTime[0] * 60 + (+depTime[1]);
    // 转换成分钟后相差的分钟
    const dis = end - start;

    // 小时
    const hours = Math.floor(dis / 60);
    // 分钟
    const min = dis % 60;

    return `${hours}小时${min}分钟`;
}
