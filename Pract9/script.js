// - створити функцію яка обчислює та повертає площу прямокутника висотою
// - створити функцію яка обчислює та повертає площу кола
// - створити функцію яка обчислює та повертає площу циліндру
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"


// - створити функцію яка обчислює та повертає площу прямокутника висотою
// let width=10;
// let height=15;
// function Spr(w, h)
// {
//     let S=w*h;
//     console.log(S);
// }
// Spr(width, height);

// - створити функцію яка обчислює та повертає площу кола
// let p=3.14;
// let r=12;
// function Sc(p, r)
// {
//     S=p*Math.pow(r, 2);
//     console.log(S);
// }
// Sc(p, r);

// - створити функцію яка обчислює та повертає площу циліндру
// let p=3.14;
// let r=7;
// let h=10;
// function Scul(p, r, h)
// {
//     S=2*p*r*(h+r);
//     console.log(S);
// }
// Scul(p, r, h);

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// function minMax()
// {
//     let arr=arguments;
//     let min=arr[0], max=0;
//     for (let i=0; i<arr.length; i++)
//     {
//         //console.log(i);
//         if (max<arr[i])
//         {
//             max=arr[i]
//         }
//     }
//     console.log(max)
//     for (let j=0; j<arr.length; j++)
//     {
//         if (min>arr[j])
//         {
//             min=arr[j];
//         }
//     }
//     return min;
// }
// let a=20, b=5, c=30, d=94, e=14;
// let zminna = minMax(a,b,c,d,e);
// console.log(zminna);

// - Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr=[9,8,0,4];
// let i=1;
// function revers (mas, x)
// {
//     let count;
//     for (let i=0; i<mas.length; i++)
//     {
//         if (i===x)
//         {
//             count=mas[i];
//             mas[i]=mas[i+1];
//             mas[i+1]=count;
//         }
//     }
//     console.log(mas);
// }
// revers(arr, i);

//_____________________________________________________________________________________________
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// function revers (mas)
// {
//     let mas1=[];
//     let mas2=[];
//     for (let i=0; i<mas.length; i++)
//     {
//         if (mas[i]===0)
//         {
//             mas1.push(0);
//         }
//         else mas2.push(mas[i]);
//     }
//     console.log(mas2.concat(mas1))
// }
// let arr=[1,0,6,0,3];
// revers(arr);

//_____________________________________________________________________________________________
// - Дано список імен.
// let n1 = '    Harry       Potter      '
// let n2 = '    Ron       Whisley      '
// let n3 = '    Hermione       Granger      '

function nameNormalizator(nameToNormalize) 
{
    let t;
    for (let i=0; i<nameToNormalize.length; i++)
    {
        t=nameToNormalize.trim();
        while(t.includes('  '))
        {
            t=t.replace('  ', ' ');
            
        }
    }
    console.log(t);
} 
nameNormalizator('      Harry         Potter           ');
nameNormalizator('    Ron       Whisley      ');
nameNormalizator('    Hermione       Granger      ');