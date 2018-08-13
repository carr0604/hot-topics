const container = document.querySelector(".wrapper");
const btns = document.querySelectorAll("li");
let url = "./partials/home-body.html";



for(var i = 0; i < btns.length; i++) {
   btns[i].addEventListener("click", handleSelection); 
}


fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
        .catch(function (error) {
            console.log(error.message);
        });



function handleSelection(e) {
    e.preventDefault();
    
    for(var i=0; i < btns.length; i++) {    
        if(btns[i].hasAttribute("id") == true) {
           btns[i].removeAttribute("id"); 
        }   
        e.target.setAttribute("id","active");
    }

    console.log("TESTING");
    if(e.target.textContent === "HOME"){
       url = "./partials/home-body.html";
        
       fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
        .catch(function (error) {
            console.log(error.message);
        });
             
    } else if(e.target.textContent === "PORTFOLIO"){
       url = "./partials/portfolio-body.html";
        
       fetch(url)
        .then(function (response) {
            return response.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
        .catch(function (error) {
            console.log(error.message);
        });          
    }
}