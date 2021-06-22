// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом

// class Sinderella {
//     constructor(name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
// }

// class Princ {
//     constructor(name, age, shoeSize ){
//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;
//     }

//     size(arr) {
//         let find = null;
//         for (const item of arr) 
//         {
//             if (item.footSize === this.shoeSize) {
//                 find = item;
//             }
//         }
//         if (find) {
//             console.log('My cinderella name' + ' ' + find.name)
//         } else {
//             console.log('I not find my cinderella');
//         }
//     }
// }
// let sinderela = new Sinderella ('Maria', 25, 32);
// let sinderela2 = new Sinderella ('Katia', 20, 37);
// let sinderela3 = new Sinderella ('Alina', 15, 37);
// let sinderela4 = new Sinderella ('Olia', 22, 36);
// let sinderela5 = new Sinderella ('Cveta', 17, 38);
// let sinderela6 = new Sinderella ('Nastia', 21, 41);
// let sinderela7 = new Sinderella ('Veronika', 25, 39);
// let sinderela8 = new Sinderella ('Vika', 29, 39);
// let sinderela9 = new Sinderella ('Rita', 23, 36);
// let sinderela10 = new Sinderella ('Malvina', 18, 37);
// let arr=[sinderela, sinderela2, sinderela3, sinderela4, sinderela5, sinderela6, sinderela7, sinderela8, sinderela9, sinderela10];
// let prin = new Princ ('Vadim', 25, 39);
// prin.size(arr);

//____________________________________________________________________________________________________
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить

// function Sinderella (name, age, footSize)
// {
    
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
    
// }

// function Princ (name, age, shoeSize )
// {

//         this.name = name;
//         this.age = age;
//         this.shoeSize = shoeSize;

//     this.size = function (arr) 
//     {
//         this.arr=arr;
//         let find = null;
//         for (const item of this.arr) 
//         {
//             if (item.footSize === this.shoeSize) {
//                 find = item;
//             }
//         }
//         if (find) {
//             console.log('My cinderella name' + ' ' + find.name)
//         } else {
//             console.log('I not find my cinderella');
//         }
//     }
// }
// let sinderela = new Sinderella ('Maria', 25, 32);
// let sinderela2 = new Sinderella ('Katia', 20, 37);
// let sinderela3 = new Sinderella ('Alina', 15, 37);
// let sinderela4 = new Sinderella ('Olia', 22, 36);
// let sinderela5 = new Sinderella ('Cveta', 17, 38);
// let sinderela6 = new Sinderella ('Nastia', 21, 41);
// let sinderela7 = new Sinderella ('Veronika', 25, 39);
// let sinderela8 = new Sinderella ('Vika', 29, 39);
// let sinderela9 = new Sinderella ('Rita', 23, 36);
// let sinderela10 = new Sinderella ('Malvina', 18, 37);
// let arr=[sinderela, sinderela2, sinderela3, sinderela4, sinderela5, sinderela6, sinderela7, sinderela8, sinderela9, sinderela10];
// let prin = new Princ ('Vadim', 25, 36);
// prin.size(arr);


//________________________________________________________________________________________________
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту

// function Tag (titleTag, actionTag,atribytesTag)
// {
//     this.titleTag=titleTag;
//     this.actionTag=actionTag;
//     this.atribytesTag=atribytesTag;
// }
// let titleA='<a>';
// let actionA='Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.';
// let atribetA=[
//     {nam:'accesskey', opuc: 'Активация ссылки с помощью комбинации клавиш.'},
//     {nam:'href', opuc:'Задает адрес документа, на который следует перейти.'}
// ];
// let a = new Tag (titleA, actionA, atribetA);
// console.log(a);

// let titleDiv='<div>';
// let actionDiv='Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.';
// let atribetDiv=[
//     {nam:'align', opuc: 'Задает выравнивание содержимого тега <div>.'},
//     {nam:'title', opuc:'Добавляет всплывающую подсказку к содержимому.'}
// ];
// let div = new Tag (titleDiv, actionDiv, atribetDiv);
// console.log(div);

// let titleH='<h1>';
// let actionH='HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.';
// let atribetH=[
//     {nam:'align', opuc: 'Определяет выравнивание заголовка.'},
//     {nam:'class', opuc:'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'}
// ];
// let h1 = new Tag (titleH, actionH, atribetH);
// console.log(h1);

// let titleS='<span> ';
// let actionS='Тег <span> предназначен для определения строчных элементов документа.';
// let atribetS=[
//     {nam:'adir', opuc: 'Задает направление и отображение текста — слева направо или справа налево.'},
//     {nam:'hidden', opuc:'Скрывает содержимое элемента от просмотра.'}
// ];
// let span = new Tag (titleS, actionS, atribetS);
// console.log(span);

// let titleI='<input>';
// let actionI='Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.';
// let atribetI=[
//     {nam:'accept', opuc: 'Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов.'},
//     {nam:'accesskey', opuc:'Переход к элементу с помощью комбинации клавиш.'}
// ];
// let input = new Tag (titleI, actionI, atribetI);
// console.log(input);

// let titleF='<form>';
// let actionF='Тег <form> устанавливает форму на веб-странице.';
// let atribetF=[
//     {nam:'name', opuc: 'Имя формы.'},
//     {nam:'novalidate', opuc:'Отменяет встроенную проверку данных формы на корректность ввода.'}
// ];
// let form = new Tag (titleF, actionF, atribetF);
// console.log(form);

// let titleO='<option>';
// let actionO='Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.';
// let atribetO=[
//     {nam:'label', opuc: 'Указание метки пункта списка.'},
//     {nam:'value', opuc:'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.'}
// ];
// let option = new Tag (titleO, actionO, atribetO);
// console.log(option);

// let titleSelect='<select>';
// let actionSelect='Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором, как показано далее.';
// let atribetSelect=[
//     {nam:'form', opuc: 'Связывает список с формой.'},
//     {nam:'multiple', opuc:'Позволяет одновременно выбирать сразу несколько элементов списка.'}
// ];
// let select = new Tag (titleSelect, actionSelect, atribetSelect);
// console.log(select);