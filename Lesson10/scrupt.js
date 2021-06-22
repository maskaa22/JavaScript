// 1 створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами User
// function User(id, name, surname, email, phone) 
// {
//     this.id=id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;

// }
// let arr=[];
// let arr1=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr2=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr3=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr4=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr5=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr6=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr7=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr8=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr9=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr10=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10]
// console.log(arr);

//___________________________________________________________________________________________
// 2 створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// class Client 
// {
//     constructor (id, name, surname, email, phone, order=[])
//     {
//         this.id=id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order=order;
//     }
// }
// let arr=[];
// let arr1=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Milk', 'Cola', 'Fanta']);
// let arr2=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Bred', 'Water', 'Cololat']);
// let arr3=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Cola', 'Fanta']);
// let arr4=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Fanta', 'Muka']);
// let arr5=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Cocos', 'Muka']);
// let arr6=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Muka', 'Water']);
// let arr7=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Water', 'sds', 'sdsdsdsd']);
// let arr8=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['sdcsdc', 'qwesdfvg', 'wasdfv']);
// let arr9=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['sadf', 'asdf']);
// let arr10=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['aswdfg', 'aqwsedfg', 'ascdf', 'xadcvgb','sdf']);
// arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10]
// console.log(arr);

//________________________________________________________________________________
// 3 Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. 
//додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// function Car (model, burobnuk, years, maxspeed, obem)
// {
//     this.model=model;
//     this.burobnuk=burobnuk;
//     this.years=years;
//     this.maxspeed=maxspeed;
//     this.obem=obem;

//     //this.drivers=[];

//     this.drive = function()
//     {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function ()
//     {
//         console.log(`Модель машини - ${this.model}, виробник - ${this.burobnuk}, ${this.years} року випуску, максимальна швидкість якої - ${this.maxspeed} та обєм двигуна - ${this.obem}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed)
//     {
//         this.maxspeed=this.maxspeed+newSpeed;
//         console.log(this.maxspeed);
//     }
//     this.changeYear = function (newValue)
//     {
//         this.years=this.years+newValue;
//         console.log(this.years)
//     }
//     this.addDriver = function (driver)
//     {
//         this.driver=driver;
//         console.log(this.driver)  
//     }
// }
// let newCar= new Car ('Chevrole', 'USA', 2007, 220, 1.6);
// let newCar2= new Car ('Skoda', 'Germani', 2006, 200, 1.2);
// let newCar3= new Car ('Reno', 'France', 2010, 260, 1.6);
// newCar.drive();
// newCar2.drive();
// newCar3.drive();
// console.log('_______________________________________________________________')
// newCar.info();
// newCar2.info();
// newCar3.info();
// console.log('_______________________________________________________________')
// newCar.increaseMaxSpeed(120);
// newCar2.increaseMaxSpeed(50);
// newCar3.increaseMaxSpeed(30);
// console.log('_______________________________________________________________')
// newCar.changeYear(10);
// newCar2.changeYear(5);
// newCar3.changeYear(2);
// console.log('_______________________________________________________________')
// newCar.addDriver({imya:'vasia', age:26, famile:true, yeasdriv:2});
// newCar2.addDriver({imya:'kostia', age:20, famile:false, yeasdriv:2});
// newCar3.addDriver({imya:'egor', age:23, famile:true, yeasdriv:5});
// console.log(newCar);
// console.log(newCar2);
// console.log(newCar3);

// Після вчорашнього зуму трошки переробила

// let Car = new function () 
// {
//     this.model='Chevrole';
//     this.burobnuk='USA';
//     this.years=2007;
//     this.maxspeed=220;
//     this.obem=1.6;

//     this.drive = function()
//     {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     this.info = function ()
//     {
//         console.log(`Модель машини - ${this.model}, виробник - ${this.burobnuk}, ${this.years} року випуску, максимальна швидкість якої - ${this.maxspeed} та обєм двигуна - ${this.obem}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed)
//     {
//         this.maxspeed=this.maxspeed+newSpeed;
//         console.log(this.maxspeed);
//     }
//     this.changeYear = function (newValue)
//     {
//         this.years=this.years+newValue;
//         console.log(this.years)
//     }
//     this.addDriver = function (driver)
//     {
//         this.driver=driver;
//         console.log(this.driver)  
//     }

// };
// Car.drive();
// Car.info();
// Car.increaseMaxSpeed(120);
// Car.changeYear(10);
// Car.addDriver({imya:'vasia', age:26, famile:true, yeasdriv:2});
//_________________________________________________________________________________________________
// 4 Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// class Car 
// {
//     constructor (model, burobnuk, years, maxspeed, obem) 
//     {
//     this.model=model;
//     this.burobnuk=burobnuk;
//     this.years=years;
//     this.maxspeed=maxspeed;
//     this.obem=obem;
//     }
    

