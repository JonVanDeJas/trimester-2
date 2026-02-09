function isEven(n) {
    return n % 2 === 0;
}

for (let i = 1; i <= 10; i++) {
    if (isEven(i)) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is oneven.");
    }
}
// Output:
// 1 is oneven.
// 2 is even.
// 3 is oneven.
// ...
// 10 is even.
