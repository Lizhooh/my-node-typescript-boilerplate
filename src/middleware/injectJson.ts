
/** 为 ctx 添加 json 方法 */
export default () => async (ctx, next) => {
    ctx.json = (code: number, data: any) => {
        ctx.body = {
            code: code,
            data: data,
            msg: '',
        };
        return ctx;
    };
    await next();
}
