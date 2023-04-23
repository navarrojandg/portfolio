import { Context, Next } from 'koa';

export async function logger(context: Context, next: Next) {
  await next();
  console.log(
    `${context.method} ${context.request.url} - ${context.response.status} ${context.response.message}`
  );
}
