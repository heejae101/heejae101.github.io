  /*---------------------- header & footer --------------------------*/  
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

/*-----------  modal --------------*/
document.addEventListener('DOMContentLoaded',()=>{
  function showModal() {
     let modal = document.getElementById("myModal");
     modal.style.display = "block";
  }

  // 모달 창을 닫는 함수
  function closeModal() {
      let modal = document.getElementById("myModal");
      modal.style.display = "none";
  }

  // 모달 창을 열기 위한 버튼 클릭 시 호출
  let modalBtns = document.querySelectorAll(".terms_agree");

   modalBtns.forEach(function(btn) {
       btn.onclick = function() {
           showModal();
       }
   });

  // 모달 창 우측 상단의 닫기, 가운데 하단 닫기 버튼 클릭 시 closeModal 함수 호출
  let closeBtns = document.querySelectorAll(".close");
  closeBtns.forEach(function(btn) {
    btn.onclick=function(){
      closeModal();
    }
  });

  // 모달 창의 배경을 클릭 시 모달 창 닫기
  let modal = document.getElementById("myModal");
  window.onclick = function (event) {
      if (event.target == modal) {
          closeModal();
      }
  }
});

/*---------------------check box---------------------*/
function checkForm(f) {
      
    // 약관동의 필수체크 부분(checkbox)
    for (let i = 1; i < 4; i++) {
        let checkboxName = 'check_list_terms_essential_' + i;
        if (!document.frm[checkboxName].checked) {
            check_error_text.textContent = '※ 약관동의 (필수) 부분에 동의해주세요.';
            document.frm[checkboxName].focus();
            return false;
        }
    }
    return true;
  }



/*---------------------- select all checkbox --------------------------*/
  function selectAll(selectAll){              // 전체클릭 함수
    let checkboxes=                           // 변수명 지정
    document.getElementsByName("terms");      // 이름값이 "terms"로 지정된 요소들을 불러옴

    checkboxes.forEach(function(checkbox){    // 지정된 변수들에 기능을 부여(forEach : 루프돌기)
      checkbox.checked = selectAll.checked    // HTML의 체크박스 요소들의 체크속성 = 체크박스의 요소의 체크속성(선택/해제) 
    });
  };