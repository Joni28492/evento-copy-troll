const source = document.querySelector("div.source");
const target = document.querySelector("div.target");
const parrafo  = document.querySelector('.parrafo')




//1er input
source.addEventListener("copy", (event) => {
  event.clipboardData.setData("text/plain", "Hola has sido hackeado"); //texto que copiamos en el clipboard
  event.preventDefault();
});

source.addEventListener("cut", (event) => {
    event.clipboardData.setData("text/plain", "Hola has sido hackeado"); //texto que copiamos en el clipboard
    event.preventDefault();
});

source.addEventListener("paste", (event) => {
    alert('ahi no joder')
});


//2º input
target.addEventListener( "copy", (event)=>{
    //accion maliciosa
    location.href='https://hack.xero-sec.com/'
})

target.addEventListener( "paste", (event)=>{
    //accion maliciosa
    confirm("asi que has entrado a www.pinguinos-xxx.com")
})

//parrafo o cualquier elemento

parrafo.addEventListener("copy", (event) => {
    event.clipboardData.setData("text/plain", "https://www.facebook.com/PinguinasRugbyBurgos/"); //texto que copiamos en el clipboard
    event.preventDefault();
});