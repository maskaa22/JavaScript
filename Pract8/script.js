// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let arr=['a', 'b', 'c'];
// for (let i=0; i<1; i++)
// {
//     arr.push(1, 2, 3);
// }
// console.log(arr);

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr=[1, 2, 3];
// let newArr = arr.reverse();
// console.log(newArr);

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr=[1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr=[1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//__________________________________________________________________________________________

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].


// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr=[1, 2, 3, 4, 5];
// let newArr=arr.slice(3);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr=[1, 2, 3, 4, 5];
// let newArr=arr.splice(0, 2);
// console.log(newArr);

// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c'].
// let arr=[1, 2, 3, 4, 5];
// arr.splice(3, 5, 'a', 'b', 'c');
// console.log(arr);

//_____________________________________________________________________________________________

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i=0; i<arr.length; i++)
// {
//     if (arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }

//_____________________________________________________________________________________________

// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let arr2=[];
// for (let i=0; i<arr.length; i++)
// {
//     arr2[i]=arr[i]
// }
// console.log(arr2);

//_____________________________________________________________________________________________

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let str='';
// for (let i=0; i<arr.length; i++)
// {
//     str=str+arr[i];
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let str='';
// let i=0;
// while (i<arr.length)
// {
//     str=str+arr[i];
//     i++
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let str='';
// for (let val of arr)
// {
//     str=str+val;
// }
// console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for in зібрати всі букви в слово.
// let arr=[ 'a', 'b', 'c'];
// let str='';
// for (let val in arr)
// {
//     str=str+arr[val];
// }
// console.log(str);

//_____________________________________________________________________________________________
//__________________ДОДАТКОВО__________________________________________________________________
//_____________________________________________________________________________________________

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)


// 1. перебрати його циклом while
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arr.length)
// {
//     console.log(arr[i]);
//     i++
// }

// 2. перебрати його циклом for
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// for (i; i<arr.length; i++)
// {
//     console.log(arr[i]);
// }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arr.length)
// {
   
//     if (i%2!=0)
//     {
//         console.log(arr[i]);
//     }
//     i++
// }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// for (i; i<arr.length; i++)
// {
//     if (i%2!=0)
//     {
//         console.log(arr[i]);
//     }
// }

// 5. перебрати циклом while та вивести  числа тільки парні  значення
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// while (i<arr.length)
// {
   
//     if (arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
//     i++
// }

// 6. перебрати циклом for та вивести  числа тільки парні  значення
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// for (i; i<arr.length; i++)
// {
//     if (arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }

// 7. замінити кожне число кратне 3 на слово "okten"
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=0;
// for (i; i<arr.length; i++)
// {
//     if (arr[i]%3==0)
//     {
//         //console.log(arr[i]);
//         arr[i]='okten';
//         console.log(arr[i]);
//     }
// }

// 8. вивести масив в зворотньому порядку.
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// arr.reverse();
// console.log(arr);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// while (i>=0)
// {
//     console.log(arr[i]);
//     i--
// }
            //________________
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// for (i; i>=0; i--)
// {
//     console.log(arr[i]);

// }

            //________________
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// while (i>=0)
// {
   
//     if (i%2!=0)
//     {
//         console.log(arr[i]);
//     }
//     i--
// }

            //________________
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// for (i; i>=0; i--)
// {
//     if (i%2!=0)
//     {
//         console.log(arr[i]);
//     }
// }

            //________________
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// while (i>=0)
// {
   
//     if (arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
//     i--
// }

            //________________
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// for (i; i>=0; i--)
// {
//     if (arr[i]%2==0)
//     {
//         console.log(arr[i]);
//     }
// }

            //________________
// let arr=[2,17,13,6,22,31,45,66,100,-18];
// let i=arr.length-1;
// for (i; i>=0; i--)
// {
//     if (arr[i]%3==0)
//     {
//         arr[i]='okten';
//         console.log(arr[i]);
//     }
// }

//_____________________________________________________________________________________________

// 1. Створити пустий масив та :
//        a. заповнити його 50 парними числами за допомоги циклу.
//        b. заповнити його 50 непарними числами за допомоги циклу.
//        c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
//        d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)


// - заповнити його 50 парними числами за допомоги циклу.
// let arr=[];
// let num=100;
// for (let i=0; i<num; i++)
// {
//     if (i%2==0)
//     {  
//         arr.push(i);
//     }
// }
// console.log(arr);

// - заповнити його 50 непарними числами за допомоги циклу.
// let arr=[];
// let num=100;
// for (let i=0; i<num; i++)
// {
//     if (i%2!==0)
//     {  
//         arr.push(i);
//     }
// }
// console.log(arr);

//c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// let arr=[];
// let num=20;
// for (let i=0; i<num; i++)
// { 
//      arr[i]=Math.random();
// }
// console.log(arr);

//d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// let arr=[];
// let num=20;
// let min=8; 
// let max=732;
// for (let i=0; i<num; i++)
// { 
//     arr[i]=Math.floor(Math.random() * (max - min) + min);
// }
// console.log(arr);

//_____________________________________________________________________________________________

// 2. Вивести за допомогою console.log кожен третій елемен
// let arr=[1, 25, 368, 2, 15, 23, 14, 355, 96, 45];
// for (let i=0; i<arr.length; i+=3)
// { 
//     console.log(arr[i]);
// }

//_____________________________________________________________________________________________


//3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// let arr=[1, 25, 368, 2, 15, 23, 14, 355, 96, 45];
// for (let i=0; i<arr.length; i++)
// { 
//     if (!(i%3) && !(arr[i]%2))
//     {
//     console.log(arr[i]);
//     }
// }

//_____________________________________________________________________________________________

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arr=[1, 25, 368, 2, 15, 23, 14, 355, 96, 45];
// let arr2=[];
// for (let i=0; i<arr.length; i++)
// { 
//     if (!(i%3) && !(arr[i]%2))
//     {
//     //console.log(arr[i]);
//     arr2[i]=arr[i];
//     console.log(arr2[i]);
//     }
// }

//_____________________________________________________________________________________________

//5. Вивести кожен елемент масиву, сусід справа якого є парним
// let arr=[1, 2, 3, 5, 7, 9, 56, 8, 67];
// for (let i=0; i<arr.length; i++)
// {
//     if (arr[i]%2==0)
//     {
//         console.log(arr[i-1]);
//     }
// }

//_____________________________________________________________________________________________

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let arr=[100,250,50,168,120,345,188];
// let credn=0;
// for (let i=0; i<arr.length; i++)
// {
//     credn+=arr[i];
// }
//     console.log(Math.floor(credn/arr.length));
//_____________________________________________________________________________________________

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// let arr=[];
// let arr2=[];
// for (let i=0; i<10; i++)
// {
//     arr[i]=Math.round(Math.random()*5);
//     arr2[i]=arr[i];
// }
// console.log(arr2);

//_____________________________________________________________________________________________

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// let arr=[2, 5, true, 'gaz', 3, false, 'biba', 999, true, 'live'];

// for (let i=0; i<arr.length; i++)
// {
//     if (typeof arr[i]=='number')
//     {
//         console.log(arr[i]);
//     }
// }