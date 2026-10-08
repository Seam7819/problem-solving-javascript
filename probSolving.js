const num = [12,23,21,12,23,34,34,65,12,34,54,33,67,54,22,33]

function findLargest(value){
    let largest = value[0];
    for(i=0;i < value.length; i++){
        const maxums = value[i];
        if(maxums > largest){
            largest = maxums;
        }
    }
    return largest;
}

console.log(findLargestNumber(num));