const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");
const closeMenu = document.getElementById("closeMenu");

menuBtn?.addEventListener("click", () => {
  mobileNav.classList.add("open");
  mobileNav.setAttribute("aria-hidden", "false");
});

closeMenu?.addEventListener("click", () => {
  mobileNav.classList.remove("open");
  mobileNav.setAttribute("aria-hidden", "true");
});

mobileNav?.addEventListener("click", (e) => {
  if (e.target === mobileNav) {
    mobileNav.classList.remove("open");
    mobileNav.setAttribute("aria-hidden", "true");
  }
});

// botões "Copiar repo"
const repoMap = {
  rsa: "https://github.com/Ryan-Alv/Projeto-de-Criptografia-RSA-2048-Bits",
  task: "https://github.com/Ryan-Alv/task-manager-java",
  portfolio: "https://github.com/Ryan-Alv/portfolio",
};


document.querySelectorAll("[data-copy]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const key = btn.getAttribute("data-copy");
    const url = repoMap[key];
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
      const old = btn.textContent;
      btn.textContent = "Copiado ✓";
      setTimeout(() => (btn.textContent = old), 1000);
    } catch {
      alert("Não consegui copiar. Copie manualmente:\n" + url);
    }
  });
});
