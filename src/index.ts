import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';

const app = new Koa();
const router = new Router();

const rand = (min, max) => Math.random() * (max - min) + min | 0;

router.get('/users', async ctx => {
    let { limit, offset } = ctx.query;

    limit = (limit * 1) || 10;
    limit = Math.max(Math.min(limit, 50), 1);

    await new Promise(rs => setTimeout(rs, rand(50, 50)));

    ctx.body = {
        status: 200,
        data: {
            limit,
            offset,
        },
        msg: '',
    };
});

app.use(logger());
app.use(router.routes());
app.listen(3000, () => {
    console.log('server run in http://127.0.0.1:3000');
});
