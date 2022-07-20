let userarray=[];
const studentcheck=
{
 checkdata: function userdatacheck()
  {
    if(localStorage.getItem("student")!=null)
   
    {
      let previousedata=JSON.parse(localStorage.getItem("student"))
      if(previousedata.length>0)
      {
       return previousedata.find(
        function (value)
        {
          if(value.email==document.getElementById("secondinput").value)
          {
            document.getElementById("emailerror").innerHTML="this field already matched";
            return false;
          }
          else
          {
            return true;
          }
        });
      }else{
        document.getElementById("emailerror").innerHTML="";
        return true;
      }
    }else{
      return true;
    }
  }
}
function formsubmit(e)
{
 e.preventDefault(); 
 if(firstnamevalidation() && emailvalidation() && passwordvalidation() && retypepasswordvalidation()) 
{
const userobj={
 "firstname":document.getElementById("firstinput").value,
 "email":document.getElementById("secondinput").value,
 "password":document.getElementById("thirdinput").value,
};
if(studentcheck.checkdata())
{
userarray.push(userobj);
document.getElementById("form").reset();
localStorage.setItem("student",JSON.stringify(userarray));
}
}
else
{
return false;
}
};

 

