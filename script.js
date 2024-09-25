const button=document.getElementById("btn");
const linksArea=document.getElementById("showlinks");
const shareImg=document.getElementById("shareimg");

button.addEventListener("click",function(){
    linksArea.classList.toggle("links__area__hidden")
    shareImg.classList.toggle("togglefilldarkblue")
    button.classList.toggle("btncolorchange")
})