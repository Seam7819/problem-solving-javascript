const num = [12,23,21,12,23,34,34,65,12,34,54,33,67,54,22,33]

function findLargestNumber(arr){
    let largest = arr[0];
    for(let i =0; i< arr.length;i++){
        const nums = arr[i];
        if(nums> largest){
            largest = nums;
        }
    }
    return largest;
}

console.log(findLargestNumber(num));