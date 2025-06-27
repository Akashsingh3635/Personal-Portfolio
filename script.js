    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    });
    document.getElementById("menu-btn").addEventListener("click", function () {
      const menu = document.getElementById("menu");
      menu.classList.toggle("hidden");
    });
  