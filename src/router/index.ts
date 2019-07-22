import { Ctx } from '../app';

/** 将类的某个方法装饰为路由方法 */
export function route(_target: any, _key: string, descriptor: PropertyDescriptor) {
    descriptor.value.isRoute = true;
    return descriptor;
}

class BaseRoute {}

export default BaseRoute;
export type Ctx = Ctx;


