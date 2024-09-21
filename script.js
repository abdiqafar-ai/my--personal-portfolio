const h2 = document.createElement("h2");
h2.textContent = "";
document.querySelector("body").appendChild(h2);

document.getElementById('my form').addEventListener('submit',function(e){
e.preventDefault();
let Name=document.getElementById(Name).value;
let Email=document.getElementById('Email').value;
let Message=document.getElementById('Message').value
if (Name==="||Email==="||Message===""){
    alert('Please fill in the all field')
}else{
    alert('Form submitted successfully')
}

})