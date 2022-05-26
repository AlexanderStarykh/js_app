'use strict';

    let money, time;

function start(){
    time = prompt("Введите дату в формате YYYY-MM-D", "2022-05-26");
    
    while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: true,
    chooseExpenses: function(){
        for (let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
                b = prompt("Во сколько обойдется?", " ");
            if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null
                && a != '' && b != '' && a.length < 50 ) {
                console.log("done");
                appData.expenses[a] = b; 
            } else {
                i--;
            };
               
        }
    },
    chooseOptExpenses: function(){
        for (let i = 1; i <= 3; i++){
            let questionsOptExpenses = prompt("Статья необязательный расходов?");
            appData.optionalExpenses[i] = questionsOptExpenses;      
        }
    },
    detectLevel: function(){
        if (appData.moneyPerDay < 100){
            console.log("Minimal level of budget")
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Middle level of budget")
        } else if (appData.moneyPerDay > 2000){
            console.log("You are rich!")
        } else {
            console.log("Error!")    
        };        
    },
    detectDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed(2);
        alert("Budget per day:" + appData.moneyPerDay);
    },
    checkSavings: function(){
        if (appData.savings == true){
            let save = +prompt("Какова сумма накоплений?", ''),
                 percent = +prompt("Which percent?", '');
     
             appData.monthIncome = ((save/100/12)*percent).toFixed(2);
             alert("Month income is: " + appData.monthIncome);
        }
    },
    chooseIncome: function(){
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        } else {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort();
        }

        appData.income.forEach(function(item, i){
            alert("Способ доп. заработка: " +(i+1) + ' - ' + item);
        });
    }
};

 for (let key in appData){
     console.log("Наша программа включает в себя данные: " + key + ' - ' + appData[key]);
 }