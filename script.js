'use strict';
let money = +prompt("Ваш бюджет на месяц?"),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
  appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++){
    var a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется");

    if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
    && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
    }
};

// let i = 0;
// while ( i < 2 ) {
//     var a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется");
//        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//         && a != "" && b != "" && a.length < 50) {
//     appData.expenses[a] = b;
//     i++;
    //  };
// };
// console.log("done");

// let i = 0;
// do {
//     var a = prompt("Введите обязательную статью расходов в этом месяце"),
//     b = prompt("Во сколько обойдется");
//     if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
//   && a != "" && b != "" && a.length < 50) {
//     console.log("done");
//     appData.expenses[a] = b;
//     i++; 
//   };
// }
// while ( i < 2 );



appData.moneyPerDay = (appData.budget - b) / 30;

alert("Ежедневный бюджет: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay >100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
