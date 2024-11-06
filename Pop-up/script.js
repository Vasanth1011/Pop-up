let popup=document.getElementById("pop-up");
const submitbtn=document.getElementById("submitbtn");
var okbtn=document.getElementById("okbtn");

function open(){
  popup.classList.add("open-popup");
}

function close(){
  popup.classList.remove("open-popup");
}

submitbtn.addEventListener("click",()=>{
  open();
})

okbtn.addEventListener("click",()=>{
  close();
})