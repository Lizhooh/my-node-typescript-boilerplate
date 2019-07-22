import BaseRoute, { route, Ctx } from '../router';

class UserRoute extends BaseRoute {

    hello() {
        console.log('hello');

        return [...new Array(10)].map(i => ({
            text: Math.random().toString(32).slice(2),
        }));
    }

    @route
    list(ctx: Ctx) {
        ctx.json(200, this.hello());
    }
}

const r = new UserRoute();

export default {
    list: r.list.bind(r),
};

