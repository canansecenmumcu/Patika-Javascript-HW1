let yourName=prompt("Adinizi girin:")  // öncelikle burada kullanıcının ismini aldım
let myName=document.querySelector("#myName");  // index içinden js i çektim
myName.innerHTML= yourName; // ve çektiğimizi buradaki veriye eşitledim...

function GetTime(){
  let myDate= new Date();
  let days =["Pazar","Pazartesi","Sali","Carsamba","Persembe","Cuma","Cumartesi"]
  let day =days[myDate.getDay()];
  let minutes=myDate.getMinutes();
  let seconds=myDate.getSeconds();
  let hours=myDate.getHours();
  let bilgi=`${hours}:${minutes}:${seconds}  ${day}`;
  let myClock= document.querySelector("#myClock");
  myClock.innerHTML=bilgi;
}
setInterval(GetTime)
