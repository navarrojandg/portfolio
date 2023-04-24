import Koa from 'koa';

import { PrismaClient } from './services';
import { logger } from './modules/middlewares/logger';
import { makeRouter } from './modules/routers';

const app = new Koa();

app.context.db = new PrismaClient();

const router = makeRouter({});

// Custom logger
app.use(logger);

// Mount routes
app.use(router.routes()).use(router.allowedMethods());

app.listen(3001);
