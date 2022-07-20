function  firstnamevalidation()
{
  let firstname = document.getElementById("firstinput").value;
  let fullnamecheck=/^[A-Za-z. ]{3,30}$/;

 if(!fullnamecheck.test(firstname))
  {   
    document.getElementById("fullnamemsg").innerHTML="please enter valid name"; 
    return false;
  }
  else
  {
    document.getElementById("fullnamemsg").innerHTML=""; 
    return true;
  }
}
function  emailvalidation()
{
  let email=document.getElementById("secondinput").value;
  let emailcheck =/^[a-z0-9_]{3,}@[a-z0-9]{3,}[.]{1}[a-z]{2,6}$/;
  if(!emailcheck.test(email))
  {
    document.getElementById("emailerror").innerHTML="please enter valiad email";
    return false;
  }
else
{
  document.getElementById("emailerror").innerHTML="";
  return true;
}
}
function passwordvalidation()
{
  let password=document.getElementById("thirdinput").value;
  let passwordcheck=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  if(! passwordcheck.test(password))
  {
    document.getElementById("passworderror").innerHTML="please enter valid password";
    return false;
  }
else
{
  document.getElementById("passworderror").innerHTML="";
  return true;
}
}
function retypepasswordvalidation()
{
  let retypepassword=document.getElementById("fourinput").value;
  let pass=document.getElementById("thirdinput").value;
  if(retypepassword == "")
  {
    return false;
  }
  else if(pass == retypepassword)
  {
    document.getElementById("retypepassworderror").innerHTML="";
    return true;
  }
  else
  {
    document.getElementById("retypepassworderror").innerHTML="confirmpassword does not match";
    return false;
  }
}