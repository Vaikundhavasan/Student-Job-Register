const afterClick = document.querySelectorAll(".afterClick")


const getOption =  () =>{
    afterClick.forEach( (show) => {
        const e = document.getElementById("arrear").value;
        if(e == "yes"){
            show.classList.add("active");
        }
        else if(e == 'no'){
            show.classList.remove('active');
        }
    })
}  
