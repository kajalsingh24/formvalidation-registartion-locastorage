function datafunction()
{
  let arrjson=JSON.parse(localStorage.getItem("loginstudent"));
     document.getElementById("uemail").innerHTML=arrjson[0].useremail;
     document.getElementById("ppassword").innerHTML=arrjson[0].userpassword;
}

function userlogout()
{
localStorage.removeItem("loginstudent");
document.getElementById("removerow").remove();
window.location.href = "index.html";
}