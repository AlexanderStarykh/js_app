'use strict';
    let startBtn = document.getElementById("start"),

        budgetValue = document.getElementsByClassName("budget-value")[0],
        daybudgetValue =document.getElementsByClassName("daybudget-value")[0],
        levelValue = document.getElementsByClassName("level-value")[0],
        expensesValue = document.getElementsByClassName("expenses-value")[0],
        optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value")[0],
        incomeValue = document.getElementsByClassName("income-value")[0],
        monthSavingsValue = document.getElementsByClassName("monthsavings-value")[0],
        yearSavingsValue = document.getElementsByClassName("yearsavings-value")[0],

        expensesItem = document.getElementsByClassName("expenses-item"),

        expensesBtn = document.getElementsByTagName("button")[0],
        optionalExpensesBtn = document.getElementsByTagName("button")[1],
        countBtn = document.getElementsByTagName("button")[2],
        optionalExpensesItem = document.querySelectorAll(".optionalexpenses-item"),

        incomeItem = document.querySelector('.choose-income'),
        checkboxSavings = document.querySelector('#savings'),
        sumValue = document.querySelector('.choose-sum'),
        percentValue = document.querySelector('.choose-percent'),
        yearValue = document.querySelector('.year-value'),
        monthValue = document.querySelector('.month-value'),
        dayValue = document.querySelector('.day-value');


    let money, time;

var switcher = {
    expensesBtnSwitch: false,
    optionalExpensesBtnSwitch: false,
    countBtnSwitch: false,
    incomeItemSwitch: false,
    checkboxSavingsSwitch: false
}

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    
    while (isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); 
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
    
    switcher.expensesBtnSwitch = true;
    switcher.optionalExpensesBtnSwitch = true;
    switcher.countBtnSwitch = true;
    switcher.incomeItemSwitch = true;
    switcher.checkboxSavingsSwitch = true;
});

expensesBtn.addEventListener('click', function(){
    if (switcher.expensesBtnSwitch != true){
        alert("Ошибка! Сначала нажмите кнопку \"Начать расчет\"!");
    }  else {
            let sum = 0;

            for (let i = 0; i < expensesItem.length; i++){
                let a = expensesItem[i].value,
                    b = expensesItem[++i].value;

                if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null
                    && a != '' && b != '' && a.length < 50 ) {
                    console.log("done");
                    appData.expenses[a] = b;
                    sum += +b; 
                } else {
                    i--;
                };
                
            }
            expensesValue.textContent = sum;
            appData.expensesSum = sum;
    } 
});

optionalExpensesBtn.addEventListener('click', function(){
    if (switcher.optionalExpensesBtnSwitch != true){
        alert("Ошибка! Сначала нажмите кнопку \"Начать расчет\"!");
    } else {
        for (let i = 0; i <= optionalExpensesItem.length; i++){
            let questionsOptExpenses = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = questionsOptExpenses;
            optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';      
        }
    }
});

countBtn.addEventListener('click', function(){
    if (switcher.countBtnSwitch != true){
        alert("Ошибка! Сначала нажмите кнопку \"Начать расчет\"!");
    } else {
        if (appData.budget != undefined){

            appData.moneyPerDay = +((appData.budget - appData.expensesSum) / 30).toFixed(2);
            daybudgetValue.textContent = appData.moneyPerDay;
    
    
            if (appData.moneyPerDay < 100) {
                levelValue.textContent = 'Минимальный уровень достатка';
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
                levelValue.textContent = 'Средний уровень достатка';
            } else if (appData.moneyPerDay > 2000) {
                levelValue.textContent = 'Высокий уровень достатка';
            } else {
                levelValue.textContent = 'Произошла ошибка';  
            } 
        } else {
            daybudgetValue.textContent = "Error";
        }
    } 
});

incomeItem.addEventListener('input', function(){
    if (switcher.incomeItemSwitch != true){
        alert("Ошибка! Сначала нажмите кнопку \"Начать расчет\"!");
    } else {
        let items = incomeItem.value;
        appData.income = items.split(", ");
        incomeValue.textContent = appData.income;
    }
});

checkboxSavings.addEventListener('click', function(){
    if (switcher.checkboxSavingsSwitch != true){
        alert("Ошибка! Сначала нажмите кнопку \"Начать расчет\"!");
    } else {
        if (appData.savings == true){
            appData.savings = false;
        } else {
            appData.savings = true;
        }
    }
});

sumValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
        percent = +percentValue.value;
        
        appData.monthIncome = ((sum/100/12)*percent).toFixed(2);
        appData.yearIncome = ((sum/100)*percent).toFixed(2);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

percentValue.addEventListener('input', function(){
    if (appData.savings == true){
        let sum = +sumValue.value,
        percent = +percentValue.value;
        
        appData.monthIncome = ((sum/100/12)*percent).toFixed(2);
        appData.yearIncome = ((sum/100)*percent).toFixed(2);

        monthSavingsValue.textContent = appData.monthIncome;
        yearSavingsValue.textContent = appData.yearIncome;
    }
});

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses:{},
    income: [],
    savings: false

};