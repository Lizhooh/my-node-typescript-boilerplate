import Koa from 'koa';
import debug from 'debug';


const log = debug('error');
log.enabled = true;

/** 全局错误捕捉中间件 */
export default () => async (ctx: Koa.Context, next) => {
    try {
        await next();
    }
    catch (err) {
        log(err.message);

        ctx.status = 500;
        ctx.body = {
            code: 500,
            data: false,
            msg: err.message,
        };
    }
};

