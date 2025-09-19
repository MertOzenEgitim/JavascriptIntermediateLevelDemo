// const form=document.getElementById("registerForm");
// const emailInput=document.getElementById("email");

// emailInput.addEventListener("input",()=>{
//   if(!emailInput.value.endsWith("@gmail.com")){
//     emailInput.setCustomValidity("Sadece gmail adresi kabul edilir!");
//   }else{
//     emailInput.setCustomValidity("");
//   }
// });

// form.addEventListener("submit",(e)=>{
//   e.preventDefault();
//   if(form.checkValidity()){
//     alert("Form başarıyla gönderildi!");
//   }else{
//     form.reportValidity();
//   }
// });

//-----------------History API
//replaceState ->mevcut state'i değiştirir
// const content=document.getElementById("content");

// document.getElementById("page1").onclick=()=>{
//   history.pushState({page:1},"Sayfa 1","?page=1");
//   content.innerText="Burası Sayfa 1";
// };

// document.getElementById("page2").onclick=()=>{
//   history.pushState({page:2},"Sayfa 2","?page=2");
//   content.innerText="Burası Sayfa 2";
// };

// window.addEventListener("popstate",(e)=>{
//   content.innerText=e.state?`Geri geldin -> Sayfa ${e.state.page}`:"Anasayfa";
// });

//----------------Storage API

//localStorage:tarayıcı kapatılsada verileri saklar
//sessionStorage:sekme kapatıldığında veriler temizlenir

//setItem,getItem,removeItem

// document.getElementById("save").onclick=()=>{
//   localStorage.setItem("theme","dark");
//   alert("Tema dark olarak kaydedildi!");
// };

// document.getElementById("load").onclick=()=>{
//   const theme=localStorage.getItem("theme","dark");
//   alert("Kayıtlı tema:"+(theme || "Bulunamadı"));
// };

// document.getElementById("clear").onclick=()=>{
//   localStorage.removeItem("theme");
//   alert("Tema silindi!");
// };

//---------------- Fetch API

// Tüm gönderileri çek
// async function getPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();
//   console.log("Tüm gönderiler:", data.slice(0, 5)); 
// }

// // Belirli bir gönderiyi çek (id=1)
// async function getPostById(id) {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//   const data = await res.json();
//   console.log("Gönderi Detayı:", data);
// }

// getPosts();
// getPostById(1);

// //---------

// async function createPost() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       title: "Yeni gönderi",
//       body: "Bu bir deneme gönderisidir",
//       userId: 1
//     })
//   });

//   const data = await res.json();
//   console.log("Oluşturulan gönderi:", data);
// }

// createPost();

// //------

// async function updatePost() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       id: 1,
//       title: "Güncellenmiş gönderi",
//       body: "Bu gönderi PUT ile tamamen güncellendi",
//       userId: 1
//     })
//   });

//   const data = await res.json();
//   console.log("PUT Sonucu:", data);
// }

// updatePost();

// //--------------

// async function patchPost() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({
//       title: "Sadece başlık güncellendi"
//     })
//   });

//   const data = await res.json();
//   console.log("PATCH Sonucu:", data);
// }

// patchPost();

// //-----------

// async function deletePost() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "DELETE"
//   });

//   if (res.ok) {
//     console.log("Gönderi silindi (simülasyon)");
//   } else {
//     console.error("Silme işlemi başarısız!");
//   }
// }

// deletePost();

//---Worker API

let currentValue=0;
function btnClick(){ 
  currentValue++;
  console.log(currentValue);
}

const worker=new Worker("worker.js");

worker.postMessage(45);
worker.onmessage=(e)=>{
  alert("Sonuç:"+e.data);
}