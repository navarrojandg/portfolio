import Router, { RouterOptions } from '@koa/router';

import UsersRouter from './users';

const API_ROUTERS: Router[] = [UsersRouter];

export function makeRouter(config: RouterOptions) {
  const api = new Router(config);

  // "index" route
  api.get('/', async (context) => {
    context.body = 'Hello world!';
  });

  // Other nested routes
  for (const router of API_ROUTERS) {
    api.use(router.routes()).use(router.allowedMethods());
  }

  return api;
}
