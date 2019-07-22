import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';
import got from 'got';

import cacheMiddleware from './middleware/cache';
import errorHandle from './middleware/errorHandle';

const app = new Koa();
const router = new Router();

router.get('/*', async ctx => {
    const url = '' + ctx.url;

    const res = (await got(url, { json: true })).body;
    ctx.body = {
        code: res.code,
        data: res.data,
        msg: res.msg,
    };
});

app.use(logger());
app.use(errorHandle());
app.use(cacheMiddleware());
app.use(router.routes());

app.listen(3000, () => {
    console.log('server run in http://127.0.0.1:3000');
});
