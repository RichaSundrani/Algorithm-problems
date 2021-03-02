function method1() {
    console.log("Method1...");
    return 15;
}

function method2() {
    console.log("Method2...");
    return 30;
}

function method3(n1, n2) {
    console.log("Method3...");
    return n1 + n2;
}


console.log("calling Method1");
method1();
console.log("End Method1");

console.log("calling Method2");
method2();
console.log("End Method2");




// Sleep method
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

console.log("Hello");
sleep(2000);
console.log("World!");