const fs = require('fs');

fs.appendFile("/Users/shivamgarg/Himral/100xDevs/Assignments Harkirat/assignments/week-2/01-async-js/easy/a.txt","Hii there I'm still working" , function(err){
    if(err){
        throw err;
    }
    console.log("appended");
})

fs.readFile("/Users/shivamgarg/Himral/100xDevs/Assignments Harkirat/assignments/week-2/01-async-js/easy/a.txt","utf-8",function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
})