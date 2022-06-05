fname = window.localStorage.getItem("fname")
lname = window.localStorage.getItem("lname")
email = window.localStorage.getItem("email")
phone = window.localStorage.getItem("phone")
address = window.localStorage.getItem("address")
skills = window.localStorage.getItem("skills")
pskills = window.localStorage.getItem("pskills")

psum = window.localStorage.getItem("psum")
whis = window.localStorage.getItem("whis")
affil = window.localStorage.getItem("affil")
educ = window.localStorage.getItem("educ")


document.querySelector(".fname").innerText = fname
document.querySelector(".lname").innerText = lname
document.querySelector(".emailtxt").innerText = email
document.querySelector(".phonetxt").innerText = phone
document.querySelector(".addresstxt").innerText = address
document.querySelector(".psum").innerText = psum
document.querySelector(".skills").innerHTML = skills
document.querySelector(".educ").innerHTML = educ
document.querySelector(".whis").innerHTML = whis
document.querySelector(".affil").innerHTML = affil

let button = document.querySelector("#printbtn")
let print = document.querySelector(".print")
const body = document.querySelector("body")



button.addEventListener("click", () => {
    body.removeChild(print)

    html2pdf().from(body).save();
})
