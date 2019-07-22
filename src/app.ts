import Koa from 'koa';

const app = new Koa<any, KoaCustom>();

export default app;
export type Ctx = typeof app['context'];
