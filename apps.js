var inputBill = Number(prompt("What is your bill"));
var taxAmount=inputBill*.07;
var taxTotalBill=inputBill+taxAmount;
var tipAmount=taxTotalBill*.05;
var total=tipAmount+taxTotalBill;
var element = document.querySelector( ".box");
element.innerHTML=total;
