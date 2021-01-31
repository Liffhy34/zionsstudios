var menuClick = document.getElementById("menu-btn");
        var main = document.getElementById("ctn-main");
        var closeButton = document.getElementById("close");
        var vecto = document.getElementById("vectorial");
        var navbar = document.getElementById("navbar");
        var logo = document.getElementById("logo-vt");

        function vectorial(){
            vecto.style.display="block";
            main.style.display="none";
            logo.style.display="none";
            vecto.style.animation="in 2s 1 ease";
        }

        function menu(){

            if(menuClick.style.display = "block"){
                menuClick.style.display = "none";
                main.style.display = "none";
                closeButton.style.display = "block";
                navbar.style.height = "250px";
                navbar.style.transition = "2s";


            }
            else{
                menuClose();
            }
        }
        function menuClose(){
            if((closeButton.style.display = "block") || (menuClick.style.display = "none")){
                main.style.display = "block";
                menuClick.style.display = "block";
                closeButton.style.display = "none";
                main.style.animation="out 2s 1 ease";
                navbar.style.height = "80px";
            }
            else{
                menu();
            }
        }

        function vtclose(){
            vecto.style.display="none";
            main.style.display="block";
            main.style.animation="out 2s 1 ease";
        }