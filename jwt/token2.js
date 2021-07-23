const jwt=require('jsonwebtoken');
let user={name:'tejaswini',emailid:'tejaswininama@gmail.com',password:'teejhfjd'}
let token=jwt.sign('user','dfsdf',(err,token)=>{
    if(err)throwerr
console.log(token);
})