import Router from 'koa-router';
import got from 'got';

import userRoute from '../router/user';
const router = new Router<any, KoaCustom>();

router.get('/users', userRoute.list);

router.get('/*', async ctx => {
    const url = '' + ctx.url;

    const res = (await got(url, { json: true })).body;
    ctx.body = {
        code: res.code,
        data: res.data,
        msg: res.msg,
    };
});


export default router;
