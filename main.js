function isPalindrome(str){
    return str === str.split('').reverse().join('')
}

date = {
    day:31,
    month:12,
    year:2021
}

function convertDateToString(date){
    dateStr = { day:'', month:'', year:'' }
    const day = date.day
    const month = date.month
    const year = date.year
    if(day<10){
        dateStr.day = '0' + day
    }
    else{
        dateStr.day = '' + day
        dateStr.day = day.toString()
    }
    if(month<10){
        dateStr.month = '0' + month
    }
    else{
        dateStr.month = '' + month
    }
    dateStr.year = '' + year
    return dateStr
}

function getAllDateFormats(date){
    var dateStr = convertDateToString(date)
    const dd = dateStr.day
    const mm = dateStr.month
    const yyyy = dateStr.year
    const yy = dateStr.year.slice(-2)
    var ddmmyyyy = dd + mm + yyyy
    var mmddyyyy = mm + dd + yyyy
    var yyyymmdd = yyyy + mm + dd
    var ddmmyy = dd + mm + yy
    var mmddyy = mm + dd + yy
    var yymmdd = yy + mm + dd

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd]
}

function checkPalindromeForAllDateFormats(date){
    var listOfPalindromes = getAllDateFormats(date)
    var flag = false
    for(let i=0; i<listOfPalindromes.length;i++){
        if(isPalindrome(listOfPalindromes[i])){
            flag = true
            break
        }
    }
    return flag
}

function isLeapYear(year){
    if(year%400 === 0){
        return true
    }
    if(year%100 === 0){
        return false
    }
    if(year%4 === 0){
        return true
    }
    return false
}

function getNextDate(date){
    var day = date.day + 1
    var month = date.month
    var year = date.year
    var daysInMonth = [31,28,31,30,31,30,31,31,30,31,30,31]

    if(month === 2){
        if(isLeapYear(year)){
            if(day>29){
                day = 1
                month++
            }
        }
        else{
            if(day>28){
                day = 1
                month++
            }
        }
    }
    else{
        if(day>daysInMonth[month-1]){
            day = 1
            month++
        }
    }
    if(month>12){
        month = 1
        year++
    }
    return { day:day, month:month, year:year }
}

function getNextPalindromeDate(date){
    var ctr = 0
    var nextDate = getNextDate(date)
    while(1){
        ctr++
        var isPalindrome = checkPalindromeForAllDateFormats(nextDate)
        if(isPalindrome){
            break
        }
        nextDate = getNextDate(nextDate)
    }
    return [ctr,nextDate]
}

const bdayInput = document.querySelector("#bday-input")
const showButton = document.querySelector("#show-btn")
const outputEl = document.querySelector("#output")

function clickHandler(e){
    console.log(bdayInput.value)
}


showButton.addEventListener("click",clickHandler)
// console.log(getNextPalindromeDate(date))

