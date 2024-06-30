let usr=document.querySelector(".user");
let psd=document.querySelector(".password");
let check=document.querySelector("#remember");
let fp=document.querySelector("#pswd");
let btn=document.querySelector(".click");
let link=document.querySelector("a");

btn.addEventListener("click",function(e){
    e.preventDefault();
 if(usr.value&&psd.value&&check.checked==true){
    alert("Login Done.....");
 }
 else {
    alert("Please enter all the info..");
 }
    
});

link.addEventListener("click",()=>{
alert("email has sent to resest the password...please check");
});