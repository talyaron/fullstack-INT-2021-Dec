//ex1-----------------------------------------------------------------------------------------------
function tfortune (job:string, Location:string, partner:string, kids:number){
    var future = 'you will be a '+job + 'in ' +Location +' and suffer from' +partner + 'with' +kids 
    console.log(future);
}
tfortune ('HomeLEss', 'BatYam', 'LadyGaga', 3);
tfortune ('DevOps', 'Gaza', 'BritneySpears', 5);
tfortune ('Stripper ', 'Israel', 'Donalda Trump', 0);



//EX2------------------------------------------------------------------------------------------------

function calculateDogAge (dogage:number, ){
    var humanage = 'your dog age is ' +dogage + ' your dogs age in human years is ' + dogage*7
    console.log(humanage);
}
calculateDogAge (5);
calculateDogAge (1);
calculateDogAge (3);

//EX3-------------------------------------------------------------------------------------------------

function calculateSupply  (age:number, amount:number ) {
 var death:number = 120
 var peryear = amount*365;
 var sumamount:number = amount*(death-age)*peryear
 var message = 'your age is ' +age +' you will need ' +sumamount +' untill the age of ' +death +' you smoke ' +peryear +' packs per year'
 console.log(message);

}
calculateSupply(18,1)
calculateSupply(99,2)
calculateSupply(25,1.5)

//EX4 (wtf)


//EX5 

function celsiusToFahrenheit( cel:number, ) {

var celtofah = (cel/5)*9 + 32;
console.log('Temprature in C*' +cel +' will be ' +celtofah +' F*');



}

celsiusToFahrenheit(20)




function fahrenheitToCelsius( fah:number, ) {

    var fahtocel = ((fah-32)*5)/9;
    console.log('Temprature in F* ' +fah +'will be '+fahtocel + 'cel*')

    
}
  
    fahrenheitToCelsius(30)
  