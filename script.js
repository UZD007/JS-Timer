
const vaqt=new Date();
let soat=vaqt.getHours();
let minut=vaqt.getMinutes();
let sekund=vaqt.getSeconds();
const h=document.getElementById("h");
const m=document.getElementById("m");
const s=document.getElementById("s");


function timer(){
    sekund++;
    if(sekund==60){
        sekund=0;
        minut++;
    }
    if(soat==24){
        soat=0;
        minut=0;
        sekund=0;
    }
    h.textContent=soat;
    m.textContent=minut;
    s.textContent=sekund;
}
setInterval(timer,1000)