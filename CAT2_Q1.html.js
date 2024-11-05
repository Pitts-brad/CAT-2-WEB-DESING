 Function to calculate tax based on basic pay
function calculateTax(basicPay) {
    let tax = 0;
    if (basicPay > 50000) {
        tax = 0.2 * basicPay;
    } else if (basicPay >= 20000 && basicPay <= 50000) {
        tax = 0.1 * basicPay;
    }
    // No tax for basic pay below 20000
    return tax;
}

 Function to calculate net pay

function calculateNetPay(basicPay, tax) {
    return basicPay - tax;
}

 Prompt user to enter employee details
 
let employeeName = prompt("Enter employee name:");
let hoursWorked = parseFloat(prompt("Enter hours worked:"));
let ratePerHour = parseFloat(prompt("Enter rate per hour:"));

 Calculate basic pay
let basicPay = hoursWorked * ratePerHour;

 Calculate tax
let tax = calculateTax(basicPay);

 Calculate net pay
let netPay = calculateNetPay(basicPay, tax);


