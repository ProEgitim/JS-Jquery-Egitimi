// var a = 10;

// b = 20;

// console.log(typeof a);

// console.log(typeof b);

// function deneme(){
//   d = 40;
//   console.log(d)
// }

// { // if - for 
//   // var d =  50;
//   // let d = 50;
//   const d = 50;
// }
// const d = 50;
// console.log(d)
// deneme();

// console.log(d)

// const name = "Varol";
// const department = "Bilişim";
// const salary = 4250;

// console.log(`İsim: ${name} bölümü: ${department} maaş: ${salary}`); // Template Literal

// Tip Dönüşümleri:
// let val;

// val = String(123);
// val = String(3.4);
// val = String(true);
// val = String(function(){console.log("Deneme")});
// val = String([1,2,3,4]);

// val = Number("123");
// val = Number(null);
// val = Number("deneme");
// val = Number(undefined);
// val = Number(function(){console.log(5)});
// val = Number([1,2,3,4]);
// val = Number("1.23");

// val = parseFloat("3.14");
// val = parseFloat("3");

// console.log(val);
// console.log(typeof val);

// String Metodları:

// let val;
// const name = "Varol";
// const lastName = "Maksutoğlu";

// val = name + " " + lastName;

// val = name.concat(" ",lastName);

// val = name[name.length - 1];

// val = name.indexOf("r");

// console.log(val);

// let yas = '11/18/1985';
// let birthDay = new Date(yas);
// let now1 = Date.now();
// let now = new Date(now1);
// let age = birthDay.getTime();
// let ageYear = new Date(age);
 

// console.log(now.getFullYear() - ageYear.getFullYear());

// let dt = new Date();


// console.log(String(dt.getMonth()+1));

// let dtA = new Date("03/12/2022 11:31:55");
// let dtB = new Date(2022,3,12,11,32,55);

// console.log(dtA);
// console.log(dtB);

// let arr = ["Opel", "Mazda", "Mercedes", "Bmw"];
// let arrNumbers = [3,7,1,78,2];
// let arr2 = ["Citroen", "Nissan", "Fiat"];

// arr.push('Toyota');
// arr.pop();
// arr.unshift("Seat");
// arr.shift("Seat");
// arr.reverse();
// // arrNumbers.sort();
// arrNumbers.slice(1,4)

// let array = [...arr,...arr2];

// console.log(array);

// var aracBilgileri = [
//   {
//       id : 'bmw116d_123',
//       model : 'bmw 116d',
//       yil : 2015,
//       renk : 'Beyaz',
//       servisKayitlari : [
//       {
//           id : 'bmw116d_123_1',
//           tarih : '20.01.2016',
//           km : '13000',
//           ucret : 900,
//           detay :[
//                   { id : 'bmw116d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
//                   { id : 'bmw116d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
//                   { id : 'bmw116d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
//                  ]
//           },
//           {
//               id : 'bmw116d_123_2',
//               tarih : '10.01.2017',
//               km : '28000',
//               ucret : 1800,
//               detay : [
//                       { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
//                       { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
//                       { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
//                       { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
//               ]
//           }
//       ]
//   },
//   {
//       id : 'bmw118i_123',
//       model : 'bmw 118i',
//       yil : 2015,
//       renk : 'Beyaz',
//       servisKayitlari : [
//       {
//           id : 'bmw118i_123_1',
//           tarih : '20.01.2016',
//           km : '13000',
//           ucret : 900,
//           detay :[
//                   { id : 'bmw118i_123_1_1', aciklama :'yağ değişimi',ucret : 300},
//                   { id : 'bmw118i_123_1_2', aciklama :'filtre değişimi',ucret : 300},
//                   { id : 'bmw118i_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
//                  ]
//           },
//           {
//               id : 'bmw116d_123_2',
//               tarih : '10.01.2017',
//               km : '28000',
//               ucret : 1800,
//               detay : [
//                       { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
//                       { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
//                       { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
//                       { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
//               ]
//           }
//       ]
//   },
//   {
//       id : 'bmw320d_123',
//       model : 'bmw 320d',
//       yil : 2015,
//       renk : 'Beyaz',
//       servisKayitlari : [
//       {
//           id : 'bmw320d_123_1',
//           tarih : '20.01.2016',
//           km : '13000',
//           ucret : 900,
//           detay :[
//                   { id : 'bmw320d_123_1_1', aciklama :'yağ değişimi',ucret : 300},
//                   { id : 'bmw320d_123_1_2', aciklama :'filtre değişimi',ucret : 300},
//                   { id : 'bmw320d_123_1_3', aciklama : 'fren hidroliği',ucret : 300}
//                  ]
//           },
//           {
//               id : 'bmw116d_123_2',
//               tarih : '10.01.2017',
//               km : '28000',
//               ucret : 1800,
//               detay : [
//                       { id :'bmw116d_123_2_1',aciklama :'yağ değişimi', ucret:350},
//                       { id :'bmw116d_123_2_2',aciklama :'filtre',ucret:350 },
//                       { id : 'bmw116d_123_2_3',aciklama :'fren hidroliği',ucret:300},
//                       { id : 'bmw116d_123_2_3',aciklama : 'balata',ucret:800}
//               ]
//           }
//       ]
//   }
// ];

// console.log(aracBilgileri[0].servisKayitlari[0].detay[1].aciklama);

// let a = 5;

// a==5?console.log("doğru"):console.log("yanlış");


// let arr = ["Opel", "Mazda", "Mercedes", "Bmw"];

// for (let i=0; i<arr.length;i++){

// }

// for (let i in arr){
//   console.log(arr[i])
// }
// for (let i of arr){
//   console.log(i)
// }
// arr.forEach(function(item){
//   console.log(item);
// })

// let cars = arr.map(function(car){
//   return car;
// })
// console.log(cars);

