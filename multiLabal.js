// const price = 5000;
// if(price >= 5000){
//     // 10% discunt
//     const discunt = price * 10 / 100;
//     const payAmount = price - discunt;
//     console.log(payAmount)
// }else{
//     console.log(price)
// }

const age = 65;
const price = 500;

if (age <= 12){
    console.log("you can eat for free")
}
else if (age >= 60){
    const discount = price * 50 / 100;
    const payAmount = price - discount;
    console.log(payAmount)
}
else if(age >= 50){
    console.log('')
}