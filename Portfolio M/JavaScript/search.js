
document.addEventListener("DOMContentLoaded", function(event){
    var prueba = document.getElementById("txt-search").value;
    

    console.log(prueba.typeOf);
    var button;
button= document.getElementById("mybutton");
button.addEventListener('click',function(){search();}, false);

 function search(){
 var  input, filter, ul, li, div, i;
 input = document.getElementById("text-search");
 filter = input.value;
 ul = document.getElementById("myUL");
 li = ul.document.getElementByTagName("li");

 for(i = 0; i<li.length; i++){
     div = li[i].getElementByTagName("div")[0]; 
     if(div.innerHTML.toLowerCase().indexOf(filter)>-1){
     li[i].style.display=" ";
    }else{
     li[i.style.display="none"];
 }
 }
 }
});
