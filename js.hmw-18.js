

function onoff(){
var x = document.getElementById("button");

if(x.innerHTML === "on"){
    x.innerHTML = "off"
    x.style.backgroundColor = "red"
    x.style.border = "2px solid green"
    x.style.boxShadow = "0 0 5px red, 0 0 20px red, 0 0 40px red"
}else{
    x.innerHTML = "on"
    x.style.backgroundColor = "green"
    x.style.border = "2px solid red"
    x.style.boxShadow = "0 0 5px green, 0 0 20px green, 0 0 40px green"
}
};