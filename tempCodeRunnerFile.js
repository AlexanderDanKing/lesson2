let i = 0;
do {
    var a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется");
    if  ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
  && a != "" && b != "" && a.length < 50) {
    console.log("done");
    appData.expenses[a] = b;
    i++; 
  };
}
while ( i < 2 );