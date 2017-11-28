
// /* Lägg till den JS du behöver för uppgifterna här nedan, när du är klar med en övning så kommentera ut den, och lägg in JS för nästa övning osv.. */


/* ------------------------------------------------------------*/
/*----------------- 5.1 --------------------------------------*/
/* ------------------------------------------------------------*/

var mystring1 = '123';
var mystring2 = ' ';
if (mystring1.length == 0){
     console.log ('mystring1 är tom ...');
    }
else {
    console.log ('mystring1 är ej tom ...'); 
}
if (mystring2.length != 0){
    console.log ('mystring2 är ej tom ...');
   }
else {
   console.log ('mystring2  är tom ...'); 
}

/* ------------------------------------------------------------*/
/*----------------- Delövning 5–2------------------------------*/
/* ------------------------------------------------------------*/
var mystring3 = 'z';
var res = mystring3.valueOf();

if (res == 'x') {
    console.log ('antingen är det tomt eller så finns här ett X');
} else if (res == 'y') {
    console.log ('Ett Y är hittat ...');
}else{
    console.log ('String är inte tom , innehäller inte X eller Y...');
}
/* ------------------------------------------------------------*/
/*----------------- Delövning 5–3------------------------------*/
/* ------------------------------------------------------------*/

var mystring4 = null;
/* var mystring4 = undefined; */

if (typeof mystring4 === 'object') { 
    console.log ('Ett Null är hittat ...');
} else {
    console.log ('Ett Null är inte hittat ...'); 
}

/* ------------------------------------------------------------*/
/*----------------- Delövning 5–4------------------------------*/
/* ------------------------------------------------------------*/
function myFunction(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    document.getElementById("rndBgrnd").style.backgroundColor = "rgb("+r+","+g+","+b+")" ;  
}

/* ------------------------------------------------------------*/
/*----------------- Delövning 5–5------------------------------*/
/* ------------------------------------------------------------*/
function myFunction1(){
var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;
document.getElementById("jojo").innerHTML= "Ditt Internet Browser är just nu"+ w +"X"+ h +"px" ;
}

/* ------------------------------------------------------------*/
/*----------------- Delövning 5–6------------------------------*/
/* ------------------------------------------------------------*/
var curLoc= window.location.href; 
console.log (curLoc);
/* ------------------------------------------------------------*/
/*----------------- Delövning 5–7------------------------------*/
/* ------------------------------------------------------------*/
var str1 = "The best way to learn stuff";
var str2 = " is to";
var str3 = " practice it!";

var str4 = str1.concat(str2,str3); 
document.getElementById("demo").innerHTML = str4;
/* ------------------------------------------------------------*/
/*----------------- Delövning 5–8------------------------------*/
/* ------------------------------------------------------------*/
var myNameSpace ={
    firstName:"Jeff",
    lastName:" Teper",
    title:"The Godfather of Sharepoint"
}
console.log (myNameSpace.firstName + myNameSpace.lastName +" - "+ myNameSpace.title);
/* ------------------------------------------------------------*/
/*----------------- Delövning 5–9------------------------------*/
/* ------------------------------------------------------------*/

function myFunction2(){

   var xcf = document.getElementById("celci").value * 9 / 5 + 32;
    document.getElementById("ccff").innerHTML = xcf;
}
/* ------------------------------------------------------------*/
/*----------------- Delövning 5–10------------------------------*/
/* ------------------------------------------------------------*/
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday - Its a Family day";
        break;
    case 1:
        day = "Monday - Go to work";
        break;
    case 2:
        day = "Tuesday - A busy day at office";
        break;
    case 3:
        day = "Wednesday - Mid week ";
        break;
    case 4:
        day = "Thursday - Need more Energy";
        break;
    case 5:
        day = "Friday - Weekend start";
        break;
    case  6:
        day = "Saturday - party Begins";
}
console.log("Just denna det är det "+ day);




