function numeroPrimo(num) {

    if(num % 2 === 0);

    for (var i = 3; i < num; i+=2) {
        if (num % i === 0) {
            return 0;
       
        }
    }
    return 1
}

console.log(mumeroPrimo(2))
