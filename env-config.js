'use strict'
/*
 * 环境列表，第一个环境为默认环境
 * envName: 指明现在使用的环境
 * baseUrl: 这个环境下面的api 请求的域名
 * assetsPublicPath: 静态资源存放的域名，未指定则使用相对路径
 * title: title标签内容
 * favicon: favicon。ico
 * */
/*
 使用方法示例：
 打包：
 打包deecoop环境：npm run build --deecoop
 打包ouhaicloud环境：npm run build --ouhaicloud
 打包ouhaiglasses环境：npm run build --ouhaiglasses
 打包dongtou环境：npm run build --dongtou
 打包wencheng环境：npm run build --wencheng

 本地运行：
 本地运行dev环境：npm run dev --dev
 无【--xxx】参数，则默认为dev环境：npm run dev
 */
const ENV_LIST = [
  {
    //开发环境
    envName: 'dev',
    projectName: '开发环境',
    projectEnName: 'pro',
    baseUrl: '/api/',
    assetsPublicPath:'/',
    title: '顶智智能-ERP-MES-WMS-数字化工厂',
    favicon: '/static/favicon.ico',
    envType: 'deecoop',
  },
  {
    //瓯海区工业云平台
    envName: 'ouhaicloud',
    projectName: '瓯海区工业云平台',
    baseUrl: 'https://web.ouhaicloud.com/',
    assetsPublicPath: '/',
    title: '瓯海区工业云平台',
    favicon: '/static/favicon.ico',
      envType: 'ouhaicloud',
  },
  {
    //瓯海眼睛行业环境
    envName: 'ouhaiglasses',
    projectName: '瓯海眼睛行业',
    baseUrl: 'https://web.ouhaicloud.com/',
    assetsPublicPath: '/',
    title: '瓯海眼镜行业云平台',
    favicon: '/static/favicon.ico',
      envType: 'ouhaiglasses',
  },
  {
    //顶智
    envName: 'deecoop',
    projectName: '顶智智能技术有限公司',
    baseUrl: 'https://web.deecoop.cn/',
    assetsPublicPath:'/',
    title: '顶智智能-ERP-MES-WMS-数字化工厂',
    favicon: '/static/favicon.ico',
      envType: 'deecoop',
  },
  {
    //洞头企业云管家
    envName: 'dongtou',
    projectName: '洞头企业云管家',
    baseUrl: 'https://web.ouhaicloud.com/',
    assetsPublicPath:'/',
    title: '洞头区企业云管家-ERP-MES-WMS-数字化工厂',
    favicon: '/static/favicon.ico',
      envType: 'dongtou',
  },
  {
    //文成企业云管家
    envName: 'wencheng',
    projectName: '文成企业云管家',
    baseUrl: 'https://web.ouhaicloud.com/',
    assetsPublicPath:'/',
    title: '文成县企业云管家-ERP-MES-WMS-数字化工厂',
    favicon: '/static/favicon.ico',
      envType: 'wencheng',
  },

]
const argv = JSON.parse(process.env.npm_config_argv).original || process.argv
const HOST_ENV = argv[2] ? argv[2].replace(/[^a-z]+/ig,"") : ''
const HOST_CONF = HOST_ENV  ? ENV_LIST.find(item => item.envName === HOST_ENV) : ENV_LIST[0]
process.env.ENV_TYPE = HOST_CONF.envType

console.log(HOST_CONF)

module.exports = HOST_CONF
