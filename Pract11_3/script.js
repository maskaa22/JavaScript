
let form=document.getElementById('fm');
const key = 'key'
let list = [];

form.addEventListener('submit', function addMas (event){
    event.preventDefault();
    let nameProduct=form.nameTovar.value;
    let quantityProduct=form.kilkict.value;
    let priceProduct=form.price.value;
    let img=form.foto.value;
    let random = Math.random();
    
    list.push({id:random, nameProduct, quantityProduct, priceProduct, img });

   localStorage.setItem(key, JSON.stringify(list));
});

