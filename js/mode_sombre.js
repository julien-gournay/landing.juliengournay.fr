//JS Changement d'img (thème sombre)
var icon = document.getElementById("icon");
        var logo = document.getElementById("logoName")

        icon.onclick = function(){
            document.body.classList.toggle("dark-theme");
            if(document.body.classList.contains("dark-theme")){
            icon.src = "img/sun.png";
            logo.src = "img/logoName.png";
            }else{
            icon.src = "img/moon.png";
            logo.src = "img/logoName_s.png";
            }
        }