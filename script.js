const toggle = document.getElementById("toggle");

toggle.onclick = () => {

document.body.classList.toggle("dark");

if(document.body.classList.contains("dark")){
toggle.textContent="☀️";
}else{
toggle.textContent="🌙";
}

};
