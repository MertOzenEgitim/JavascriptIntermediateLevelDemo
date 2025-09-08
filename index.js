// function blockUI() {
//     const start = Date.now();
//     while (Date.now() - start < 5000) {
//       // 5 saniye boyunca CPU'yu meşgul et
//     }
//   }
//   function helloWorld(){
//     console.log("Merhaba Dünya");
//   }

// console.log("A");
// setTimeout(() => {
//     console.log("B");
// }, 2000);
// console.log("C");

//callback

// function getUser(callback) {
//   console.log("Kullanıcı bilgisi alınıyor...");
//   setTimeout(() => {
//     callback({ id: 1, name: "Mert Özen" });
//   }, 2000);
// }

// getUser((user) => {
//   console.log("Kullanıcı:", user);
// });


//callback hell

// Kullanıcı getir → Kullanıcının postlarını getir
// function getUser(id, callback) {
//   fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json())
//     .then(data => callback(null, data))
//     .catch(err => callback(err));
// }

// function getPosts(userId, callback) {
//   fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then(res => res.json())
//     .then(data => callback(null, data))
//     .catch(err => callback(err));
// }

// // İç içe callbackler (hell)
// getUser(1, (err, user) => {
//   if (err) return console.error(err);
//   console.log("Kullanıcı:", user.name);

//   getPosts(user.id, (err, posts) => {
//     if (err) return console.error(err);
//     console.log("İlk post:", posts[0].title);
//   });
// });

//çözüm:promise

// function getUser(id) {
//   return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//     .then(res => res.json());
// }

// function getPosts(userId) {
//   return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//     .then(res => res.json());
// }

// getUser(1)
//   .then(user => {
//     console.log("Kullanıcı:", user.name);
//     return getPosts(user.id);
//   })
//   .then(posts => {
//     console.log("İlk post:", posts[0].title);
//   })
//   .catch(err => console.error("Hata:", err))
//   .finally(()=>{console.log("Her türlü çalıştır")});


// async function fetchData() {
//   try {
//     const user = await fetch(`https://jsonplaceholder.typicode.com/users/1`)
//       .then(res => res.json());
//     console.log("Kullanıcı:", user.name);

//     const posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
//       .then(res => res.json());
//     console.log("İlk post:", posts[0].title);

//   } catch (error) {
//     console.error("Hata:", error);
//   }
// }

// fetchData();

//promise objesi oluştur

// const myPromise = new Promise((resolve, reject) => {
//   const success = true;

//   setTimeout(() => {
//     if (success) {
//       resolve("İşlem başarılı!");
//     } else {
//       reject("Hata oluştu!");
//     }
//   }, 2000);
// });

// myPromise
//   .then(result => console.log("veri=>", result))
//   .catch(error => console.error("hata=>", error))
//   .finally(() => console.log("Her durumda çalışır"));

//promise chaining

// fetch("https://jsonplaceholder.typicode.com/users/1")
//   .then(res => res.json())
//   .then(user => {
//     console.log("Kullanıcı:", user.name);
//     return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//   })
//   .then(res => res.json())
//   .then(posts => console.log("İlk post:", posts[0].title))
//   .catch(err => console.error("Hata:", err));

//promise all
//Tüm asenkron işlemler bittiğinde tek seferde döner. Biri hata verirse hepsi hata kabul edilir.

// Promise.all([
//   fetch("https://jsonplaceholder.typicode.com/users/1").then(r => r.json()),
//   fetch("https://jsonplaceholder.typicode.com/users/2").then(r => r.json())
// ])
// .then(results => {
//   console.log("Sonuçlar:", results);
// })
// .catch(err => console.error("Hata:", err));

// Promise.allSettled
// Hepsi biter ama başarılı/başarısız ayrıntılı sonuç döner.

// async function demoAllSettled() {
//   const results = await Promise.allSettled([
 
//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then(res => res.json()),

//     fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
//       .then(res => {
//         if (!res.ok) throw new Error("Endpoint bulunamadı!");
//         return res.json();
//       }),

//     fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then(res => res.json())
//   ]);

//   console.log(" Sonuçlar:", results);

//   results.forEach((result, index) => {
//     if (result.status === "fulfilled") {
//       console.log(`[${index}] Başarılı:`, result.value);
//     } else {
//       console.log(`[${index}] Hata:`, result.reason);
//     }
//   });
// }

// demoAllSettled();

// Promise.race
// İlk tamamlanan promise’i döner (hata veya başarı fark etmez).

// async function demoRace() {
//   const result = await Promise.race([
   
//     new Promise(res => setTimeout(() => res("Yavaş işlem"), 2000)),

//     fetch("https://jsonplaceholder.typicode.com/users/1")
//       .then(res => res.json())
//   ]);

//   console.log("race sonucu:", result);
// }

// demoRace();

// Promise.any
// İlk başarılı (resolve) olanı döner.
// (Biri başarılıysa diğer hataları görmezden gelir).

// async function demoAny() {
//   try {
//     const result = await Promise.any([
//       // Hatalı endpoint
//       fetch("https://jsonplaceholder.typicode.com/invalid-endpoint")
//         .then(res => {
//           if (!res.ok) throw new Error("Geçersiz endpoint!");
//           return res.json();
//         }),

//       // Başarılı endpoint
//       fetch("https://jsonplaceholder.typicode.com/posts/1")
//         .then(res => res.json())
//     ]);

//     console.log("any sonucu:", result);
//   } catch (error) {
//     console.error("Tüm istekler hatalı:", error);
//   }
// }

// demoAny();

//call stack, microtask, macrotask

// console.log("1");

// setTimeout(() => console.log("2 - Macrotask"), 0);

// Promise.resolve().then(() => console.log("3 - Microtask"));

// console.log("4");


// console.log("A");

// Promise.resolve().then(() => console.log("B"));
// Promise.resolve().then(() => console.log("C"));

// setTimeout(() => console.log("D"), 0);

// console.log("E");

// setTimeout(() => console.log("1 - Macrotask"), 0);

// Promise.resolve().then(() => {
//   console.log("2 - Microtask");
//   setTimeout(() => console.log("3 - Macrotask"), 0);
// });

// console.log("4 - Normal");