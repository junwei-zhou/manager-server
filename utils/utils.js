/**
 * 通用工具函数封装
 */

 const CODE = {
    SUCCESS: 200,
    PARAM_ERROR: 10001,  // 参数错误
    USER_ACCOUNT_ERROR: 20001,  // 账号或密码错误
    USER_LOGIN_ERROR: 30001,  // 用户未登录
    BUSINESS_ERROR: 40001,  // 业务请求失败
    AUTH_ERROR: 50001,  // Token认证失败或者Token过期
  }
  
  module.exports = {
    /**
     * 分页结构封装
     * @param {number} pageNum
     * @param {number} pageSize
     */
    pager({ pageNum = 1, pageSize = 10 }) {
      pageNum *= 1;  // 乘以1的方式可以将字符串数字转为数字
      pageSize *= 1;
      const skipIndex = (pageNum - 1) * pageSize;
      return {
        page: {
          pageNum,
          pageSize
        },
        skipIndex
      }
    },
    success(data = '', msg = '', code = CODE.SUCCESS) {
      return {
        code,
        msg,
        data
      }
    },
    fail(msg = '', data = '', code = CODE.BUSINESS_ERROR) {
      return {
        code,
        msg,
        data
      }
    },
    CODE
  }
  
  