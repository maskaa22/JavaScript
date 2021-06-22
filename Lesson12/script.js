function upForBad (clock) 
{
    return new Promise ((resolve, reject) => 
    {
      setTimeout ( () => 
        {
            if (clock)
            {
                resolve('Прокинулася');
            } 
            else reject('Вимнула будильник');
        }, 2000)  
    }) 
}

function washUp (water)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (water)
            {
                resolve('Вмилася');
            } 
            else reject('Води нема, буду не вмита');
        }, 700)
    })
}

function doExercises (music)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (music)
            {
                resolve('Позаймалася');
            } 
            else reject('Буду ходити сонна');
        }, 1000)
    })
}

let money=150;

function searchForTransport (moneyForTransport)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (moneyForTransport>10)
            {
                money -=10;
                resolve(`Доїхала на роботу, залишилося ${money} гривень`);
            } 
            else reject('Пішки не піду');
        }, 250)
    })
}

function goWark (working)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (working)
            {
                money +=100;
                resolve(money);
            } 
            else reject('Потрібно більше працювати');
        }, 3000)
    })
}

function goCafe (moneyForEat)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (moneyForEat>100)
            {
                money -=100;
                resolve(money);
            } 
            else reject('Сиди голодна');
        }, 500)
    })
}

function goShopforAnimals (moneyForShopAnimals)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (moneyForShopAnimals>20)
            {
                money -=20;
                resolve(money);
            } 
            else reject('Котик буде голодник');
        }, 900)
    })
}

function goShopEatForMy (moneyForMy)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (moneyForMy>100)
            {
                money -=100;
                resolve(money);
            } 
            else reject('На дієті');
        }, 1200)
    })
}

function goHome (going)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (going)
            {
                resolve('Нарешті дома');
            } 
            else reject('Пригоди на дорозі');
        }, 400)
    })
}

function toCookDinner (cokking)
{
    return new Promise ((resolve, reject) => 
    {
        setTimeout ( () =>
        {
            if (cokking)
            {
                resolve('Можна сідати вечеряти');
            } 
            else reject('Краще піти спати');
        }, 3000)
    })
}

// upForBad(true)
//     .then(up => 
//     {
//         console.log(up);
//         return washUp(true)
//     })
//     .then(washForUp => 
//     {
//         console.log(washForUp);
//         return doExercises(true)
//     })
//     .then(musicForExercises => 
//     {
//         console.log(musicForExercises);
//         return searchForTransport(money)
//     })
//     .then(transport => 
//     {
//         console.log(transport);
//         return goWark(true)
//     })
//     .then(work => 
//     {
//         console.log(work, 'гривень маю в гаманці');
//         return goCafe(money)
//     })
//     .then(moneyAfterWork => 
//     {
//         console.log('Залишки грошей після кафе', moneyAfterWork, 'грн.');
//         return goShopforAnimals(money)
//     })
//     .then(moneyAfterCafe => 
//     {
//         console.log(moneyAfterCafe, '- залишок після зоомагазину');
//         return goShopEatForMy(money)
//     })
//     .then(moneyForMy => 
//     {
//         console.log(moneyForMy, '- залишок грошей на завтрашній день');
//         return goHome(true)
//     })
//     .then(home => 
//     {
//         console.log(home);
//         return toCookDinner(true)
//     })
//     .then(cokking => 
//     {
//         console.log(cokking)
//     })
//     .catch(result => 
//     {
//         console.log(result)
//     })
//     .finally(() => 
//     {
//         console.log('Фініш')
//     })

async function schedule()
{
    let resultAfterClock = await upForBad(true);
    console.log(resultAfterClock);

    let resultAfterUp = await washUp(true);
    console.log(resultAfterUp);

    let resultAfterWash = await doExercises(true);
    console.log(resultAfterWash);

    let resultAfterExersises = await searchForTransport(money);
    console.log(resultAfterExersises);

    let resultAfterTransport = await goWark(true);
    console.log(resultAfterTransport, 'гривень маю в гаманці');

    let resultAfterWork = await goCafe(money);
    console.log('Залишки грошей після кафе', resultAfterWork, 'грн.');

    let resultAfterCafe = await goShopforAnimals(money);
    console.log(resultAfterCafe, '- залишок після зоомагазину');

    let resultAfterAnimals = await goShopEatForMy(money);
    console.log(resultAfterAnimals, '- залишок грошей на завтрашній день');

    let resultAfterMy = await goHome(true);
    console.log(resultAfterMy);

    let resultAfterHome = await toCookDinner(true);
    console.log(resultAfterHome);
}
schedule();