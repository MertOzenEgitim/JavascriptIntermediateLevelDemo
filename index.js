// const target=document.getElementById("target");

// const observer=new MutationObserver((mutationList)=>{
//     for(mutationRecord of mutationList){
//         console.log(mutationRecord.type,mutationRecord);
//         if(mutationRecord.type=="childList" && mutationRecord.addedNodes.length>0){
//             console.log("yeni eleman eklendi");
//         }
//     }
// });

// observer.observe(target,{childList:true});

// document.getElementById("addElement").addEventListener("click",function(){
//     let pTag=document.createElement("p");
//     pTag.textContent="Merhaba Dünya!";
//     target.appendChild(pTag);
// });

// setTimeout(() => {
//     observer.disconnect();
// }, 5000);

const target = document.getElementById("target");

    document.getElementById("changeText").addEventListener("click", () => {
    //   target.textContent = "Metin değiştirildi!";
        target.firstChild.data="Metin değiştirildi!";
    });

    document.getElementById("attr").addEventListener("click", () => {
      target.setAttribute("data-info", "observer çalıştı");
    });

    document.getElementById("child").addEventListener("click", () => {
      const p = document.createElement("p");
      p.textContent = "Yeni eleman eklendi!";
      target.appendChild(p);
    });
    
    const observer = new MutationObserver((mutationsList) => {
      for (let mutation of mutationsList) {
        console.log("Değişiklik tipi:", mutation.type);

        if (mutation.type === "childList") {
          console.log("Eklenen:", mutation.addedNodes);
          console.log("Silinen:", mutation.removedNodes);
        }

        if (mutation.type === "attributes") {
          console.log("Değişen attribute:", mutation.attributeName);
        }

        if (mutation.type === "characterData") {
          console.log("Metin değişti:", mutation.target.data);
        }
      }
    });

    observer.observe(target, {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true
    });
    
