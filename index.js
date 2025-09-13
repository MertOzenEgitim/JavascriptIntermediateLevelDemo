//----Ekleme
// const app=document.getElementById("app");

// const btn=document.createElement("button");
// btn.textContent="Tıkla!";
// btn.classList.add("btn");

// app.appendChild(btn);

// //----Güncelleme
// const btn2=document.querySelector(".btn2");
// btn2.textContent="Tıkladım!";
// btn2.style.backgroundColor="tomato";

//Silme

// btn2.remove();

// //innerHTML ve innerText farkı
// const contentDiv=document.getElementById("content");
// contentDiv.innerText="<b>Merhaba</b>";
// contentDiv.innerHTML="<b>Merhaba</b>";

// function btnClick(){
// alert("Butona tıklandı!");
// }

//Event Yönetimi
// btn.addEventListener("click",()=>{
//     alert("Butona tıklandı!");
// });
// contentDiv.addEventListener("click",()=>{
//     alert("Div'e tıklandı!");
// });

// btn.addEventListener("click",btnClick);

// btn.removeEventListener("click",btnClick);

// btn.addEventListener("click",()=>{
//     console.log("1 kere çalıştı");
// },{once:true});

//Event Bubbling (içten dışa yayılma)

// document.getElementById("parent").addEventListener("click",()=>{
//     console.log("Parent çalıştı");
// });
// document.getElementById("child").addEventListener("click",()=>{
//     console.log("Child çalıştı");
// });
// document.getElementsByTagName("body")[0].addEventListener("click",()=>{
//     console.log("Grandparent çalıştı");
// });

//Event Capturing (dıştan içe yakalama)

// const log=(msg)=>console.log(msg);

// document.getElementById("grandparent").addEventListener("click",()=>log("Grandparent capturing"),true);
// document.getElementById("parent").addEventListener("click",()=>log("Parent capturing"),{capture:true});
// document.getElementById("child").addEventListener("click",()=>log("Child target"));
// document.getElementById("parent").addEventListener("click",()=>log("Parent bubling"));
// document.getElementById("grandparent").addEventListener("click",()=>log("Grandparent bubling"));

//event delegation
// document.getElementById("menu").addEventListener("click",(e)=>{
//     if(e.target.tagName=="LI"){
//         console.log("Tıklanan id:",e.target.dataset.id);
//     }
// });

//event.target vs event.currentTarget

// document.getElementById("box").addEventListener("click",(e)=>{
//     console.log("target:",e.target);
//     console.log("currentTarget:",e.currentTarget);
// });

// document.getElementById("link").addEventListener("click",(e)=>{
//     e.preventDefault();
//     e.stopPropagation();
//     console.log("Link tıklandı ama gidilmedi!");
// });

// document.getElementById("box").addEventListener("click",(e)=>{
//     console.log("box'a tıklandı!");
// });

// document.addEventListener("keydown",(e)=>{
//     if(e.key==="Enter"){
//         console.log("Enter tuşuna basıldı.");
//     }
// });

// const btn=document.getElementById("btn");

// btn.classList.add("active");
// btn.classList.remove("active");
// btn.classList.toggle("active");

const btn2=document.getElementById("btn2");
console.log(btn2.dataset.id);

const target=document.body;

const observer=new MutationObserver((mutations)=>{
    console.log("DOM değişti",mutations);
});

observer.observe(target,{childList:true,subtree:true});

target.appendChild(document.createElement("p"));