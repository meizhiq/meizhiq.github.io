// Language toggle — must run early (in <head>) to avoid flash of wrong language.

let initLanguage = () => {
  let lang = localStorage.getItem("lang") || "en";
  document.documentElement.setAttribute("data-lang", lang);

  document.addEventListener("DOMContentLoaded", function () {
    updateLangToggle(lang);

    const enBtn = document.getElementById("lang-toggle-en");
    const zhBtn = document.getElementById("lang-toggle-zh");

    if (enBtn) {
      enBtn.addEventListener("click", function () {
        setLanguage("en");
      });
    }
    if (zhBtn) {
      zhBtn.addEventListener("click", function () {
        setLanguage("zh");
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
  const enBtn = document.getElementById("lang-toggle-en");
  const zhBtn = document.getElementById("lang-toggle-zh");
  if (!enBtn || !zhBtn) return;
  if (lang === "zh") {
    enBtn.classList.remove("lang-active");
    zhBtn.classList.add("lang-active");
  } else {
    enBtn.classList.add("lang-active");
    zhBtn.classList.remove("lang-active");
  }
};
