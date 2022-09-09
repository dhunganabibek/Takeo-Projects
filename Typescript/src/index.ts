function getArray<T>(items:T[]){
    return new Array<T>().concat(items); 
}

const outputNumber = getArray<number>([1,2,3,4,5]);
outputNumber.push(10);

console.log(1 + 19 + "1");