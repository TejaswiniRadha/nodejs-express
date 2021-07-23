/* 1st method:
const http=require('http');
const server=http.createServer((req,resp)=>{resp.end("tejaswini")});
server.listen(8000,()=>{});
2nd method: */
const http=require('http').createServer((req,resp)=>{resp.end("hello tejaswini")}).listen(3000);