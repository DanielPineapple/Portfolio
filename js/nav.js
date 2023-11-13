function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

document.getElementById("close-menu").addEventListener("click", function(event){
    event.preventDefault()
});