const http=require('http');
const server=http.createServer((req,resp)=>{resp.end("hey tejaswini happy that your learning nodejs")});
server.listen(4000,(err)=>{if(err)throw err;
console.log("server running successfully... ");
});
