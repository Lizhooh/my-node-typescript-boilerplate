import logger from 'koa-logger';

import app from './app';
import router from './routes';

import cacheMiddleware from './middleware/cache';
import errorHandle from './middleware/errorHandle';
import inJectJson from './middleware/injectJson';

app.use(logger());
app.use(inJectJson());
app.use(errorHandle());
app.use(cacheMiddleware());
app.use(router.routes());

app.listen(3000, () => {
    console.log('server run in http://127.0.0.1:3000');
});
