let list=[];
let form=document.getElementById('fm');


form.addEventListener('submit', function addMas (event){
    event.preventDefault();
    let nameProduct=form.nameTovar.value;
    let quantityProduct=form.kilkict.value;
    let priceProduct=form.price.value;
    let foto=form.foto.value;
    let img = document.createElement('img');
        img.src=foto;
    let random = Math.random();
    console.log(nameProduct, quantityProduct, priceProduct, img);
    let arr = {
        nameTovar:nameProduct,
        kilkictTovar:quantityProduct,
        priceTovar:priceProduct,
        fotoTovat:img,
        idTovar: random
    }
    
    // console.log(arr);
    list.push(arr);
    console.log(list);
   localStorage.setItem('list', JSON.stringify(list));
});
console.log(form.price.value)
