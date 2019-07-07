
function answer1(){
    document.getElementById("question1").innerHTML = "what is 5 + 5 =" + "</br></br></br>" + "<button onclick = myFunction1()  id = q1 > 10 </button></br></br>" +  "<button onclick = myFunction2()  id = q2 > 20 </button></br></br>" + "<button onclick = myFunction3()  id = q3 > 15 </button></br></br>";
 document.getElementById("start").innerHTML = "";
}
function myFunction1(){
    document.getElementById("question1").innerHTML = "correct";
    document.getElementById("start").innerHTML = "";
    document.getElementById("n001").innerHTML ="<button onclick = begin()  > next </button> ";
}
function myFunction2(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("start").innerHTML = "";
    document.getElementById("n001").innerHTML ="<button onclick = begin()  > next </button> ";
}
function myFunction3(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("start").innerHTML = "";
    document.getElementById("n001").innerHTML = "<button onclick = begin()  > next </button> ";
}
function begin() {
    document.getElementById("question1").innerHTML = "what is 15 * 6 ="  + "</br></br></br>" + "<button onclick = myFunction4()  id = q4 > 65 </button></br></br>" +  "<button onclick = myFunction5()  id = q5 > 90 </button></br></br>" + "<button onclick = myFunction6()  id = q5 > 120 </button></br></br>";
    document.getElementById("n001").innerHTML = "";

    
}
function myFunction4(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML ="<button onclick = go() > next </button> ";
}
function myFunction5(){
    document.getElementById("question1").innerHTML = "correct";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML ="<button onclick =  go() > next </button> ";
}
function myFunction6(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML ="<button onclick = go() > next </button> ";
}
function go(){
    document.getElementById("question1").innerHTML = "what is 86 / 2 ="  + "</br></br></br>" + "<button onclick = myFunction7()  id = q7 > 42 </button></br></br>" +  "<button onclick = myFunction8()  id = q8 > 45 </button></br></br>" + "<button onclick = myFunction9()  id = q9 > 43 </button></br></br>";
    document.getElementById("m001").innerHTML = "";
}
function myFunction7(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML ="<button onclick =  go() > next </button> ";
}
function myFunction8(){
    document.getElementById("question1").innerHTML = "incorrect";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML ="<button onclick =  go() > next </button> ";
}
function myFunction9(){
    document.getElementById("question1").innerHTML = "correct";
    document.getElementById("start").innerHTML = "";
    document.getElementById("m001").innerHTML ="<button onclick =  go() > next </button> ";
}


   
       
       