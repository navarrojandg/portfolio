import Koa from 'koa';
import Router, { RouterOptions } from '@koa/router';

import { PrismaClient } from './services';
import { logger } from './modules/middlewares/logger';
import UsersRouter from './modules/routes/users';

const makeRouter = function (config: RouterOptions, ...routers: Router[]) {
  const api = new Router(config);

  // "index" route
  api.get('/', async (context) => {
    context.body = 'Hello world!';
  });

  // Other nested routes
  for (const router of routers || []) {
    api.use(router.routes()).use(router.allowedMethods());
  }

  return api;
};

const app = new Koa();

app.context.db = new PrismaClient();

const router = makeRouter({}, UsersRouter);

// Custom logger
app.use(logger);

// Mount routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
