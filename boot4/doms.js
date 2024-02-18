
        
        function textChange() {
          
            var theText = document.getElementById("text");

           theText.textContent = "Installed successful";
        }

        var changeButton = document.getElementById("button");
         changeButton.addEventListener("click",textChange);
    
       