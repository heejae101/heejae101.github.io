 /*------top, nav------*/  
   function includeHTML(callback){
        let z, elmnt, file, xhttp;
        z = document.getElementsByTagName("*");
        for (let i = 0; i < z.length; i++) {
          elmnt = z[i];
          file = elmnt.getAttribute("data-include");
          if (file) {
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4) {
                if (this.status == 200) {elmnt.innerHTML = this.responseText;}
                if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
                /* Remove the attribute, and call this function once more: */
                elmnt.removeAttribute("data-include");
                includeHTML(callback);
              }//if
            }//onreadystatechange
            xhttp.open("GET", file, true);
            xhttp.send();
            return;
            if (this.readyState != 4) return;
          }//if - file
        }//for
        if (callback) callback();
      }//includeHTML

      function findMenuBtns() {
        const navBar = document.querySelector("nav");
        const menuBtns = document.querySelectorAll(".menu-icon");
        menuBtns.forEach((menuBtn) => {
          menuBtn.addEventListener("click", () => {
            console.log('click');
            navBar.classList.toggle("open");
          });
        });
      }

      /* ✨ 실행 */
      document.addEventListener('DOMContentLoaded',()=>{
        includeHTML(findMenuBtns);
      }); 