function validate(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="admin" && password=="pepcoding"){
       window.location.href="main.html";
    }
    else{
        alert("login failed");
    }
}