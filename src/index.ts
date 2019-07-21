import Koa from 'koa';
import Router from 'koa-router';
import logger from 'koa-logger';

const app = new Koa();
const router = new Router();

router.get('/users', ctx => {
    ctx.body = {
        status: 200,
        data: 'abc',
        msg: '',
    };
});

app.use(logger());
app.use(router.routes());
app.listen(3000, () => {
    console.log('server run in http://127.0.0.1:3000');
});
