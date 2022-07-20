// ================================loginpage=========================================
let loginarray=[];
function loginvalidation(e)
{
  // debugger
e.preventDefault();
  let useremail=document.getElementById("firstemail").value;
  let userpassword=document.getElementById("secondpassword").value;
  let regpreviousdata=JSON.parse(localStorage.getItem("student"));
  const loginobj=
  {
 "useremail":document.getElementById("firstemail").value,
 "userpassword":document.getElementById("secondpassword").value,                         
  }
   regpreviousdata.find(
       function(value)
       {
      if((value.email==useremail)&&(value.password==userpassword))
  {
document.getElementById("finalerror").innerHTML="email and passwrd match";
loginarray.push(loginobj);
document.getElementById("form").reset();
localStorage.setItem("loginstudent",JSON.stringify(loginarray)); 
window.location.href = "logintabledata.html";
} else
  {
    return false;
  }   
 })
}