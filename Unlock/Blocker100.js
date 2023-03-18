/***********************************

> 应用名称：拦截100 v3.0.2
> 脚本功能：解锁永久会员
> 更新时间：2023-03-18
> 特别说明：本脚本仅供学习交流使用，禁止转载、售卖
            
[rewrite_local]

# ～ 拦截100解锁会员
^https?:\/\/tagit\.hyhuo\.com\/cypt\/block100\/get_vip_info$ url script-response-body https://raw.githubusercontent.com/InnFen/forown/main/Unlock/Blocker100.js

[mitm]

hostname = tagit.hyhuo.com

***********************************/

var body = $response.body;
body = "lvCQG8cCxqficLk+LttK+OvjY+kGEoGHRWop15GMRVg1TU8oQTFHsNCJIEJMEYYfDjqpfM0sxeXRILHsoullvHqzmN6X7HmMRHqOjr3G0AXp2FtlU91l2+2ZbtUpL8p2cc6Y6JdCOUiADpqc4GZktNpGoED1rMVltIjdbhLGVgO0tYaNtQ/dV52tpmn+Lcm+/3pCU8/wXdnCfkkMB0QZc6psJavFUF6dLfDRzagLuxiwgOQmNQraUG99e4YLDmoQ";
$done({ 
    body 
});
