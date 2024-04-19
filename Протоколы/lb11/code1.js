var n = prompt ('Введите натуральное n');
    n = parseInt (n);
    var number = 1;
    for(let i = 1; i <= n; i++)
    {
      number *= i;
    }
    alert(number);