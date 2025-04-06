document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const links = document.querySelectorAll(".menu a");
    const sections = document.querySelectorAll("main section");

    // Esconde todas as seções, exceto a tela de boas-vindas
    sections.forEach(section => {
        if (section.id !== "welcome") {
            section.style.display = "none"; // função para ocultar iten e so aparecer quando solicitar
        }
    });
    

    // Alternar exibição do menu ao clicar no botão
    menuToggle.addEventListener("click", function () {
        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });

    // Mostrar apenas a seção correspondente ao link clicado
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const sectionToShow = this.getAttribute("data-section");

            sections.forEach(section => {
                section.style.display = (section.id === sectionToShow) ? "block" : "none";
            });

            // Esconder o menu depois de clicar
            menu.style.display = "none";
        });
    });
    if ("serviceWorker" in navigator) {
        window.addEventListener("load", () => {
          navigator.serviceWorker.register("/service-worker.js")
            .then(reg => console.log("Service Worker registrado!", reg))
            .catch(err => console.log("Erro ao registrar o Service Worker", err));
        });
      }
});
