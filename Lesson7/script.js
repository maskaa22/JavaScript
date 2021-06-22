//1
// let a1='hello';
// let a2='owu';
// let a3='com';
// let a4='ua';
// let a5=1;
// let a6=10;
// let a7=-999;
// let a8=123;
// let a9=3.14;
// let a10=2.7;
// let a11=16;
// let a12=true;
// let a13=false;
// console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
// alert(`${a1} ${a2} ${a3} ${a4} ${a5} ${a6} ${a7} ${a8} ${a9} ${a10} ${a11} ${a12} ${a13}`);
// document.write(`${a1} ${a2} ${a3} ${a4} ${a5} ${a6} ${a7} ${a8} ${a9} ${a10} ${a11} ${a12} ${a13} <hr>`);

//2
// a1='Vova';
// a2='like';
// a3='clinning';
// a4=52;
// a5=29;
// a6=33;
// a7='car';
// a8=55;
// a9='level';
// a10='up';
// a11=598;
// a12=false;
// a13='Lola';
// console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13);
// alert(`${a1} ${a2} ${a3} ${a4} ${a5} ${a6} ${a7} ${a8} ${a9} ${a10} ${a11} ${a12} ${a13}`);
// document.write(`${a1} ${a2} ${a3} ${a4} ${a5} ${a6} ${a7} ${a8} ${a9} ${a10} ${a11} ${a12} ${a13}`);

//3
// let firstName='Павлюк ';
// let middleName='Марія ';
// let lastName='Ігорівна';
// let person=firstName+middleName+lastName;
// alert(person);

//4
// let firstName=prompt('Як Вас звати');
// let lastName=prompt('Як Вас по батькові');
// let age=prompt('Скільки Вам років');
// alert(`"Вітаю ${firstName} ${lastName}. Тобі ${age} років".`);

//5
// let a = 100; 
// let b = '100'; 
// let c = true;
// console.log(typeof a, typeof b, typeof c);

//6
// let a1=5<6;
// let a2=5>6;
// let a3=5==6;
// let a4=5===6;
// let a5=10==10;
// let a6=10===10;
// let a7=10!=10;
// let a8=10<10;
// let a9=10>10;
// let a10=123!=123;
// let a11=123=='123';
// console.log(a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11);

//____________________________________
//_____Додаткове_____________________
//__________________________________

console.log(132 > 100 && 45 < 12 );//f
console.log(34 > 33 && 23 < 90 );//t
console.log(99 > 100 && 45 > 12 );//f
console.log(132 > 100 || 45 < 12 );//t
console.log(111 > 11 || 45 < 111 );//t
console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) );//t
console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) );//t
console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) );//f
console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 ));//t
console.log(!!'-1');//t
console.log(!!-1);//t
console.log(!!'0');//t
console.log(!!'null');//t
console.log(!!'undefined');//t

console.log(!!(3/'owu'));//t                         ????????  Чому тут false????/

console.log((111 > 11 || 45 < 111) ||  !!'0');//t
console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 ));//f