
// /* Lägg till den JS du behöver för uppgifterna här nedan, när du är klar med en övning så kommentera ut den, och lägg in JS för nästa övning osv.. */
                    /* delovning 2+3 */
function myFun(){
    var text='';
    for (i = 01; i <06; i++) { 
        text +=  i +". Hello!"+"<br>";
    }
    document.getElementById("p2").innerHTML = text;
    
} 

                    /* delovning 5 */

/* var text='';
var y=10;
var blue= 'blue';
var red = 'red';
for (i = 1; i <8; i++) { 
    text +=  i +". Hallå!"+"<br>";
    if (i=2) {
        text +=  i +". <style="color:red;">Hallå!"+"<br>";
    }
    else if (i=3) {
        text +=  i +". <style="color:blue;">Hallå!"+"<br>";
    } else {

        text +=  i +".<style="color:black;">Hallå!"+"<br>";
    } 
    
}
document.getElementById("p3").innerHTML = text;   */
 
function myFunction() {
    var x = document.getElementById("inp1").value;
    var y = document.getElementById("inp2").value;
    var z = parseInt(x) + parseInt(y) ;
    document.getElementById("demo").innerHTML = z;
    document.getElementById("demo").style.fontSize= "250%";

}

/* find remaing days in julfton scripting */
function myFunction1(){
var _MS_PER_DAY = 1000 * 60 * 60 * 24;
var a    = new Date();
var b    = new Date("2017-12-25"); // Or any other JS date

var remainingDays    = dateDiffInDays(a, b);

if (remainingDays > 0 ) { // Apply you login on remaining days
}

// a and b are javascript Date objects
function dateDiffInDays(a, b) {
  // Discard the time and time-zone information.
  var utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  var utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}
document.getElementById("demo2").innerHTML = remainingDays ;
}

/* random number generator scripting */

function myFunction2() {
    var x = Math.floor((Math.random() * 6) + 1);
    document.getElementById("demo3").innerHTML = x;
}
/* string length scripting */

var myStr = "Dolor sit amet, consectetur adipiscing elit. Ut ullamcorper mauris sit amet dui tristique pretium.shujat ali";
var strLen = myStr.length;
if (strLen < 50) {
    document.getElementById("demo4").innerHTML = myStr;
} else {
    var res = myStr.substring(0,50);
    document.getElementById("demo4").innerHTML = res + "....";
}





