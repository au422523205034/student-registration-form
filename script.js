document.getElementById("student").addEventListener("submit",function(event)
{
    event.preventDefault();
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;
    let password=document.getElementById("password").value;
    let gender=document.getElementById("gender").value;
    let date=document.getElementById("date").value;
    let department=document.getElementById("department").value;
    let address=document.getElementById("address").value;
    if(name==="" ||email==="" ||password==="" ||gender==="" ||department===""){
        document.getElementById("message").innerHTML="Please fill the details";
    }else{
        document.getElementById("message").innerHTML="Registration success";
    }
});