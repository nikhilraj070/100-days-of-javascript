const bdate = document.getElementById('bdate');
const bmonth = document.getElementById('bmonth');
const byear = document.getElementById('byear');
const cdate = document.getElementById('cdate');
const cmonth = document.getElementById('cmonth');
const cyear = document.getElementById('cyear');
const output = document.getElementById('output');
const month31 = [1, 3, 5, 7, 8, 10, 12];



function calculate() {
    let birthDate = parseInt(bdate.value);
    let birthMonth = parseInt(bmonth.value);
    let birthYear = parseInt(byear.value);
    let currDate = parseInt(cdate.value);
    let currMonth = parseInt(cmonth.value);
    let currYear = parseInt(cyear.value);


    function getDaysInMonth(month, year) {
        if (month === 2) return isLeapYear(year) ? 29 : 28;
        return [4, 6, 9, 11].includes(month) ? 30 : 31;
    }
    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }

  
    if (!(birthMonth >= 1 && birthMonth <= 12)) {
        output.value = 'Enter valid birth month';
        return;
    }
    if (birthDate < 1 || birthDate > getDaysInMonth(birthMonth, birthYear)) {
        output.value = `Invalid date for the birth month`;
        return;
    }
    if (!(birthYear >= 1000 && birthYear <= 9999)) {
        output.value = 'Enter a 4-digit valid birth year';
        return;
    }

    if (!(currMonth >= 1 && currMonth <= 12)) {
        output.value = 'Enter valid current month';
        return;
    }
    if (currDate < 1 || currDate > getDaysInMonth(currMonth, currYear)) {
        output.value = `Invalid date for the current month`;
        return;
    }
    if (!(currYear >= 1000 && currYear <= 9999)) {
        output.value = 'Enter a 4-digit valid current year';
        return;
    }

  
    if (currDate < birthDate) {
        currMonth--;
        if (currMonth === 0) {
            currMonth = 12;
            currYear--;
        }
        currDate += getDaysInMonth(currMonth, currYear);
    }

    let finalDate = currDate - birthDate;

    if (currMonth < birthMonth) {
        currMonth += 12;
        currYear--;
    }

    let finalMonth = currMonth - birthMonth;
    let finalYear = currYear - birthYear;

    if (finalYear < 0) {
        output.value = 'Birth date must be before current date';
        return;
    }

    output.value = ` ${finalYear} Years, ${finalMonth} Months, ${finalDate} Days`;
}

function clearing() {
    console.log('clearing');
    bdate.value = '';
    bmonth.value = '';
    byear.value = '';
    cdate.value = '';
    cmonth.value = '';
    cyear.value = '';
    output.value = '';
    console.log('cleared');
}
