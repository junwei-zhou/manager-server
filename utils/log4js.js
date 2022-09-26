/**
 * log4js 封装
 * 深度阅读https://www.npmjs.com/package/log4js
 */

const log4js = require("log4js")

const levels = {
    "trace": log4js.levels.TRACE,
    "debug": log4js.levels.DEBUG,
    "info":  log4js.levels.INFO,
    "warn":  log4js.levels.WARN,
    "error": log4js.levels.ERROR,
    "fatal": log4js.levels.FATAL
}

log4js.configure({
    appenders:{
        console:{type:"console"},
        info:{
            type:"file",
            filename:"log/all-logs.log"
        },
        error:{
            type:"dateFile",
            filename:"log/err-log",
            // 都统一写到一个文件中去
            // pattern:"yyyy-mm-dd",
            // alwaysIncludePattern:true
        }
    },
    categories:{
        default:{
            appenders:["console"],
            level:levels.debug
        },
        info:{
            appenders:["console","info"],
            level:levels.info
        },
        error:{
            appenders:["console","error"],
            level:levels.error
        }
    }
})

/**
 * 日志输出模式的使用 
 * debug 模式
 * @param {string} content
 */
exports.debug = (content)=>{
    let logger = log4js.getLogger()
    logger.level = levels.debug
    logger.debug(content)
}

/**
 * 日志输出模式的使用 
 * info 模式
 * @param {string} content
 */
exports.info = (content)=>{
    let logger = log4js.getLogger("info")
    logger.level = levels.info
    logger.info(content)
}

/**
 * 日志输出模式的使用 
 * error 模式
 * @param {string} content
 */
 exports.error = (content)=>{
    let logger = log4js.getLogger("error")
    logger.level = levels.error
    logger.error(content)
}