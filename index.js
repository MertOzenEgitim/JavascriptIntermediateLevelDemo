// const now=new Date();

// console.log(now.getTime()); //timestamp

// const start=new Date("2025-09-20T08:00:00");
// const end=new Date("2025-09-22T15:30:00");

// const diffDT=end.getTime()-start.getTime();

// const diffSeconds=Math.floor(diffDT/1000);
// const diffMinutes=Math.floor(diffDT/(1000*60));
// const diffHours=Math.floor(diffDT/(1000*60*60));
// const diffDays=Math.floor(diffDT/(1000*60*60*24));


// console.log("saniye:",diffSeconds);
// console.log("dakika:",diffMinutes);
// console.log("saat:",diffHours);
// console.log("gün:",diffDays);


//----------
// const today=new Date();
// const nextWeek=new Date(today);

// nextWeek.setDate(today.getDate()+7);

// const lastMonth=new Date(today);
// lastMonth.setMonth(today.getMonth()-1);

// console.log("Bugün:",today.toDateString());
// console.log("1 Hafta Sonra:",nextWeek.toDateString());
// console.log("1 Ay Önce:",lastMonth.toDateString());

//-------------
//toISOString()

// const now=new Date();
// console.log(now.toISOString());

// //toLocaleString()

// console.log(now.toLocaleString());
// console.log(now.toLocaleString("tr-TR"));
// console.log(now.toLocaleString("en-US"));
// console.log(now.toLocaleString("en-US",{timeZone:"America/New_York"}));

// console.log(now.toLocaleDateString());
// console.log(now.toLocaleDateString("en-US"));

// //Intl.DateTimeFormat
// const formatter=new Intl.DateTimeFormat("tr-TR",{
//   weekday:"long",
//   year:"numeric",
//   month:"long",
//   day:"numeric",
//   hour:"2-digit",
//   minute:"2-digit",
//   second:"2-digit",
//   timeZone:"Europe/Istanbul"
// });

// console.log(formatter.format(now));

//alternatif kütüphaneler
import { format,addDays,subMonths,differenceInDays,differenceInHours } from "https://cdn.skypack.dev/date-fns";
import { tr } from "https://cdn.skypack.dev/date-fns/locale";

const today=new Date();
const oneWeekLater=addDays(today,7);
const threeMonthAgo=subMonths(today,3);

console.log(oneWeekLater);
console.log(threeMonthAgo);

const start=new Date("2025-09-20T08:00:00");
const end=new Date("2025-09-22T15:30:00");

console.log("Gün farkı:",differenceInDays(end,start));
console.log("Saat farkı:",differenceInHours(end,start));

console.log(format(today,"do MMMM yyyy, EEEE",{locale:tr}));