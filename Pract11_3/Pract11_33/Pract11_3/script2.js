const listDiv=document.getElementById('list')
let parse = JSON.parse(localStorage.getItem('list'));
console.log(parse);

// let show=()=>{


// for (let item of store)
// {
//     const itemDiv=document.createElement('div');
//     const imE=document.createElement('img');
//     const nameE=document.createElement('div');
//     const priceE=document.createElement('div');
//     const button=document.createElement('button');
//     imE.src=item.img;
//     nameE.innerText=`Name: ${item.name}`;
//     priceE.innerText=`Price: ${item.price}`;
//     button.innerText='Delete'
//     button.onclick=()=>{
//         deleteIem(item.id)
//     }
//     itemDiv.append(imE, nameE, priceE, button);
//     listDiv.appendChild(itemDiv)


// }


// }
// show()



for (let i of parse)
{
    console.log(Object.values(i));
    let div=document.createElement('div');
    document.body.prepend(div);
    div.textContent=Object.values(i);
    let b=document.createElement('button');
    document.body.prepend(b);
    b.type='click';
    b.style.width='75px';
    b.style.height='25px';
    b.textContent='Видалити';
    b.addEventListener('click', function del (){
        //localStorage.(Object.values(i));
       let cler= localStorage.key(Object.values(i));
        //window.location.reload()
        //console.log(localStorage.key(Object.values(i)))
        localStorage.removeItem(cler[i]);
        console.log(111)
    })

}




let btn=document.getElementById('btn');
btn.addEventListener('click', function cl (){
    localStorage.clear();
    window.location.reload()
})