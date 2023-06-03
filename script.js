var settingsMenu = document.querySelector(".setting_menu");
var darkBtn = document.getElementById("dark_btn");

function settingsMenuToggle() {
  settingsMenu.classList.toggle("setting_menu_height");
}

// settingsMenu.onclick = function () {
//   settingsMenu.classList.toggle("setting_menu_height");
// };
// dark btn
darkBtn.onclick = function () {
  darkBtn.classList.toggle("dark_btn_on");
  document.body.classList.toggle("dark_theme");

  if (localStorage.getItem("theme") == "light") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
};

// code for if already dark keep dark , if already normal mode keep normal mood

if (localStorage.getItem("theme") == "light") {
  darkBtn.classList.remove("dark_btn_on");
  document.body.classList.remove("dark_theme");
} else if (localStorage.getItem("theme") == "dark") {
  darkBtn.classList.add("dark_btn_on");
  document.body.classList.add("dark_theme");
} else {
  localStorage.setItem("theme", "light");
  //   localStorage.getItem("theme");
}
