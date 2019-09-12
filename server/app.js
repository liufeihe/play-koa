const Koa = require('koa');
const app = new Koa();
const static = require('koa-static');
// const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');
const config = require('../config');
const path = require('path');
const fs = require('fs');

// const logger = async (ctx, next)=>{
//   log.info(`[uid: ${ctx.session.uid}] ${ctx.request.method}, ${ctx.request.url}`);
//   await next();
// }

const handler = async (ctx, next)=>{
  try {
    await next();
  } catch (error) {
    ctx.response.status = error.statusCode || error.status || 500;
    ctx.response.body = {
      message: error.message
    };
  }
}

let count = 0;
const getData = async ()=>{
  return new Promise((resolve,reject)=>{
    console.log('enter promise...'+count)
    count++;
    setTimeout(()=>{
      console.log('return ...'+count)
      resolve({data:'hello world, count:'+count});
    }, 10000);
  });
}

app
// .use(logger)
.use(handler)
.use(static(config.staticPath));

const routers = new Router();
routers.get('/', async (ctx, next) => {
  ctx.response.type = 'html';
  ctx.response.body = fs.createReadStream(path.join(config.staticPath, 'a.html'));

  next();
});
routers.get('/json', async (ctx, next)=>{
  console.log('enter /json....'+count)
  let data = await getData();
  ctx.response.type = 'application/json';
  ctx.response.body = data;

  next();
});

app
.use(routers.routes())
.use(routers.allowedMethods());



app.listen(config.port, ()=>{
  console.log('server is running on port:'+config.port);
});