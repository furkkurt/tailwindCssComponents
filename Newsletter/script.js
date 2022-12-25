const mail = document.getElementById("mail");

function showMail(){
  if(mail.value == "")
    mail.classList.toggle("hidden");
}
