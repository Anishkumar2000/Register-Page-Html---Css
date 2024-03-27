function on() {
   var name=document.querySelector("#name").value;
   var name=document.querySelector("#email").value;
   var name=document.querySelector("#password").value;
   var name=document.querySelector("#cpassword").value;
   // document.querySelector(".ename").innerHTML=name;
   if (name==="") {
      document.querySelector(".ename").innerHTML = "Please Enter Your Name";
      
   }
   else{
      document.querySelector(".ename").innerHTML = "";
   }
   
}