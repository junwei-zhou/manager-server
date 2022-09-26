/**
 * 数据库连接
 */
 const mongoose = require('mongoose')
 const config = require('./index')
 const log4js = require('./../utils/log4js')
 
 // 开始连接 MongoDB 数据库
 mongoose.connect(config.URL, {
    //  useNewUrlParser: true,
    //  useUnifiedTopology: true,
 })
 
 // 创建连接对象
 const db = mongoose.connection
 
 db.on('error', err => {
     // console.log('数据库连接失败!!!', err)
     log4js.error('********** 数据库连接失败 **********')
 })
 db.once('open', () => {
     // console.log('数据库连接成功!')
     log4js.info('********** 数据库连接成功 **********')
 })
 