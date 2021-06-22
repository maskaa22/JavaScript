// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
//     a) отримує текст з параграфа з id "content"
//     b) отримує текст з блоку з id "rules"
//     c) замініть текст параграфа з id 'content' на будь-який інший
//     d) замініть текст параграфа з id 'rules' на будь-який інший
//     e) змініть кожному елементу колір фону на червоний
//     f) змініть кожному елементу колір тексту на синій
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
//     h) отримати всі елементи з класом fc_rules
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний

//     a) отримує текст з параграфа з id "content"
let elementById=document.getElementById('content');
console.log(elementById.textContent);
//     b) отримує текст з блоку з id "rules"
let elementByIdRul=document.getElementById('rules');
console.log(elementByIdRul.textContent);
//     c) замініть текст параграфа з id 'content' на будь-який інший
elementById.innerText='Bla-bla-bla...................'
//     d) замініть текст параграфа з id 'rules' на будь-який інший
elementByIdRul.innerText='New text. adijvaoid jfahdfah fblaihyvla afvnavadfv ahdbahbvahf'
//     e) змініть кожному елементу колір фону на червоний
elementById.style.backgroundColor='red';
elementByIdRul.style.backgroundColor='red';
//     f) змініть кожному елементу колір тексту на синій
elementById.style.color='blue';
elementByIdRul.style.color='blue';
//     g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let elem = document.querySelector("#rules");
console.log(elem.classList);
//     h) отримати всі елементи з класом fc_rules
let getElementClassFc = document.getElementsByClassName('fc_rules');
console.log(getElementClassFc);
//     i) поміняти колір тексту у всіх елементів fc_rules на червоний
for (let getElementClF of getElementClassFc)
{
    getElementClF.style.color = 'red';
}