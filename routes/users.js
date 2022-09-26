const router = require('koa-router')()
const User = require("./../models/userSchema")
const util = require('./../utils/utils')

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = "查询所有用户"
})

router.get('/test', async (ctx, next) =>{
  ctx.body = await User.find()
})

router.post('/login', async (ctx, next) => {
  try {
    const { userName, userPwd } = ctx.request.body
    const result = await User.findOne({
      userName,
      userPwd
    }, 'userId userName userEmail state role deptId roleList')
    const data = result._doc
    if (result) {
      ctx.body = util.success(data)
    } else {
      ctx.body = util.fail("账号或密码不正确！")
    }
  } catch (err) {
    ctx.body = util.fail(err.msg)
  }
})


router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
