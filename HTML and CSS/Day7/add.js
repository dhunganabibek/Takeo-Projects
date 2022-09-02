exports.add =   (a,b) =>  a+b;

function subtract(a,b){
    return a-b;
}
console.log(add(1,2));


exports.add = add;
exports.subtract = subtract;