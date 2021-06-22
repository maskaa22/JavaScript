// 1) Напишіть код, який :
//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
//     b) робить шириниу елементу ul 400px
//     c) робить шириниу всіх елементів з класом linkList шириною 50%
//     d) отримує текст який зберігається в елементі з класом listElement2
//     e) отримує всі елементи li та змінює ім колір фону на сірий
//     f) отримує всі елементи 'a' та додає їм клас anchor
//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
//     l) отримати елементи p та змінити їм padding на 20px
//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

//     a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
    // let elementByIdMain=document.getElementById('main_header');
    // console.log(elementByIdMain);
    // elementByIdMain.innerText='mon-year(2021)';
    // elementByIdMain.style.color='pink';

//     b) робить шириниу елементу ul 400px
// let elementByTag=document.querySelector('ul');
// console.log(elementByTag);
// elementByTag.style.width='400px';

//     c) робить шириниу всіх елементів з класом linkList шириною 50%
// let elementByClass=document.getElementsByClassName('linkList');
// for (let i=0; i<elementByClass.length; i++)
// {
//     elementByClass[i].style.width='50%';
// }
// console.log(elementByClass);

//     d) отримує текст який зберігається в елементі з класом listElement2
// let elementByClassList=document.getElementsByClassName('listElement2');
// console.log(elementByClassList);
// for (let i=0; i<elementByClassList.length; i++)
// {
//     console.log(elementByClassList[i].textContent);
// }

//     e) отримує всі елементи li та змінює ім колір фону на сірий
// let elementByTagLi=document.querySelectorAll('li');
// console.log(elementByTagLi);
// for (let elem of elementByTagLi) 
// {
//     elem.style.color='silver';
// }

//     f) отримує всі елементи 'a' та додає їм клас anchor
// let elementByTagA=document.querySelectorAll('a');
// console.log(elementByTagA);
// for (let elemm of elementByTagA) 
// {
//     elemm.className='anchor';
// }

//     g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// let elementByTagA=document.querySelectorAll('a');
// for (let elemm of elementByTagA) 
// {
//     if (elemm.textContent==='link3')
//     {
//         elemm.style.fontSize='40px';
//     }
// }

//     h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// let elementByTagA=document.querySelectorAll('a');
// for (let elemm of elementByTagA) 
// {
//     elemm.classList.add(`element_${elemm.textContent}`);
// }

//     i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// let elementByClassSub=document.getElementsByClassName('sub-header');
// console.log(elementByClassSub);
// for (let elem of elementByClassSub)
// {
//     elem.style.color=prompt();
// }

//     j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// for (let elem of elementByClassSub)
// {
//     if (elem.textContent==='content 2 segment')
//     elem.style.color=prompt();
// }

//     k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// let elementByClssContent=document.getElementsByClassName('content_1');
// console.log(elementByClssContent);
// for (let elem of elementByClssContent)
// {
//     elem.innerText=prompt();
// }

//     l) отримати елементи p та змінити їм padding на 20px
// let elementByTagP=document.getElementsByTagName('p');
// console.log(elementByTagP);
// for (let elem of elementByTagP)
// {
//     elem.style.padding='20px';
// }

//     m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)

// let elementByClassText=document.getElementsByClassName('text2');
// console.log(elementByClassText);
// for (let elem of elementByClassText)
// {
//     elem.innerText='(mon-year)';
// }

//_________________________________________________________________________________
// 2. Створити форму з інпутом для введення ім'я, та action="index2.html".
// При відправці данних з форми, зберігати ім'я в localstorage, та переходити на index2.html.
// На index2.html виводити записане в localstorage ім'я в div

// let createdElementForm=document.createElement('form');
// createdElementForm.className='forma';

// let createdElementInput=createdElementForm.appendChild(document.createElement('input'));
// createdElementInput.className='inputik'
// createdElementInput.style.width='150px';
// createdElementInput.style.height='30px';

// document.body.append(createdElementForm, createdElementInput);

// createdElementForm.action='index2.html';
// createdElementInput.type='text';
// createdElementInput.value='Введите имя';
// // createdElementInput.name='myName';

// if (createdElementInput)
// {
//     createdElementInput.onchange = function() 
//     {
//         let js=JSON.stringify(createdElementInput.value);
//         localStorage.setItem('name', js);
//         createdElementForm.submit();    
//   };
  
// }

//_____________________________________________________________
// 3. Імітуємо наповнення інтернет магазину товарами :
// Створити форму з наступними полями :
// - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись.
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
