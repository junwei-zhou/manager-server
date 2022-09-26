const router = require('koa-router')()
const users = require("./../models/userSchema")
router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = "查询所有用户"
})

router.get('/test', async (ctx, next) =>{
  ctx.body = await users.find()
})


router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router
