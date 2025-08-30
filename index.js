// const person={
//     fullname:"Mert Özen",
//     sayName:function(){
//         console.log(this.fullname);
//     }
// };

// person.sayName();

// const person2={
//     fullname:"Mert Özen",
//     sayName:()=>{
//         console.log(this.fullname);
//     }
// };

// person2.sayName();

//-----------

// function normalFunc(a,b){
//     console.log(arguments);
// }

// normalFunc(2,3);

// const arrowFunc=(a,b)=>{
//     console.log(arguments);
// }

// arrowFunc(2,3);

// const arrowFunc=(...args)=>{
//     console.log(args);
// }

// arrowFunc(2,3);

//-----------

// function Car(model){
//     this.model=model;
// }
// const car1=new Car("BMW");
// console.log(car1.model);

// const Car2=(model)=>{
//     this.model=model;
// };

// const car2=new Car2("Audi");

//------------

// function sum(a,b){
//     return a+b;
// }

// const sum2=(a,b)=>a+b;

// console.log(sum(3,4));
// console.log(sum2(5,7));

//---------------

// const user={
//     fullname:"Mert Özen",
//     sayFullName:function(){
//         console.log(this.fullname);
//     }
// };

// user.sayFullName();

// // const say=user.sayFullName;
// // say();

// // const say=user.sayFullName.bind(user);
// // say();

//-------------------

// const person={fullName:"Mert Özen"};
// function sayHello(message){
//     console.log(`${message},${this.fullName}`);
// }

// sayHello.call(person,"Merhaba");
// sayHello.apply(person,["Selam"]);

// const boundFunc=sayHello.bind(person);
// boundFunc("Hoşgeldin");

//--------------------

// const user1={
//     fullName:"Mert",
//     sayFullName(){
//         console.log(this.fullName);
//     }
// };

// const user2={fullName:"Mehmet"};

// user1.sayFullName.call(user2);

