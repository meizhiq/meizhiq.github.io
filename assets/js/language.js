// Language toggle — must run early (in <head>) to avoid flash of wrong language.

let initLanguage = () => {
  let lang = localStorage.getItem("lang") || "en";
  document.documentElement.setAttribute("data-lang", lang);

  document.addEventListener("DOMContentLoaded", function () {
    updateLangToggle(lang);

    const btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function () {
        const current = document.documentElement.getAttribute("data-lang") || "en";
        setLanguage(current === "zh" ? "en" : "zh");
      });
    }
  });
};

let setLanguage = (lang) => {
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("data-lang", lang);
  updateLangToggle(lang);
};

let updateLangToggle = (lang) => {
  const btn = document.getElementById("lang-toggle");
  if (!btn) return;
  btn.textContent = lang === "zh" ? "🌐 EN" : "🌐 中";
};
