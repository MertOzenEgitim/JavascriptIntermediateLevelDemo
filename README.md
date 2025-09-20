# Javascript Orta Seviye Eğitimi

## 1. ES6+ Yenilikleri
* let ve const kullanımı
* Template literals, destructuring assignment
* Spread ve rest operatörleri
* Default parametreler, kısa method tanımları

## 2. Fonksiyon Davranışları
* Arrow Function ve Normal Fonksiyonlar arasındaki farklar
* * this, arguments, new, return
* Fonksiyon Metotları:
* * call, apply, bind kullanımı ile bağlam (context) kontrolü
* Fonksiyon borçlanması (method borrowing) örnekleri

## 3. Asenkron Programlama
* Callback’e Neden İhtiyaç Duyulur?
* Callback Fonksiyonlar
* Promise Nedir? Promise Oluşturma, Promise Durumları (Pending → Fulfilled → Rejected)
* Promise Metodları: resolve, reject, .then(), .catch(), finally()
* Promise Statik Metotları (Promise.all, Promise.allSettled, Promise.race, Promise.any)
* async/await kullanımı
* Event Loop, Call Stack, Microtask ve Macrotask kuyruğu kavramları

## 4. Gelişmiş DOM ve Event Yönetimi
* Dinamik DOM Manipülasyonu
* * Element Oluşturma
* * Element Güncelleme
* * Element Silme
* * innerHTML ve innerText farkı
* Event Yönetimi
* * Event Listener Ekleme ve Silme
* * Event Bubbling (içten dışa yayılma)
* * Event Capturing (dıştan içe yakalama)
* * Event Delegation
* Event Nesnesi ve Kullanımı
* * event.target vs event.currentTarget
* * preventDefault() ve stopPropagation()
* * Event Türleri
* * * Mouse Events → click, dblclick, mouseover, mouseout, contextmenu
* * * Keyboard Events → keydown, keyup, keypress
* * * Form Events → submit, change, input, focus, blur
* * * Window Events → load, resize, scroll, beforeunload
* Modern DOM API’leri
* * classList API
* * Dataset (Custom Attributes)
* * MutationObserver (DOM değişikliklerini izleme)

## 5. Mutation Observer
* Giriş
* * Mutation Observer nedir?
* * Kullanım Senaryoları
* Temel Kullanım
* Mutation Observer Konfigürasyonları
* MutationRecord Nesnesi
* * mutation.type
* * mutation.target
* * mutation.addedNodes
* * mutation.removedNodes
* * mutation.attributeName
* * mutation.oldValue
* disconnect()
* Örnek

## 6. Hata Yönetimi
* Hata Türleri
* * SyntaxError → Kodlama hatası
* * ReferenceError → Tanımlanmamış değişken/nesneye erişim
* * TypeError → Yanlış tip kullanımı (ör. null.toString())
* * RangeError → Geçersiz sayı aralıkları (ör. new Array(-1))
* * URIError → Çok nadir kullanılan özel hatalar
* try...catch...finally
* Hata Fırlatma (throw)
* Custom Error Sınıfları
* Asenkron Kodlarda Hata Yönetimi
* Global Hata Yakalama

## 7. Javascript Web APIs
* Forms API
* * checkValidity()
* * reportValidity()
* * setCustomValidity()
* History API
* * pushState()
* * replaceState()
* * popState()
* Storage API
* * Local Storage
* * Session Storage
* * setItem
* * getItem
* * removeItem
* Fetch API
* * HTTP istekleri(get,post,put,patch,delete),
* * Hata yönetimi
* Worker API
* * Arkaplan işlemleri
* Daha Fazlası
* * Geolocation API
* * Media Devices API
* * Notifications API
* * WebSocket API
* * Clipboard API
* * Device Orientation & Motion API
* * File API
* * IndexedDB API
* * Canvas API