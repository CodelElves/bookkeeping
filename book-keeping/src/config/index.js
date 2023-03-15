/**
 * 环境配置封装
 */
const env =
    import.meta.env.MODE || 'prod'; //防止没有定义
const EnvConfig = {
    dev: {
        baseApi: 'http://localhost:3001/api',
    },
    prod: {
        baseApi: 'http://wellcoding.cn:3001/api',
    },
};

export default {
    env,
    namespace: 'book-keeping',
    ...EnvConfig[env],
};