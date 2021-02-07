//https://github.com/TanvirFahimBD/assignment-3


//kilometerToMeter Code Start From Here


function kilometerToMeter(km){
    if(km <= 0){
        return "Invalid";   
    }else{
        return km*1000;
    }
}
var meterFinal = kilometerToMeter(10)
console.log(meterFinal)


//kilometerToMeter Code End Here


//budgetCalculator Code Start From Here

var watch = 50
var phone = 100
var laptop = 500

function budgetCalculator(num1, num2, num3){
   if(num1>0 && num2>0 && num3>0){
    totalWatch = num1 * watch
    totalPhone = num2 * phone
    totalLaptop = num3 * laptop
    total = totalWatch + totalPhone + totalLaptop
    return total
   }else{
       return "Invalid"
   }
}

var calc = budgetCalculator(1, 2, 4)
console.log(calc)


//budgetCalculator Code End Here


//hotelCost Code Start From Here


function hotelCost(num){
    if(num>0 && num<=10){
        cost = num*100
        return cost
    }else if(num>10 && num<=20){
        var cost1 = num-10
        cost = (10*100)+(cost1*80)
        return cost
    }else if(num>20){
        var cost1 = num-20
        cost = (10*100)+(10*80)+(cost1*50)
        return cost
    }else{
        return "Invalid"
    }
}

var totalCost = hotelCost(23)
console.log(totalCost)


//hotelCost Code End Here


//megaFriend Code Start From Here


function megaFriend(arr){
    if(arr == ''){
        return "Invalid"
    }else{ 
    var mega = ''
    for(var i = 0; i<arr.length; i++){
        if(arr[i].length>mega.length){
                mega = arr[i]
            }
        }
        return mega     
    }
}

var  arr = ["Rahim", "Jon", "AzizulKarim"]
var friend = megaFriend(arr)
console.log(friend)

//megaFriend Code End Here