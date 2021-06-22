// 1
let str = 'Привіт';
let num = 123;
let flag = true;
let txt = true;
console.log(typeof str);
console.log(typeof num);
console.log(typeof flag);
console.log(typeof txt);

// 2
let a1 = 2;
let a2 = 4;
let a3 = 6;
let a4 = 16;
let a5 = 21;
console.log(a1+a4+a4);
console.log(a1*a2+a2);
console.log(a4*a2+a1);
console.log(a4*a2+a3*a2+a1);
console.log(a5*a2+a3/a1);

// 3
let a6 = 5/100*3;
let a7 = 3/100*5;
let a8 = 5+'3';
let a9 = '5'-3;
let a10 = 75+'кг';
console.log (a6, a7, a8, a9, a10);

// 4
let height = 23;
let width = 10;
let s = height*width;
console.log(s);

// 5
let heightC = 10;
let dC = 4;
let p = 3.14;
let r = dC/2;
let v = p*Math.pow(r,2)*heightC;
console.log(Math.round(v));

// 6
let n =3;
let m = 4;
let k = Math.sqrt(Math.pow(n,2)+Math.pow(m,2));
console.log(k);

// 8
let fio='Павлюк Марія Ігорівна';
let age=25;
let hobby='вокал';
alert(`${fio}\n ${age}\n ${hobby}`);


//9
let str1 = 'Кто ';
let str2 = 'ты ';
let str3 = 'такой?';
let concatenation = str1+str2+str3;
document.write(concatenation);

//10
let stri = "20";
let a = 5;
document.write('<hr>');
document.write(stri + a + "<br/>");//тип строка, потому что думает что это конкатенация
document.write(stri - a + "<br/>");//число
document.write(stri * "2" + "<br/>");//число
document.write(stri / 2 + "<br/>");//число

//13
let numm1 = +prompt('Первое число');
let numm2 = +prompt('Второе число');
let rez = numm1+numm2;
alert(rez);

//14
let nameN = prompt('Введите имя');
let secondN = prompt('Введите фамилию');
let ageN = prompt('Введите возраст');
alert(`Доброго вечера ${nameN} ${secondN}, мои поздравления что Вам ${ageN}`);


