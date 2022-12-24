const bottom = document.getElementById("progressBottom");
const topA = document.getElementById("progressTop");
const loading = document.getElementById("loading");
const percentage = document.getElementById("percentage");

let bttop = -15;
let btleft = 285;
let btbtop = 15;
let btbbot = 15;
let btbrig = 15;

let tttop = -195;
let ttleft = 5;
let ttbtop = 195;
let ttbbot = 195;
let ttbrig = 295;
let count = 0;
setInterval(() => {
  if(count<200){
    if(loading.innerHTML === "Loading")
      loading.innerHTML = "Loading.";
    else if(loading.innerHTML === "Loading.")
      loading.innerHTML = "Loading..";
    else if(loading.innerHTML === "Loading..")
      loading.innerHTML = "Loading...";
    else
      loading.innerHTML = "Loading";
    }
  else
    loading.innerHTML = "Complete!";
}, 250); 
setInterval(() => {
  if(count <= 200){
    percentage.innerHTML = Math.floor(count/2) + "%";

    count++
    tttop += .9 
    ttbtop -= .9;
    ttbbot -= .9;
    ttbrig -= 1.4;
   
    bttop -= .9;
    btleft -= 1.4;
    btbtop += .9 
    btbbot += .9;
    btbrig += 1.4;
    bottom.style.setProperty("top", bttop+"px");
    bottom.style.setProperty("left", btleft+"px");
    bottom.style.setProperty("border-top-width", btbtop+"px");
    bottom.style.setProperty("border-bottom-width", btbbot+"px");
    bottom.style.setProperty("border-right-width", btbrig+"px");

    topA.style.setProperty("top", tttop+"px");
    topA.style.setProperty("left", ttleft+"px");
    topA.style.setProperty("border-top-width", ttbtop+"px");
    topA.style.setProperty("border-bottom-width", ttbbot+"px");
    topA.style.setProperty("border-right-width", ttbrig+"px");
  }
  else {
    topA.style.setProperty("visibility", "hidden");
  }
}, 25);
