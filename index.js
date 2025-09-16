// try {
//   let x=10;
//   let x=20;
// } catch (error) {
//   console.log(error);
// }


// try {
//   console.log(x);
// } catch (error) {
//   console.log(error.name);
// }

// try {
//   let obj=null;
//   obj.toString();
// } catch (error) {
//   console.log(error);
// }

// try {
//   let arr=new Array(-1);
// } catch (error) {
//   console.log(error);
// }

// try {
//   decodeURI("%");
// } catch (error) {
//   console.log(error);
// }

// try {
//   decodeURI("%");
// } catch (error) {
//   console.log(error);
// } finally{

// }

// function divide(a,b){
//   if(b===0){
//     throw new Error("Sıfıra bölme hatası!");
//   }
//   return a/b;
// }

// try {
//   console.log(divide(10,0));
// } catch (error) {
//   console.log(error);
// }

// class ValidationError extends Error {
//   constructor(message) {
//     super(message);
//     this.name = "ValidationError";
//   }
// }

// function registerUser(username) {
//   if (!username) {
//     throw new ValidationError("Kullanıcı adı boş olamaz!");
//   }
//   return "Kayıt başarılı!";
// }

// try {
//   registerUser("");
// } catch (err) {
//   console.log(`${err.name}: ${err.message}`);
// }

// function readDataFromServer(callback) {
//   setTimeout(() => {
//     const success = Math.random() > 0.5; 
//     if (!success) {
//       return callback(new Error("Sunucuya ulaşılamadı!"), null);
//     }
//     return callback(null, { id: 1, name: "Test Data" });
//   }, 1000);
// }

// readDataFromServer((err, data) => {
//   if (err) {
//     console.error("Callback ile yakalanan hata:", err.message);
//     return;
//   }
//   console.log("Callback sonucu:", data);
// });

  // fetch("https://jsonplaceholder.typicode.com/wrong-url")
  // .then(res =>{

  // }).catch(err => console.log("Promise Hatası:", err.message));

// fetch("https://jsonplaceholder.typicode.com/wrong-url")
//   .then(res => {
//     console.log("Status:", res.status); // 404
//     if (!res.ok) {
//       throw new Error(`HTTP Hatası! Kod: ${res.status}`);
//     }
//     return res.json();
//   })
//   .then(data => console.log(data))
//   .catch(err => console.log("Promise Hatası:", err.message));


// async function getData() {
//   try {
//     let res = await fetch("https://jsonplaceholder.typicode.com/wrong-url");

//     if (!res.ok) {
//       throw new Error(`HTTP Hatası! Kod: ${res.status}`);
//     }

//     let data = await res.json();
//     console.log(data);
//   } catch (err) {
//     console.error("Async/Await Hatası:", err.message);
//   }
// }
// getData();

// window.onerror = function (message, source, lineno, colno, error) {
//   console.error("Global Hata Yakalandı:");
//   console.log("Mesaj:", message);
//   console.log("Kaynak:", source);
//   console.log("Satır/Sütun:", lineno, colno);
//   console.log("Error objesi:", error);
//   return true; 
// };

// nonExistentFunction();



// window.onunhandledrejection = function (event) {
//   console.log("Yakalanmamış Promise Hatası:", event.reason);
// };

// new Promise((_, reject) => reject("Bir hata oluştu!"));



// window.addEventListener("error", (event) => {
//   console.error("Event Listener ile Hata:", event.message);
// });

// window.addEventListener("unhandledrejection", (event) => {
//   console.error("Event Listener ile Promise Hatası:", event.reason);
// });