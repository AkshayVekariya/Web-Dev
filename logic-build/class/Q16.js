function isLeapYear(year) {
    if (year % 4 === 0) {
        console.log(`${year} is leap year`)
    } else {
        console.log(`${year} not aleap year`)
    }
}

isLeapYear(2002)