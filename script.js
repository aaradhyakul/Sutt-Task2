// script of template selection page
 
    let t1=document.querySelector(".t1")

    t1.addEventListener("click",()=>{
        window.location.href="index2.html";
        
        localStorage.setItem("template","1")
        

        
    })


    let t2=document.querySelector(".t2")

    t2.addEventListener("click",()=>{
        window.location.href="index2.html";
        localStorage.setItem("template","2")
    })
        

    
    


