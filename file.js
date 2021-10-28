/* Q1:
function createTable(){

document.getElementById('formId').style.display = "none";

row = document.getElementById('lines').value;
clm = document.getElementById('colomns').value;
  
 for(var r=0;r<parseInt(row,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(clm,10);c++)  
    {
     var y=  x.insertCell(c);
     y.innerHTML="Row-"+r+" Column-"+c; 
    }
   }
}
*/


/* Q2:
function changeStyles(){

    let bgc = document.getElementById('bgc');
    let fs = document.getElementById('fs');
    let fc = document.getElementById('fc');

    let div = document.getElementById('classId');
    let txt = document.getElementById('h4Id');

    div.style.backgroundColor=bgc.value;
    txt.style.fontSize=parseInt(fs.value);
    txt.style.color=fc.value;
}

*/

/* Q3:
function mouseOver(){
    var p = document.getElementById('pTag').innerHTML;

    document.getElementById('pTag').style.display="none";
    var txtArea = document.getElementById('ta').style.display="block";

    document.getElementById("ta").innerHTML=p;

}


function mouseOut(){
    var txt = document.getElementById('ta').value;
    document.getElementById('ta').style.display="none";
    
    document.getElementById('pTag').innerHTML = txt;

    document.getElementById('pTag').style.display="block";

}
*/  

/*
function myFunction(){
    document.getElementById("box").style.resize = "both";

}
*/
