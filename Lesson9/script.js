// 1) створити функцію яка приймає масив та виводить його
// function mas(masiv=[]) 
// {
//     console.log(masiv);
// }
// let arr=[1, 2, true, 'blabla'];
// mas(arr);

//_____________________________________________________________________________________________
// 2) створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.
// function mas(masiv=[]) 
// {
//     console.log(masiv);
// }
// let arr=[];
// function mas2(masiv=[])
// {
//     for (let i=0; i<10; i++)
//     {
//         masiv[i]=Math.random();
//     }
//     //console.log(masiv);
//     return(masiv)
// }
// let result=mas2(arr);
// mas(result);

//_____________________________________________________________________________________________
// 3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// function min(a,b,c)
// {
    
//     if ((a>b && b<c) || (a>c && c>b))
//     {
//         console.log(b);
//     }
//      if ((a>b && b>c) || (a>c && b>c))
//     {
//         console.log(c);
//     }
//     else if  ((a<b && b<c)|| (a<b && b>c))
//     {
//         console.log(a);
//     }
// }
// min(8,9,3);

//_____________________________________________________________________________________________
// 4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// function max(a,b,c)
// {
    
//     if ((a<b && b>c) || (a<c && c<b))
//     {
//         console.log(b);
//     }
//      if ((a<b && b<c) || (a<c && b<c))
//     {
//         console.log(c);
//     }
//     else if  ((a>b && b>c)|| (a>b && b<c))
//     {
//         console.log(a);
//     }
// }
// max(3,2,1);

//_____________________________________________________________________________________________
// 5) створити функцію яка повертає найбільше число з масиву
// function big(mas)
// {
//     let max=0;
//     for (let i=0; i<mas.length; i++)
//     {
//         if (mas[i]>max)
//         {
//             max=mas[i];
//         }
//     }
//     console.log(max);
// }
// let arr=[1, 2, 5, 33, 15];
// big(arr);

//_____________________________________________________________________________________________
// 6) створити функцію яка повертає найменьше число з масиву
// function small(mas)
// {
//     let min=mas[0];
//     for (let i=0; i<mas.length; i++)
//     {
//         if (min>mas[i])
//         {
//             min=mas[i];
//         }
//     }
//     console.log(min);
// }
// let arr=[12, 2, 5, 33, 15];
// small(arr);

//_____________________________________________________________________________________________
// 7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
// let arr=[12, 2, 5, 33, 15];
// function sum (suma)
// {
//     let s=0;
//     for (let i=0; i<suma.length; i++)
//     {
//         s=s+suma[i];
//     }
//     console.log(s);
// }
// sum(arr);

//_____________________________________________________________________________________________
// 8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// function ceredne (mas)
// {
//     let credn=0;
//     for (let i=0; i<mas.length; i++)
//     {
//         credn+=arr[i];
//     }
//     console.log(Math.floor(credn/arr.length));
// }
// let arr=[12, 2, 5, 33, 15];
// ceredne(arr);

//_____________________________________________________________________________________________
// 9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// let arr=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// function mas (masiv)
// {
//     let count = [];
//     for (const item of masiv) 
//     {
//        if (typeof item === 'object' && !Array.isArray(item))
//        {
//            for (const key in item)
//             {
//              count.push(key);
//            }
//        }

//     }
//     console.log(count);
// }
// mas(arr);

//_____________________________________________________________________________________________
// 10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// let arr=[{name: 'Dima', age: 13}, {model: 'Camry'}];
// function mas (masiv)
// {
//     let count = [];
//     for (const item of masiv) 
//     {
//        if (typeof item === 'object')
//        {
//            for (const key in item)
//             {
//             count.push(item[key]);
//            }
//        }
//     }
//     console.log(count);
// }
// mas(arr);



//_____________________________________________________________________________________________
// 11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// let arr=[1,2,3,4];
// let arr2=[2,3,4,5];
// let arrNew=[];
// function sumaArr(mas1, mas2)
// {
//     for (let i=0; i<arr.length; i++)
//     {
//         for (let j=0; j<arr2.length; j++)
//         {
//             if (i===j)
//             {
//                 arrNew[i]=arr[i]+arr2[j];     
//             }
//         }
//     }
//     console.log(arrNew);
// }
// sumaArr(arr, arr2);