// que 1 //

// function calculateBill(appleQty, bananaQty, mangoQty) {
//     const applePrice = 10; 
//     const bananaPrice = 5;  
//     const mangoPrice = 15;  

//     let totalBill = 0;

//     if (appleQty > 0) {
//         totalBill += appleQty * applePrice;
//     }

//     if (bananaQty > 0) {
//         totalBill += bananaQty * bananaPrice;
//     }

//     if (mangoQty > 0) {
//         totalBill += mangoQty * mangoPrice;
//     }

//     return totalBill;
// }

// let appleQty = 3;   
// let bananaQty = 2;  
// let mangoQty = 5; 

// let totalBill = calculateBill(appleQty, bananaQty, mangoQty);
// console.log("total bil is: " + totalBill);


// que 2 //

// function calculateElectricityBill(units) {
//     let bill = 0;

//     if (units <= 50) {
//         bill = units * 0.50;
//     } else if (units <= 150) {
//         bill = (50 * 0.50) + ((units - 50) * 0.75);
//     } else if (units <= 250) {
//         bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
//     } else {
//         bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
//     }

//     let surcharge = bill * 0.20;
//     bill += surcharge;

//     return bill;
// }

// let units = 300;

// let totalBill = calculateElectricityBill(units);
// console.log("total bil is: " + totalBill.toFixed(2));


// que 3 //

// let studentInput = +prompt("enter your Marks: ");

// if (studentInput >= 90 && studentInput <= 100) {
//     console.log("A+ grade: ", studentInput);
// }
// else if (studentInput >= 75 && studentInput <= 89) {
//     console.log("A grade: ", studentInput);
// }
// else if (studentInput >= 60 && studentInput <= 74) {
//     console.log("B grade: ", studentInput);
// }
// else if (studentInput >= 45 && studentInput <= 59) {
//     console.log("C grade: ", studentInput);
// }
// else if (studentInput >= 35 && studentInput <= 44) {
//     console.log("D grade", studentInput);
// }
// else {
//     console.log("Fail");
// }
