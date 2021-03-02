// var first = function first() {
//     var a = 2;
//     b=3; 
//     var second = function second(){
//         console.log(a+b);
//     };
//     setTimeout(second(), 2000);
// };

// var third = function third(){
//     console.log(a+b);
// }

// first();
// third();


var counter = function counter(){
    var count = 0,
    item1= document.querySelector("#item1");
    item2= document.querySelector("#item2");
    var print = function print(){
        console.log(count);
    }
}; 

item1.addEventListener("click", function count1(){
    count++;
    print();
});

item2.addEventListener("click", function count2(){
    count++;
    print();
}());