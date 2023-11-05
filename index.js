const btn = document.getElementById("btn")
btn.addEventListener("click", getValue)

function getValue(event){
 
    event.preventDefault();
  
    var valueemail = document.getElementById("email").value
    var valuepass = document.getElementById("password").value
    var valuefeedback = document.getElementById("message").value
    console.log("getValue ~ valueemail:",valueemail)
    console.log("getValue ~ valuepass:",valuepass)
    console.log("getValue ~ valuefeedback:",valuefeedback)
}
document.getElementById("btn").addEventListener("click", function (){
    const name = document.getElementById("name").value;
    const mailto = "nguyenbaolong6a2@gmail.com";
    const message = document.getElementById("message").value;
    const mailtoLink = `mailto:${mailto}?subject=${name}&body=${message}`;

    window.location.href = mailtoLink;
});