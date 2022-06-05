fname=window.localStorage.getItem("fname")
lname=window.localStorage.getItem("lname")
email=window.localStorage.getItem("email")
phone=window.localStorage.getItem("phone")
address=window.localStorage.getItem("address")
skills=window.localStorage.getItem("skills")
pskills=window.localStorage.getItem("pskills")

psum=window.localStorage.getItem("psum")
whis=window.localStorage.getItem("whis")
educ=window.localStorage.getItem("educ")


document.querySelector(".fname").innerText=fname
document.querySelector(".lname").innerText=lname
document.querySelector(".email").innerText=email
document.querySelector(".phone").innerText=phone
document.querySelector(".address").innerText=address
document.querySelector(".psumtxt").innerText=psum
document.querySelector(".skillstxt").innerHTML=skills
document.querySelector(".eductxt").innerHTML=educ
document.querySelector(".whistxt").innerHTML=whis
document.querySelector(".pskillstxt").innerHTML=pskills

var printbtn=document.querySelector(".printbtn")
const body=document.querySelector("body")

printbtn.addEventListener('click',()=>{
    body.removeChild(printbtn)
    html2pdf().from(body).save()
    

})