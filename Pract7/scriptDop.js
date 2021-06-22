//_____________________
//======ДОП============
//____________________


// 1
let nummN1 = +prompt('Первое число');
let nummN2 = +prompt('Второе число');
let nummN3 = +prompt('Третье число');

if (nummN1>nummN2 && nummN2>nummN3)
{
    alert(`${nummN3}\n ${nummN2}\n ${nummN1}`);
}
else if (nummN1<nummN3 && nummN1>nummN2)
    {
        alert(`${nummN2}\n ${nummN1}\n ${nummN3}`);
    } 
    else if (nummN1>nummN2 && nummN2<nummN3)
        {
            alert(`${nummN2}\n ${nummN3}\n ${nummN1}`);
        }
        else if (nummN1<nummN2 && nummN2<nummN3)
            {
                alert(`${nummN1}\n ${nummN2}\n ${nummN3}`);
            }
            else if (nummN2>nummN1 && nummN1>nummN3)
                {
                    alert(`${nummN3}\n ${nummN1}\n ${nummN2}`);
                }
                else if (nummN1<nummN2 && nummN2>nummN3)
                    {
                        alert(`${nummN1}\n ${nummN3}\n ${nummN2}`);
                    }
                    else if (nummN1==nummN2 && nummN2==nummN3)
                        {
                            alert('Числа равны');
                        }
                        else alert('Что-то пошло не так');

// 2
let color = prompt('Введіть колір світлофора з малої літери');

if (color=='зелений')
{
    alert('іди');
}
else if (color=='жовтий')
{
    alert('підожди');
}
else if (color=='червоний')
{
    alert('стій');
}
else alert('Что-то пішло не так');

//3
let colorr = prompt('Введіть колір світлофора з малої літери');
const isRoadClear = confirm('Чи є на дорозі машина?');

if (colorr=='зелений')
{
    if (isRoadClear)
    {
        alert('Почекай поки порушники проїдуть');
    }
    else alert('Іди');
}
else if (colorr=='жовтий')
{
    if (isRoadClear)
    {
        alert('Чекай');
    }
    else alert('Все одно чекай');
}
else if (colorr=='червоний')
{
    if (isRoadClear)
    {
        alert('Стій та чекай');
    }
    else alert('Стій всеодно!');
}
else alert('Что-то пішло не так');