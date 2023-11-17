// 1. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ
// მასივს, და ეს ფუნქცია შეავსებს მასივს 20 ცალი რენდომული
// რიცხვით

// function randomListFiller(list){
//     let tmp = list;
//     while(tmp.length<20){
//         let random = Math.round(Math.random()*100);
//         tmp.push(random);
//     }
//     return tmp;
// }

// let list1 = [];
// console.log(randomListFiller(list1));


// 2. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ 20
// ცალი რენდომული რიცხვისგან შევსებულ მასივს და ეს ფუნქცია
// დაბეჭდავს ამ მასივში მოთავსებულ ყველა ლუწ რიცხვს

// let list2 = randomListFiller([]);
// console.log(list2);

// let arrayFilter = list2.filter((item) => item%2==0);
// console.log(arrayFilter);


// 3. Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადასცემთ
// რიცხვების რაოდენობას და ეს ფუნქცია დააბრუნებს მასივს რომელიც
// შევსებული იქნება იმ რაოდენობის რენდომული რიცხვებით რაც
// მომხმარებელმა აგდასცა ფუნქციას

// function randomArrayMaker(num){
//     let tmp = [];
//     while(tmp.length<num){
//         let randomNum = Math.round(Math.random()*100);
//         tmp.push(randomNum);
//     }
//     return tmp;
// }

// console.log(randomArrayMaker(99));


// 4. Შექმენით ფუნქცია რომელსაც პარამეტრების სახით გადასცემთ 20
// ცალი რენდომული რიცხვისგან შევსებულ მასივს და ეს ფუნქცია
// ამოარჩევს ყველა 3 ის ჯერად რიცხვს და გადაწერს მათ მეორე
// მასივში რომელსაც დააბრუნებს ეს ფუნქცია


// function createFilteredArray(array){
//     let tmp = [];
//     for(let i = 0; i<array.length; i++){
//         if(array[i]%3==0){
//             tmp.push(array[i]);
//         }
//     }
//     return tmp;
// }


// 5. Შექმენით ფუნქცია რომელსაც პარამეტრის სახით გადასცემთ მასივს
// და რიცხვს, ამ ფუნქციის დანიშნულება იქნება რომ დაადგინოს
// მასივი შეიცავს თუ არა ამ გადაცემულ რიცხვს.


// function isExistInArray(list,element){
//     if(list.includes(element)){
//         alert(true);
//     }else{
//         alert(false);
//     }
//     return `${element} is exist in array: ${list}`;
// }

// let list1 = [1,2,3,4,5,6,7,8,9,10];
// console.log(isExistInArray(list1,9));