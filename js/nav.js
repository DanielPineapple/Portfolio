function openNav(){
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0%";
}

btnResumen.addEventListener('click', (e) => {
    e.preventDefault()
    calcularPago()
});