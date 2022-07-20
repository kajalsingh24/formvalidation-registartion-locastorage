
let regdata =JSON.parse(localStorage.getItem("student"));
function regopeartion()
{
 str="";
 for(x in regdata)
 {
   str+=`<tr>
   <td>${regdata[x].firstname}</td><td>${regdata[x].email}</td><td>${regdata[x].password}</td>
   <td><button id="editbtn" onclick="editbtn(${x})">Edit</button>
   <button id="deletbtn" onclick="deletbtn(${x})">Delet</button></td>
   </tr>`;                           
 }
 document.getElementById("userdata").innerHTML=str;
}
// ----------------------------editbutton-----------------------------------

function editbtn(index)
{
 document.getElementById("formregisterdata").style.display="block";

if(index==null || index==undefined)
{
return false;  
}
else{
let username=document.getElementById("firstinput");
let email=document.getElementById("secondinput");
let password=document.getElementById("thirdinput");
let indexvalue=document.querySelector('input[name="index"]');
// document.getElementById("deletbtn").style.display="none";
username.value=regdata[index].firstname;
email.value=regdata[index].email;
password.value=regdata[index].password;
indexvalue.value=index;
}
}
// -------------------------------delet table row-------------------------------------
function deletbtn(index)
{
if(index==null || index=="undefined")
{
  return false;
}
if(regdata[index])
{
  regdata.splice(index,1);
  localStorage.setItem("student",JSON.stringify(regdata));
  document.getElementById("formregisterdata").reset();
  regopeartion()
}
}
// -------------------------------update button-----------------------------------
function updatedata()
{ 
  let username = document.querySelector('input[name="username"]');
  let email = document.querySelector('input[name="email"]');
  let password = document.querySelector('input[name="pwd"]');
  let indexvalue = document.querySelector('input[name="index"]').value;

  if(indexvalue!=null && indexvalue!="undefined")
  {
  regdata[indexvalue]={"firstname":username.value,"email":email.value,"password":password.value}
  document.getElementById("formregisterdata").reset();
  localStorage.setItem('student',JSON.stringify(regdata));
    regopeartion();
  }
}
// ----------------------------searchbar------------------------------------------
function formsubmit(e)
{
  e.preventDefault()
  if(firstnamevalidation() && emailvalidation() && passwordvalidation() && retypepasswordvalidation())
  {
    return true;
  }else
  {
    return false;
    }
  }