//     drive()
//     {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     info()
//     {
//         console.log(`Модель машини - ${this.model}, виробник - ${this.burobnuk}, ${this.years} року випуску, максимальна швидкість якої - ${this.maxspeed} та обєм двигуна - ${this.obem}`)
//     }
//     increaseMaxSpeed(newSpeed)
//     {
//         this.maxspeed=this.maxspeed+newSpeed;
//         console.log(this.maxspeed);
//     }
//     changeYear(newValue)
//     {
//         this.years=this.years+newValue;
//         console.log(this.years)
//     }
//     addDriver(driver)
//     {
//         this.driver=driver;
//         console.log(this.driver)  
//     }
// }
// let newCar= new Car ('Chevrole', 'USA', 2007, 220, 1.6);
// let newCar2= new Car ('Skoda', 'Germani', 2006, 200, 1.2);
// let newCar3= new Car ('Reno', 'France', 2010, 260, 1.6);
// newCar.drive();
// newCar2.drive();
// newCar3.drive();
// console.log('_______________________________________________________________')
// newCar.info();
// newCar2.info();
// newCar3.info();
// console.log('_______________________________________________________________')
// newCar.increaseMaxSpeed(120);
// newCar2.increaseMaxSpeed(50);
// newCar3.increaseMaxSpeed(30);
// console.log('_______________________________________________________________')
// newCar.changeYear(10);
// newCar2.changeYear(5);
// newCar3.changeYear(2);
// console.log('_______________________________________________________________')
// newCar.addDriver({imya:'vasia', age:26, famile:true, yeasdriv:2});
// newCar2.addDriver({imya:'kostia', age:20, famile:false, yeasdriv:2});
// newCar3.addDriver({imya:'egor', age:23, famile:true, yeasdriv:5});
// console.log(newCar);
// console.log(newCar2);
// console.log(newCar3);


// Після вчорашнього зуму трошки переробила

// let Car = new class { constructor() 
// {
//     this.model='Chevrole';
//     this.burobnuk='USA';
//     this.years=2007;
//     this.maxspeed=220;
//     this.obem=1.6;
// }

    
//     drive()
//     {
//         console.log(`Їдемо зі швидкістю ${this.maxspeed} на годину`)
//     }
//     info()
//     {
//         console.log(`Модель машини - ${this.model}, виробник - ${this.burobnuk}, ${this.years} року випуску, максимальна швидкість якої - ${this.maxspeed} та обєм двигуна - ${this.obem}`)
//     }
//     increaseMaxSpeed(newSpeed)
//     {
//         this.maxspeed=this.maxspeed+newSpeed;
//         console.log(this.maxspeed);
//     }
//     changeYear(newValue)
//     {
//         this.years=this.years+newValue;
//         console.log(this.years)
//     }
//     addDriver(driver)
//     {
//         this.driver=driver;
//         console.log(this.driver)  
//     }

// };
// Car.drive();
// Car.info();
// Car.increaseMaxSpeed(120);
// Car.changeYear(10);
// Car.addDriver({imya:'vasia', age:26, famile:true, yeasdriv:2});

//_________________________________________________________________________________________________
// 5 Взяти масив з завдання 1.
// - Відфільтрувати , залишивши тільки об'єкти з парними id
// - Відсортувати його по id. по зростанню
// - Відсортувати його по id. по спаданню
// function User(id, name, surname, email, phone) 
// {
//     this.id=id;
//     this.name = name;
//     this.surname = surname;
//     this.email = email;
//     this.phone = phone;

// }
// let arr=[];
// let arr1=new User(1, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr2=new User(2, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr3=new User(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr4=new User(4, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr5=new User(5, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr6=new User(6, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr7=new User(7, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr8=new User(8, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr9=new User(9, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// let arr10=new User(10, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902);
// arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10]
// console.log(arr);
// let filtre=arr.filter(function (user){
//     return (user.id%2==0)
// });
// console.log(filtre);
// let sort=arr.sort(function (user1, user2){
//     return user1.id-user2.id;
// });
// console.log(sort);
// let sortmin=arr.sort(function (user1, user2){
//     return user2.id-user1.id;
// });
// console.log(sortmin);

//___________________________________________________________________________________
// 6. Взяти масив з завдання 2.
//     Відсортувати його по кількості товарів в полі order. по спаданню
// class Client 
// {
//     constructor (id, name, surname, email, phone, order=[])
//     {
//         this.id=id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone;
//         this.order=order;
//     }
// }
// let arr=[];
// let arr1=new Client(1, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Milk', 'Cola', 'Fanta']);
// let arr2=new Client(2, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Bred', 'Water', 'Cololat']);
// let arr3=new Client(3, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Cola', 'Fanta']);
// let arr4=new Client(4, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Fanta', 'Muka']);
// let arr5=new Client(5, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Cocos', 'Muka']);
// let arr6=new Client(6, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Muka', 'Water']);
// let arr7=new Client(7, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['Water', 'sds', 'sdsdsdsd']);
// let arr8=new Client(8, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['sdcsdc', 'qwesdfvg', 'wasdfv']);
// let arr9=new Client(9, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['sadf', 'asdf']);
// let arr10=new Client(10, 'Maria', 'Pavlyk', 'mariapavlyk@ukr.net', 0935631902, ['aswdfg', 'aqwsedfg', 'ascdf', 'xadcvgb','sdf']);
// arr=[arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8, arr9, arr10]

// let sortmin = arr.sort(function(user1, user2){
//     return user2.order.length-user1.order.length;
// });
// console.log(sortmin);
