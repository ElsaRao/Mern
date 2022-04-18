let userAge = 35;
let currentYear = 2022;
let birthYear = currentYear-userAge;
console.log(birthYear)

for(let i = 1; i <= 5; i++){
    setTimeout(() => {
        console.log(i)
    }, i*1000)
}