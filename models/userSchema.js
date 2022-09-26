/**
 * 用户数据模型
 */
 const mongoose = require('mongoose')

 //  用户集合：users
 const userSchema = mongoose.Schema({
       "userId" : { type: Number, default: 100001 },    //用户ID，自增长
       "userName" : { type: String, default: 'admin' },   //用户名称
       "userPwd" : { type: String, default: '123456' },   //用户密码，md5加密
       "userEmail" : { type: String, default: 'admin@qq.com' },   //用户邮箱
       "mobile":{ type: String, default: '18851829999' },   //手机号
       "sex": { type: Number, default: 0 },     //性别 0:男  1：女 
       "deptId": { type: Array, default: [] },  //部门
       "job": { type: String, default: '前端开发工程师' },     //岗位
       "state" : { type: Number, default: 1 },  // 1: 在职 2: 离职 3: 试用期
       "role": { type: Number, default: 1 },    // 用户角色 0：系统管理员  1： 普通用户
       "roleList" : { type: Array, default: [] },   //系统角色
       "createTime" : { type: Date, default: Date.now() },     //创建时间
       "lastLoginTime" : { type: Date, default: Date.now() },  //更新时间
       "remark": {
         type: String,
         default: ''
       }
 })
//  模型名字,scheme,连接的集合名字
 module.exports = mongoose.model('user', userSchema, 'user')
  