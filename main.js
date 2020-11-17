
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".nav-menu").classList.toggle("show");
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', { delay: 500 });
ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
ScrollReveal().reveal('.cards-banner-two', { delay: 500 });

//parte exclusiva de vue.js



new Vue({
  el: "#hello-world-app",
  data() {
    return {
      msg: "Esto es el mensaje que puede producir vue cuando uno se propone a escribir sobre la pagina"
    }
  }
});


