document.addEventListener("DOMContentLoaded", function () {
  const scrollDica = document.querySelector(".scroll-dica");
  const scrollContainer = document.querySelector(".scroll");

  function esconderDica() {
    if (scrollContainer.scrollLeft > 0) {
      scrollDica.classList.add("hidden");
      scrollContainer.removeEventListener("scroll", esconderDica);
    }
  }

  scrollContainer.addEventListener("scroll", esconderDica);
});
