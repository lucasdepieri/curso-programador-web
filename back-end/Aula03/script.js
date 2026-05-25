
    function saudacao() {
      let data = new Date();
      let hora = data.getHours();
      let msg = document.getElementById("saudacao");
      let img = document.getElementById("imgSaudacao");

      if (hora < 12) {
        msg.innerHTML = "Bom dia!";
        img.src = "https://media.tenor.com/y3oaXzpRwOEAAAAe/bom-dia-bom-dia-meu-amor.png";
      } else if (hora < 18) {
        msg.innerHTML = "Boa tarde!";
        img.src = "https://media.tenor.com/lxKGO_psFSkAAAAM/boa-tarde-tarde.gif";
      } else {
        msg.innerHTML = "Boa noite!";
        img.src = "https://media.tenor.com/XKXHoLHw0JEAAAAe/boa-noite-noite.png";
      }
    }
