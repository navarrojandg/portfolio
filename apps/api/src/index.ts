import Koa from 'koa';

import { PrismaClient } from './services';

const app = new Koa();

app.context.db = new PrismaClient();

app.use(async (context) => {
  context.body = 'Hello world!';
});

app.listen(3001);
