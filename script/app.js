let burgerBtn = document.getElementById('burger');
let btnBurger = document.getElementById('btn-burger')
console.log(btnBurger);
console.log(burgerBtn);
let bul = true;
// btnBurger.addEventListener( 'click',() =>{
//     if(bul == true){
//         burgerBtn.classList.remove('fa-bars')
//         burgerBtn.classList.add('fa-xmark')
//     }
// })
btnBurger.addEventListener('click',()=>{
    if (bul == true){
        burgerBtn.classList.remove('fa-bars')
        burgerBtn.classList.add('fa-xmark');
        bul = false;
    }
    else if (bul == false){
        burgerBtn.classList.remove('fa-xmark')
        burgerBtn.classList.add('fa-bars'); 
        bul = true;
    }
})