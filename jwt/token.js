const jwt=require('jsonwebtoken');
let user={email:'teju.nama@gmail.com',password:'dontaskme'}
let payload={id:user.email}
let secretkey='gdsfghgkjh';
let token=jwt.sign(payload,secretkey,{expiresIn :60*60})
console.log(token);
output:
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlanUubmFtYUBnbWFpbC5jb20iLCJpYXQiOjE2MjcwNjkxODUsImV4cCI6MTYyNzA3Mjc4NX0._2cZCkePBLi0yrg-cQjgXWp0Z77fr5r8G_31TZjbYOo
