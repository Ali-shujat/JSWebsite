
// /* Lägg till den JS du behöver för uppgifterna här nedan, när du är klar med en övning så kommentera ut den, och lägg in JS för nästa övning osv.. */

 function myFunc(){
     var printHello ='Shujat';
     var counter = printHello.length;

     document.getElementById("jojo").innerHTML='<h1>'+'My first name is '+ '<strong>'+ printHello + '</strong>'+' and my name contain '+counter+' letters.'+'</h1>';
}
myFunc();
/* ------------------------------------------------------------*/
/*----------------- while loop --------------------------------------*/
/* ------------------------------------------------------------*/
                   
                    var text = "";
                    var i = 30;
                    while (i < 41) {
                        text += i +". Kalle kula <br>";
                        i++;
                    }
                    document.getElementById("p1").innerHTML = text; 

 /* ------------------------------------------------------------*/
/*----------------- current time--------------------------------------*/
/* ------------------------------------------------------------*/                   

function myFunction (){
    var Today = new Date();
    var hourNow = Today.getHours();
    var greeting;

    if (hourNow > 15) {
        greeting = 'Kl är 15 eller mer nu..';
    } 
    else if (hourNow < 15) {
        greeting = "kl är mindre 15";
    }
    else if (hourNow = 15) {
        greeting = "Good day";
    }
    else {
        greeting = 'Klockan har inte hunnit blivit 15 än..';
    }
    document.getElementById("joj").innerHTML = '<h1>' + greeting +' Klockan är'+ hourNow + '</h1>';
} 

   



