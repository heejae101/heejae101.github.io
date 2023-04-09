/*------------------header & footer------------------*/ 
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
  
  /*----- ✨ 실행 -------*/
  document.addEventListener('DOMContentLoaded',()=>{
    includeHTML(findMenuBtns);
  }); 
  
  
  
  /*---------- Define an array to store login credentials --------------*/
  let users = [
    {login_tel:"01015771577", login_pwd:"A1352468"},    // name으로 따온다.
    {login_tel:"01016005222", login_pwd:"2710630bB"}
  ];

  function login() {
    // Get the username and password entered by the user
    let tel = document.getElementById("id_input").value;
    let pwd = document.getElementById("pwd_input").value;

    // Check if the login credentials match any user in the array
    let match=false;
      for (let i = 0; i < users.length; i++) {
        if (tel === users[i].login_tel && pwd === users[i].login_pwd) {
          match = true;
          break;
        }
      }

    // If the login credentials match, redirect to another HTML page
      if (match) {
        window.location.href = "../index.html";
      } else {
        check_error_text_1.textContent = '※ 유효하지 않은 계정입니다.';
        check_error_text_2.textContent = '다시 확인 후, 입력해주세요.';
      }
    }