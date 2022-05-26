'use strict';

let time = prompt("Введите дату в формате YYYY-MM-D", "2022-05-26"),
    money = +prompt("Ваш бюджет на месяц?");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false
};

<<<<<<< HEAD
chooseExpenses();

function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++){
        let questionsOptExpenses = prompt("Статья необязательный расходов?");
        appData.optionalExpenses[i] = questionsOptExpenses;      
    }    
}

function detectDayBudget(){ 
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert("Budget per day:" + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100){
        console.log("Minimal level of budget")
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Middle level of budget")
    } else if (appData.moneyPerDay > 2000){
        console.log("You are rich!")
=======
for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", " "),
        b = prompt("Во сколько обойдется?", " ");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null
        && a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b; 
>>>>>>> parent of 09b0c2c... added functions
    } else {
        i--;
    };
       
};

appData.moneyPerDay = appData.budget/30;

alert("Budget per day:" + appData.moneyPerDay);
if (appData.moneyPerDay < 100){
    console.log("Minimal level of budget")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle level of budget")
} else if (appData.moneyPerDay > 2000){
    console.log("You are rich!")
} else {
    console.log("Error!")    
};