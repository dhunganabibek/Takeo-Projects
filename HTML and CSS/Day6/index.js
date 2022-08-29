const info = {
    firstName: "Bibek",
    lastName: "Dhungana",
    age: 25,
    printInfo: () => {
        console.log(`My name is ${firstName} ${lastName}. I am ${age} year old`);
    }
}

let {firstName:myFirstName, } = info;

console.log(myFirstName);










// const primeNumbers = [2,3,5,7,11,13];

// const [firstPrime, secondPrime,...otherPrime] = [...primeNumbers];

// console.log(firstPrime);
// console.log(secondPrime);
// console.log(otherPrime);