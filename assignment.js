
// Kilometer to meter function
function kilometerToMeter(kilometer){
    if(kilometer < 0){
        return 'Kilometer value cannot be negative';
    }
    else{
        var meter = kilometer * 1000;
        return meter;
    }
}
// var result = kilometerToMeter(5);
// console.log(result);




// Budget calculation function
function budgetCalculator(watch, phone, laptop){
    if(watch < 0 || phone < 0 || laptop < 0){
        return 'Price cannot be negative';
    }
    else{
        var watchPrice = watch * 50;
        var phonePrice = phone * 100;
        var laptopPrice = laptop * 500;
        var totalPrice = watchPrice + phonePrice + laptopPrice;
        return totalPrice;
    }
}
// var result = budgetCalculator(5, 4, 3);
// console.log(result);




// Hotel cost calculation function
function hotelCost(day){
    var rent = 0;
    if(day < 0){
        return 'Days value cannot be negative'
    }
    if(day <= 10){
        rent = day * 100;
    }
    else if(day <= 20){
        var firstPart = 10 * 100;
        var remaining = day - 10;
        var secondPart = remaining * 80;
        rent = firstPart + secondPart;
    }
    else{
        var firstPart = 10 * 100;
        var secondPart = 10 * 80;
        var remaining = day - 20;
        var thirdPart = remaining * 50;
        rent = firstPart + secondPart + thirdPart;
    }
    return rent;
}
// var result = hotelCost(22);
// console.log(result);




// Large friend name return function 
function megaFriend(friendList){
    if(friendList.length == 0){
        return 'Friend list is empty';
    }
    var maxName = friendList[0];
    for(var i = 0; i < friendList.length; i++){
        var singleFriend = friendList[i];
        if(maxName.length < singleFriend.length){
            maxName = singleFriend;
        }
    }
    return maxName;
}
// var result = megaFriend(['roni', 'omi', 'riyad', 'soriful', 'alamin']);
// console.log(result);
