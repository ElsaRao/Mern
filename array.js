let largeNumber = () => {

var numbers = [5, 10, 3 , 130, 200];
let greater_number = Math.max(...numbers);
console.log(greater_number + " is the Greatest number")
for(i = greater_number; i > 0; i--){
    console.log(i)
}
// function abc(){
//     console.log(numbers.reduce(largeNumber, 0))
// }
// abc()
}


largeNumber()
var arr =[2, 20, 40, 100];
var res = 0;
for (i=0; i < arr.length; i++) {
     res += arr[i]
}
console.log(res);