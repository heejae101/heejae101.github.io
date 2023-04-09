/*------------auto website chaning after 5seconds-----------*/
  function Timer(){
    setTimeout("locateKap()",5000);
  }
  function locateKap(){
    location.replace("../index.html");
  }
/*------------------5seconds countdown text( adjust function above:function(timer) )-------------------------*/

   /*---------판도라의 상자------------
   |                                           |                       
   |    setTimeout(function(){          |
   |      location.reload();                |
   |    },5000);                              |
   |                                           |
   |-------------------------------------*/


  let time=5;
  let interval=setInterval(function(){
    time--;
     if (time===4) document.getElementById("success_sign_in_count").innerHTML="4";
     if (time===3) document.getElementById("success_sign_in_count").innerHTML="3";
     if (time===2) document.getElementById("success_sign_in_count").innerHTML="2";
     if (time===1) document.getElementById("success_sign_in_count").innerHTML="1";
     if (time===0) clearInterval(interval);
  },1000);
