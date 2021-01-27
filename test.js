function PrimeNumberChecker(number) {
    let flag = true;

    for (i = 2; i < number; i++) {
        if (number % i === 0) {
            flag = false;
        }
    }
    console.log(flag);
}

PrimeNumberChecker(7) 