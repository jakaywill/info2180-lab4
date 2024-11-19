document.addEventListener("DOMContentLoaded", function() {
    const btn = document.getElementById("searchBtn");

        const shr = new XMLHttpRequest();
        const link = "http://localhost/info2180-lab4/superheroes.php";
        
        shr.open('GET', link, true);
        shr.send();

        function SuperLst(){
            if (shr.readyState === XMLHttpRequest.DONE) {
                if (shr.status === 200) {
                    const rsp = xhr.responseText;
                    alert(rsp);
                } else {
                    alert("Your request could not be processed");
                }
            }
        }

        btn.addEventListener('click', SuperLst)
});
