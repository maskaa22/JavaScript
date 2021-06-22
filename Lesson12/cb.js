function schedule (clock) 
{
      setTimeout ( () => 
        {
            clock()
        }, 2000)   
}
let time=6;
let money=150;
schedule(() => 
{
    if (time)
    {
        console.log('Прокинулася')
    }
    else console.log('Вимнула будильник');
    time +=0.10;
});

schedule(() => 
{
    if (time<6.30)
    {
        console.log('Вмилася')
    }
    else console.log('Води нема, буду не вмита');
    time +=0.20;
});

schedule(() => 
{
    if (time<6.40)
    {
        console.log('Позаймалася')
    }
    else console.log('Буду ходити сонна');
    time +=0.40;
});

schedule(() => 
{
    if (time<7.20 && money>10)
    {
        money -=10;
        console.log(`Доїхала на роботу, залишилося ${money} гривень`)
    }
    else console.log('Пішки не піду');
    time +=0.20;
});

schedule(() => 
{
    if (time<7.50)
    {
        console.log('Почонаємо працювати')
    }
    else console.log('За запізнення не хвалять');
    time +=8;
    money +=100;
});

schedule(() => 
{
    if (time>16)
    {
        console.log('Смачного')
        money -=100;
    }
    else console.log('Сиди голодна');
    time +=0.40;
});