// function context(){
//     console.log(this);
// }

// context();

// const obj = {
//     name: "Raju",
//     getName: function(){
//         console.log(this.name);
//     }
// };

// const b = obj.getName;
// b();



class Context{
    constructor(){

    }

    fun1(){
        console.log(this);
    }
}