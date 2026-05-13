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
     

const form = document.querySelector("#submitBtn");

form.addEventListener("click", function(e) {
    e.preventDefault(); 
    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const phonenumber=document.querySelector("#phonenumber").value;
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const Massege = document.querySelector("#Massege").value;

    console.log(username)
    console.log(email)
    console.log(phonenumber)
    console.log(firstname)
    console.log(lastname)
    console.log(Massege)

    if (firstname.length<2) {
        alert("שם ראשון חייב להיות לפחות 2 תווים");
         return;
    }
    if (lastname.length<2) {
        alert("שם שני חייב להיות לפחות 2 תווים");
         return;
    }
    if (username.length<5) {
        alert("שם משתמש חייב להיות לפחות 5 תווים");
         return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("כתובת אימייל לא חוקית");
         return;
   
    }
    if (phonenumber.length<10 && phonenumber>10) {
        alert("הטלפון חייב להיות עם 10 מספרים");
         return;
    }
    if (Massege.length<10) {
        alert("ההודעה חייבת להיות לפחות 10 תווים");
         return;
    }
    alert("הטופס נשלח בהצלחה")
    /*
    fetch("http://localhost:3000/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email: email, phonenumber: phonenumber,firstname: firstname,lastname: lastname, Massege: Massege })
    })
    .then(res => res.text())
    .then(data => alert(data))
    .catch(err => console.error(err));
    */
    
})