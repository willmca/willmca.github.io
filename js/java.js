const links = document.querySelectorAll("a")

for (i=0;i<links.length;i++){
links[i].addEventListener("mouseover", function(evt){
    evt.preventDefault();
    console.log(evt)
    evt.target.style.color= "salmon";
})
links[i].addEventListener("mouseout", function(evt){
    evt.preventDefault();
    console.log(evt)
    evt.target.style.color= "white";
})
}
