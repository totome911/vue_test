// var NewApiRootUrl = '/yjshop-framework/api/';
// var NewApiRootUrl = 'http://120.35.26.129:9806/tjwhManager';
var NewApiRootUrl = '/tjwhManager';
// var NewApiRootUrl = 'http://192.168.8.32:5004/tjwhManager';
// var NewApiRootUrl = '';
module.exports = {
    // IndexUrl: NewApiRootUrl + '/index/index', //首页数据接口
    getUserDepartInfo: NewApiRootUrl+'/yj/tjwh/sys/login/getUserDepartInfo',//登录界面 获取部门信息
    login: NewApiRootUrl+'/yj/tjwh/sys/login',//登录校验

};