


let a,hour,min,sec;
const options={weekday:'long',year:'numeric',month:'long',day:'numeric'};
setInterval(()=>{
a=new Date();
hour=a.getHours();
min=a.getMinutes();
sec=a.getSeconds();

document.getElementById("toadd").innerHTML=hour + ":" + min +":"+sec +" on" + "<br>" + a.toLocaleDateString(undefined,options);

},1000);