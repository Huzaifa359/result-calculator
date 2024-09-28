let a = prompt("enter your name");
let b = prompt("total marks");
let c = prompt("obtained marks");9
let d = (c/b)*100;
document.write("name &nbsp" + a + "<br><br>");
document.write("total marks &nbsp" + b + "<br><br>");
document.write("obtained marks &nbsp" + c + "<br><br>") ;
document.write("percentage&nbsp"  + d + "<br><br>");

if (d>=80){
    document.write("grade A+");
}
 else if  (d>=70){
    document.write("grade A");
}
 else if (d>=60){
    document.write("grade B");
}
else if (d>=50){
    document.write("grade C");
}
else if (d>=40){
    document.write("grade D")
}
