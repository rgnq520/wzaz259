//正则匹配手机号
function isMobile(str) {
    var reg = /^1[3|4|5|7|8][0-9]\d{8}$/;
    return reg.test(str);
}
//正则匹配网址
function isUrl(str) {
    var reg = /^http:\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
    return reg.test(str);
}
//循环遍历数组按某个属性排序，可指定升降序
function sort(arr, key, desc) {
    var desc = desc? -1 : 1;
    arr.sort(function (a, b) {
        return a[key] > b[key]? 1 * desc : -1 * desc;
    });
    return arr;
}
//价格格式化千分位
function priceFormat(price) {
    var price = price.toString();
    var reg = /\d+(?=(\d{3})+$)/g;
    return price.replace(reg, '$&,');
}
//日期格式化，默认yyyy-MM-dd HH:mm ss，自定义时间格式
    function dateFormat(date, format) {
        var o = {
            "M+": date.getMonth() + 1, //month
            "d+": date.getDate(), //day
            "h+": date.getHours(), //hour
            "m+": date.getMinutes(), //minute
            "s+": date.getSeconds(), //second
            "q+": Math.floor((date.getMonth() + 3) / 3), //
            "S": date.getMilliseconds() //millisecond
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {   
                format = format.replace(RegExp.$1, RegExp.$1.length == 1? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    }
    //格式数字，如果有小数点，保留两位小数 
    function formatNumber(num) {
        if (num == null) {
            return 0;
        }
        if (num == undefined) {
            return 0;
        }
        if (num == "") {
            return 0;
        }
        if (isNaN(num)) {
            return 0;
        }
        if (num.toString().indexOf(".") > 0) {
            return num.toFixed(2);
        } else {
            return num;
        }
    }



