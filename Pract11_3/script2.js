const key='key';
let parse = JSON.parse(localStorage.getItem(key));
console.log(parse);

let show=()=>
{
    for (let item of parse)
    {
        const itemDiv=document.createElement('div');
        const imE=document.createElement('img');
        const nameE=document.createElement('div');
        const quantityE=document.createElement('div');
        const priceE=document.createElement('div');
        const button=document.createElement('button');
        imE.src=item.img;
        nameE.innerText=`Name: ${item.nameProduct}`;
        quantityE.innerText=`Quantity: ${item.quantityProduct}`;
        priceE.innerText=`Price: ${item.priceProduct}`;
        button.innerText='Видалити';
        button.onclick=()=>{
            deleteIem(item.id)
            //parse = parse.filter(value=>value.id!=id);
            //localStorage.setItem(key, JSON.stringify(parse));
        }
        itemDiv.append(imE, nameE, quantityE, priceE, button);
        document.body.append(itemDiv)
    }
}

show();
const deleteIem = (id) =>
{
    parse = parse.filter(value=>value.id!==id);
    localStorage.setItem(key, JSON.stringify(parse));
    window.location.reload()
}


let btn = document.createElement('button');
let hr = document.createElement('hr');
document.body.append(hr, btn);
btn.style.width='100px';
btn.style.height='70px';
btn.innerText='Видалити все';
btn.addEventListener('click', function cl (){
    localStorage.clear();
    window.location.reload()
})






