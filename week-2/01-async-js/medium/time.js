const currentDate = new Date();
console.log(currentDate);
let h = currentDate.getHours();
const m = currentDate.getMinutes();
var s = currentDate.getSeconds()-1;
let ampm = "AM";
setInterval(function(){
    if(h > 12){
        ampm = "PM";
        h = h-12;
    }
    
    console.log(`${h}:${m}:${++s} ${ampm}`);
},1000);