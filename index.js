// var x=10;
// var x=20;
// console.log(x);

// let y=10;
// y=20;
// // let y=30;
// console.log(y);

// {
//     let y=10;
//     console.log(y);
// }

// function selamVer(){
//     let y="Merhaba";
//     console.log(y);
// }
// selamVer();

// const z=10;
// console.log(z);
// z=20;
// console.log(z);

//------------------------
// let surname="Mert";
// let age=30;

// console.log(`Merhaba, benim adım ${surname} ve ${age} yaşındayım.`);
// console.log("Merhaba, benim adım "+surname+" ve "+age+" yaşındayım.");

// //----------------------
// let numbers=[1,2,3,4,5];
// let [a,b,c]=numbers;
// console.log(a,b,c);

// let user={surname:"Mert", age:30};
// let {surname,age}=user;
// console.log(surname,age);

//--------------------
// let arr1=[1,2,3];
// let arr2=[...arr1,4,5];
// console.log(arr2);

// let obj1={surname:"Mert", age:30};
// let obj2={...obj1,city:"İstanbul"};
// console.log(obj2);

//---------------------
// function sum(...sayilar){
//     return sayilar.reduce((a,b)=>a+b,0);
// }
// console.log(sum(1,2,3,4));

// let [ilk,...gerikalan]=[10,20,30,40];
// console.log(ilk);
// console.log(gerikalan);

//---------------------

// function selamVer(isim="Ziyaretçi"){
//     console.log(`Merhaba ${isim}`);
// }
// selamVer();
// selamVer("Mert");

// let user={
//     name:"Mert",
//     sayHello(){
//         console.log(`Merhaba, ben ${this.name}`);
//     }
// };
// user.sayHello();