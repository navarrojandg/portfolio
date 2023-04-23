import Router from '@koa/router';
import { PrismaClient } from '@prisma/client';

const router = new Router();

router.get('/users', async (context) => {
  const db = context.db as PrismaClient;
  const users = await db.users.findMany();

  context.body = { data: users };
});

export default router;
