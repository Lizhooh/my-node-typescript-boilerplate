import Koa from 'koa';
import cache from '../cache';

/** 缓存中间件 */
export default () => async (ctx: Koa.Context, next) => {
    if (cache.get(ctx.url)) {
        ctx.body = cache.get(ctx.url);
        return;
    }
    await next();
    if (ctx.body && ctx.body.code === 200) {
        cache.set(ctx.url, ctx.body);
    }
};

