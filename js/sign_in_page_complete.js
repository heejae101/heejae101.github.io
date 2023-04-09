 /*----------------------------------- ajax : nav, footer -------------------------------*/
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

/*------------auto website chaning after 5seconds-----------*/
  function Timer(){
    setTimeout("locateKap()",5000);
  }
  function locateKap(){
    location.replace("../index.html");
  }
/*------------------5seconds countdown text( adjust function above:function(timer) )-------------------------*/

   /*---------판도라의 상자------------
   |                                   |                       
   |    setTimeout(function(){         |
   |      location.reload();           |
   |    },5000);                       |
   |                                   |
   |-----------------------------------*/


  let time=5;
  let interval=setInterval(function(){
    time--;
     if (time===4) document.getElementById("success_sign_in_count").innerHTML="4";
     if (time===3) document.getElementById("success_sign_in_count").innerHTML="3";
     if (time===2) document.getElementById("success_sign_in_count").innerHTML="2";
     if (time===1) document.getElementById("success_sign_in_count").innerHTML="1";
     if (time===0) clearInterval(interval);
  },1000);
