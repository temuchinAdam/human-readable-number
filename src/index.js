module.exports = function toReadable (number) {
    let obj= {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }
    let toTen
    let toHundred
    let toThousand
    let string
    if (number<=20){
        string=obj[number]
    }if(number>20 && number<100){
        toHundred=Math.trunc(number/10)*10
        toTen=number-toHundred
    if(toTen == 0){
        string = obj[toHundred]
    }else{
        string=obj[toHundred] +' '+ obj[toTen]
    }
        
    }if(number>=100){
        toThousand=Math.trunc(number/100)
        toHundred=Math.trunc((number-toThousand*100)/10)*10
        toTen=number-toThousand*100-toHundred
        if(number%100 == 0){
            return string = obj[toThousand] + ' ' + 'hundred'
        }if(toHundred+toTen<20){
            return string = obj[toThousand] + ' ' + 'hundred' + ' '+ obj[toHundred+toTen]
        }if(toTen == 0){
           return string = obj[toThousand] + ' ' + 'hundred' + ' ' + obj[toHundred]
        }if(toHundred == 0){
            string = obj[toThousand] + ' ' + 'hundred' + ' ' + obj[toTen]
        }else{
            string=obj[toThousand] + ' ' + 'hundred' + ' ' + obj[toHundred] + ' ' +obj[toTen]
        }   
    }
    return string
}
