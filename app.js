document.addEventListener("DOMContentLoaded", function(){
    const btn = document.getElementById("searchBtn");
    const ui = document.getElementById("search");
    const result = document.getElementById("result");

        function SuperLst(){
            const uq = ui.value.trim().toLowerCase();
            const shr = new XMLHttpRequest();           
            shr.open('GET',  `superheroes.php?query=${encodeURIComponent(uq)}`, true);
            shr.send();
            shr.onreadystatechange = function(){
                if (shr.readyState === XMLHttpRequest.DONE) {
                    if (shr.status === 200) {
                        const rsp = shr.responseText;
                        result.innerHTML = rsp;
                    } 
                    else {
                        alert("Your request could not be processed");
                }
            }
        }
    }  
    btn.addEventListener('click', SuperLst);
});
