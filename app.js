// let main = document.querySelector(".main")

// const clock=()=>{

// let saniye =new Date().getSeconds()
// let saat =new Date().getHours()
// let dakika=new Date().getMinutes()


// // if (saniye < 10 ) {
// //   `0${saniye}`;



// // }

// main.innerHTML = `${saat < 10 ? `0${saat}` : `${saat}`}:${
//   dakika < 10 ? `0${dakika}` : `${dakika}`
// }:${saniye < 10 ? `0${saniye}` : `${saniye}`} ${
//   saat < 13 ? "AM": "PM"
// }`;

// }








// setInterval(clock,100)



//? ********2.yoll



//  function showTime(){
//     var date=new Date();
//     var time=date.toLocaleTimeString();
    
//    let t=document.querySelector(".main");
//    t.innerText=time;
// }
// setInterval(showTime,1000)
// showTime()
// console.log(new Date());


//? 3.yolll*********
function showTime(){
    var date=new Date();
    var h=date.getHours();
    var m=date.getMinutes();
    var s=date.getSeconds();
     var x="AM";
if(h == 0){
    h = 12;
}
if(h > 12){
    h = h - 12
    x="PM"}
h=h<10 ? "0"+ h : h;
m=m<10 ? "0"+ m : m;
s=s<10 ? "0"+ s : s;
let time=document.querySelector(".main");
time.innerText=`${h}:${m}:${s}  ${x}`;