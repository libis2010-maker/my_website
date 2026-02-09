let p=document.querySelector(".main")

 function logout(){
    p.style.color="pink"
    p.style.backgroundColor="green";
    p.style.border="1px solid";
    p.style.borderColor="black";
    p.style.borderRadius="10px";
 }
let a=document.querySelector("section1")
console.log(a)

function hiddenelem(){
   a.style.display="block"
}
function showelem(){
   a.style.display="none"
}
function myfunc(){
   if(a.style.display==="none")
      a.style.display="block"
   else 
      a.style.display="none"
}

function addline(){
   h2.style.textDecoration="s"
   h2.textcontent="text"

} 
 function changeColor(color) {
            console.log(color);

            let div=document.querySelector('#items')
            div.className=color
            
             
 }
     


