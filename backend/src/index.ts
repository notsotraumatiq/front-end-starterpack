import koa from 'koa';

const app = new koa();
app.use((ctx) => {
  ctx.body = 'Hello World';
});

app.listen(3000);
