 /*------------------회원가입 유효성 검사----------------------*/
 function checkForm(f) {
            const tel=document.getElementById('tel');
            const pwd=document.getElementById('pwd');
            const pwdCheck=document.getElementById('pwd_check');
            const birth=document.getElementById('birth');
            const email1=document.getElementById('email_1');
            const email2=document.getElementById('email_2');

            const errorTxtTel = document.getElementById('error_txt_1');
            const errorTxtPwd1 = document.getElementById('input_explanation_1');
            // const errorTxtPwd2 = document.getElementById('input_explanation_2');
            // const errorTxtPwd3 = document.getElementById('input_explanation_3');
            const errorTxtPwdCheck = document.getElementById('error_txt_2');
            const errorTxtBirth = document.getElementById('input_explanation_4');
            const errorTxtEmail = document.getElementById('error_txt_3');
            

            // **** 예약자정보 필수입력 부분(input text) ****

            // 전화번호 미입력 또는 11자리 미만 입력 시,
            if (tel.value === "" || tel.value.length<11) {
                errorTxtTel.textContent = "※ 전화번호는 숫자 11자리를 입력하셔야 합니다.";
                tel.focus();
                return false;
            }

            // 비밀번호 유효성 검사
            // const regexPwd1= /(\w)\1\1/;
            // const regexPwd2= /^(?=.*[A-Z]){8,20}$/;

            if (pwd.value.length<8 || pwd.value.length>20){
                errorTxtPwd1.style.color="red";
                pwd.focus();
                return false;
            } 
            //if (!regexPwd1.test(pwd.value)){
            //     errorTxtPwd2.style.color="red";
            //     pwd.focus();
            //     return false;
            //  if(!regexPwd2.test(pwd.value)){
            //     errorTxtPwd3.style.color="red";
            //     pwd.focus();
            //     return false;
            // }

            //비밀번호 입력값과 비밀번호 확인 입력값이 불일치 시, 
            const pwd1=document.getElementById('pwd').value;
            const pwd2=document.getElementById('pwd_check').value;

            if (pwd1 != pwd2){
                errorTxtPwdCheck.textContent = "※ 입력된 비밀번호와 일치하지 않습니다."
                pwdCheck.focus();
                return false;
            }
            
            //생년월일 미입력 또는 8자리 미만 입력 시.
            if (birth.value === "" || birth.value.length<8){
                errorTxtBirth.style.color="red";
                birth.focus();
                return false;
            }

          
            //이메일 미입력 시,
            if (email1.value === "") {
                errorTxtEmail.textContent = "※ 이메일 주소를 모두 입력해주세요.";
                email1.focus();
                return false;
            }

            if (email2.value === "") {
                errorTxtEmail.textContent = "※ 이메일 주소를 모두 입력해주세요.";
                email2.focus();
                return false;
            }

            //입력된 값이 이메일 형식이 아닐 경우,
            const regexEmail1 = /^[a-z0-9]+$/;
            const regexEmail2 = /^[a-z]+\.[a-z]{2,3}$/;

            if (!regexEmail1.test(email1.value)) {
                errorTxtEmail.textContent = '※ 올바른 이메일 형식이 아닙니다. *예시>hig7115@nate.com';
                email1.focus();
                console.log('1');
                return false;
            }

            if (!regexEmail2.test(email2.value)) {
                errorTxtEmail.textContent = '※ 올바른 이메일 형식이 아닙니다. *예시>hig7115@nate.com' ;
                email2.focus();
                console.log('2');
                return false;
            }

            return true;

        }



/*--- nav, footer ---*/
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