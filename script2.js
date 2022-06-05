// Common Script of Form Validation for both the templates

var fname = document.querySelector('#fname')
var lname = document.querySelector('#lname')
var email = document.querySelector('#email')
var phone = document.querySelector('#phone')
var address = document.querySelector('#address')
var psum = document.querySelector('#psum')
var whis = CKEDITOR.instances.whis
var affil = CKEDITOR.instances.affil
var educ = CKEDITOR.instances.educ
var skills=CKEDITOR.instances.skills
var form = document.querySelector('#form')
var block2=document.querySelector(".block2")
var pskills=CKEDITOR.instances.pskills

function setErrorMsg(input, errormsg) {
    input.parentElement.querySelector("small").innerText = errormsg
    input.parentElement.className = "form-control error"

}
function setSuccessMsg(input) {
    input.parentElement.className = "form-control success"
}

if (window.localStorage.getItem("template") === "1") {
    document.querySelector("#hide").style.display='none';
}
if(window.localStorage.getItem("template")==="2"){
    document.querySelector("#ahide").style.display='none';
}

function checkEmail(email) {
    let emailval = email.value
    // let regemail= new RegExp(String,emailval)

    // const pattern = new RegExp("[A-Za-z0-9_.-]{3,}(@)[a-zA-Z0-9-]{3,}[.][a-zA-z]{2,10}")
    const pattern = /^[A-Za-z0-9_.-]{3,}(@)[a-zA-Z0-9-]{3,}[.][a-zA-z.]{2,10}$/

    if (emailval === "") {
        return false
    }

    else if (!pattern.test(emailval)) {
        return false;
    }
    else { return true; }





}


fname.addEventListener('input', () => {
    let fnameval = fname.value.trim();
    if (fnameval === "") {
        setErrorMsg(fname, "First Name cannot be blank")
    }
    else {
        setSuccessMsg(fname)
        
    }

})
lname.addEventListener('input', () => {
    let lnameval = lname.value.trim();
    if (lnameval === "") {
        setErrorMsg(lname, "Last Name cannot be blank")
    }
    else {
        setSuccessMsg(lname)
    }
})



email.addEventListener('input', () => {
    let emailval = email.value.trim();
    if (!checkEmail(email)) {
        setErrorMsg(email, "please enter a valid Email")
    }
    else {
        setSuccessMsg(email)
    }

})

phone.addEventListener('input', () => {
    let phoneval = phone.value.trim();
    let pattern = /^[0-9]{10}$/
    if (pattern.test(phoneval)) {
        setSuccessMsg(phone)
    }
    else {
        setErrorMsg(phone, 'Please enter a valid 10 digit phone number')
    }
})

form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (fname.value.trim() === "" || lname.value.trim() === "" || email.value.trim() === "" || phone.value.trim() === "" || address.value.trim() === "" || psum.value.trim() === "" || whis.getData().trim() === "" || educ.getData().trim() === "" ||skills.getData().trim()==="") {
        
        alert("Please enter all the fields!!")

    }
    else {
        window.localStorage.setItem('fname', fname.value)
        window.localStorage.setItem('lname', lname.value)
        window.localStorage.setItem('email', email.value)
        window.localStorage.setItem('phone', phone.value)
        window.localStorage.setItem('address', address.value)
        window.localStorage.setItem('psum', psum.value)
        window.localStorage.setItem('whis', whis.getData())
        window.localStorage.setItem('affil', affil.getData())
        window.localStorage.setItem('educ', educ.getData())
        window.localStorage.setItem('skills', skills.getData())
        window.localStorage.setItem("pskills",pskills.getData())
       


        if (window.localStorage.getItem("template") === "1") { window.location.href = "indext1.html" }
        else {
            window.location.href = "indext2.html"
        }

    }




})
