const nums = [12, 23, 32, 32, 53, 64, 75, 86, 97, 108];
let sumOfEvens = 0;
let someOfOdds = 0;

for(let i = 0; i< nums.length; i++){
    const x = nums[i];
    if(x % 2 === 0){
        sumOfEvens += x;
    } else {
        someOfOdds += x;
    }
}
console.log("Sum of even numbers:", sumOfEvens);
console.log("Sum of odd numbers:", someOfOdds);