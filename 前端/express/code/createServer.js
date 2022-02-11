/* 导入 express */
const express = require('express')
/* 创建 web 服务器 */
const app = express()
/* 调用app.listen函数，启动服务器 */
app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})


/* 监听 GET 请求  req 是请求对象，res是响应对象*/
app.get('/', (req, res) => {
    console.log('Hello World!1')
})

/* 监听 POST 请求  req 是请求对象，res是响应对象*/
app.post('/', (req, res) => {
    console.log('Hello World!2')
})

/* 把内容响应给客户端 */
app.get('/user', (req, res) => {
    res.send('Hello World!3')
})

app.post('/user', (req, res) => {
    res.send('Hello World!4')
})

/* 获取URL中携带的查询参数 */
app.get('/abc/', (req, res) => {
    console.log(req.query);
    res.send(req.query);
})

/* 获取 URL 中的动态参数 */
app.get('/user/:id/:name', (req, res) => {
    // req.params是一个空对象
    console.log(req.params)
    res.send(req.params)
})