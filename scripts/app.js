// Make a function that checks whether the current year is a leap year or not

function leapYear(){
    var todayDate= new Date();
    var currentYear= todayDate.getFullYear();
    console.log(todayDate);
    console.log(currentYear);
    if (currentYear%4==0){
        document.write("Current Year" + currentYear + " is a leap Year." + "<br>");
    }
    else{
        document.write("Current Year " + currentYear + " is not a leap Year." + "<br>");
    }

 }

 leapYear();

// Make a function that returns the leap years of upcoming next 10 years

function tenYearLeapYears(){
    var todayDate= new Date();
    var currentYear= todayDate.getFullYear();
    var tenYear= currentYear+10;
    document.write("The leap years of upcoming next 10 years" + "<br>");
    for(var i=currentYear; i<=tenYear; i++){
        if (i%4==0){
            document.write(i + "<br>");
        }
    }
}

tenYearLeapYears();


// Make a function to generate OTP
function OTP(){

}
 
OTP();


// Make a function that converts string into capital case

function capString(){
    var sentence= prompt("Enter sentence: ");
    var capsentence= sentence.toUpperCase();
    document.write(capsentence + "<br>");
}
capString();

// Make a function that calculate your age
function calcAge (){
var year= prompt("Enter your birth Year: ");
var month= prompt("Enter your birth Month (1 to 12): ");
var date= prompt("Enter your birth Date: ");
var todayDate= new Date();
var currentYear= todayDate.getFullYear();
var currentMonth=todayDate.getMonth() ;
var age= currentYear - year;
if (currentMonth< month){
    age--;
}
alert("You are " + age + " years old");
}

calcAge ()