 //es5 syntax
const fs =require("fs");
let data = fs.readFileSync("classnote.txt","utf-8");
console.log(data); 
fs.readFile("classnote.txt","utf-8",(err,data)=>{
    console.log(data);
});
 
//how to read file syncr:
const fs=require("fs");
let data = fs.readFileSync("classnote.txt","utf-8");
console.log(data);
//read the fileasyncronous
//const fs=require("fs");
//const { CLIENT_RENEG_LIMIT } = require("tls");
//let newdata=fs.readFile("classnote.txt","utf-8",(err,newdata)=>{
//console.log(newdata);
//});
//how to write file asycr
const fs=require("fs");
fs.readFile("classnote.txt","utf-8",(err,newdata)=>{//read file


fs.writeFile("abc.txt",newdata,"utf-8",(err)=>{ //writefile
    if(err)throw err;
    console.log("readingsuccessfully");  
});
});
//console.log(data);

