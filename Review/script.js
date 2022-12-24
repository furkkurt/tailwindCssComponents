const submit = document.getElementById("submit");
const rank1 = document.getElementById("rank1");
const rank2 = document.getElementById("rank2");
const rank3 = document.getElementById("rank3");
const rank4 = document.getElementById("rank4");
const rank5 = document.getElementById("rank5");
const youSelected = document.getElementById("youSelected");
var stars;

rank1.addEventListener("click", () => {
  stars = 1;
  localStorage.setItem("stars", stars);
});

rank2.addEventListener("click", () => {
  stars = 2;
  localStorage.setItem("stars", stars);
});

rank3.addEventListener("click", () => {
  stars = 3;
  localStorage.setItem("stars", stars);
});

rank4.addEventListener("click", () => {
  stars = 4;
  localStorage.setItem("stars", stars);
});

rank5.addEventListener("click", () => {
  stars = 5;
  localStorage.setItem("stars", stars);
});

submit.addEventListener("click", () => {
  if(document.getElementById("message").value.length>=600)
    window.location.href="./thanks.html";  
  else
    alert("You need to write " + (600-document.getElementById("message").value.length) + " more characters");
});

function selectedRank(){
  youSelected.innerHTML="You selected " + localStorage.getItem("stars") + " out of 5";
  localStorage.removeItem("stars");
}

function highlightStars(n){
  switch(n){
    case 0:
      switch(stars){
        case 1:
          star1.classList.add("checked");
          star1.classList.remove("unchecked");
          star2.classList.add("unchecked");
          star2.classList.remove("checked");
          star3.classList.add("unchecked");
          star3.classList.remove("checked");
          star4.classList.add("unchecked");
          star4.classList.remove("checked");
          star5.classList.add("unchecked");
          star5.classList.remove("checked");
          break;
        case 2:
          star1.classList.add("checked");
          star1.classList.remove("unchecked");
          star2.classList.add("checked");
          star2.classList.remove("unchecked");
          star3.classList.add("unchecked");
          star3.classList.remove("checked");
          star4.classList.add("unchecked");
          star4.classList.remove("checked");
          star5.classList.add("unchecked");
          star5.classList.remove("checked");
          break;
        case 3:
          star1.classList.add("checked");
          star1.classList.remove("unchecked");
          star2.classList.add("checked");
          star2.classList.remove("unchecked");
          star3.classList.add("checked");
          star3.classList.remove("unchecked");
          star4.classList.add("unchecked");
          star4.classList.remove("checked");
          star5.classList.add("unchecked");
          star5.classList.remove("checked");
          break;
        case 4:
          star1.classList.add("checked");
          star1.classList.remove("unchecked");
          star2.classList.add("checked");
          star2.classList.remove("unchecked");
          star3.classList.add("checked");
          star3.classList.remove("unchecked");
          star4.classList.add("checked");
          star4.classList.remove("unchecked");
          star5.classList.add("unchecked");
          star5.classList.remove("checked");
          break;
        case 5:
          star1.classList.add("checked");
          star1.classList.remove("unchecked");
          star2.classList.add("checked");
          star2.classList.remove("unchecked");
          star3.classList.add("checked");
          star3.classList.remove("unchecked");
          star4.classList.add("checked");
          star4.classList.remove("unchecked");
          star5.classList.add("checked");
          star5.classList.remove("unchecked");
          break;
        default:
          star1.classList.add("unchecked");
          star1.classList.remove("checked");
          star2.classList.add("unchecked");
          star2.classList.remove("checked");
          star3.classList.add("unchecked");
          star3.classList.remove("checked");
          star4.classList.add("unchecked");
          star4.classList.remove("checked");
          star5.classList.add("unchecked");
          star5.classList.remove("checked");
          break;
      }
      break;
    case 1:
      star1.classList.add("checked");
      star1.classList.remove("unchecked");
      star2.classList.add("unchecked");
      star2.classList.remove("checked");
      star3.classList.add("unchecked");
      star3.classList.remove("checked");
      star4.classList.add("unchecked");
      star4.classList.remove("checked");
      star5.classList.add("unchecked");
      star5.classList.remove("checked");
      break;
    case 2:
      star1.classList.add("checked");
      star1.classList.remove("unchecked");
      star2.classList.add("checked");
      star2.classList.remove("unchecked");
      star3.classList.add("unchecked");
      star3.classList.remove("checked");
      star4.classList.add("unchecked");
      star4.classList.remove("checked");
      star5.classList.add("unchecked");
      star5.classList.remove("checked");
      break;
    case 3:
      star1.classList.add("checked");
      star1.classList.remove("unchecked");
      star2.classList.add("checked");
      star2.classList.remove("unchecked");
      star3.classList.add("checked");
      star3.classList.remove("unchecked");
      star4.classList.add("unchecked");
      star4.classList.remove("checked");
      star5.classList.add("unchecked");
      star5.classList.remove("checked");
      break;
    case 4:
      star1.classList.add("checked");
      star1.classList.remove("unchecked");
      star2.classList.add("checked");
      star2.classList.remove("unchecked");
      star3.classList.add("checked");
      star3.classList.remove("unchecked");
      star4.classList.add("checked");
      star4.classList.remove("unchecked");
      star5.classList.add("unchecked");
      star5.classList.remove("checked");
      break;
    case 5:
      star1.classList.add("checked");
      star1.classList.remove("unchecked");
      star2.classList.add("checked");
      star2.classList.remove("unchecked");
      star3.classList.add("checked");
      star3.classList.remove("unchecked");
      star4.classList.add("checked");
      star4.classList.remove("unchecked");
      star5.classList.add("checked");
      star5.classList.remove("unchecked");
      break;
  }
}
