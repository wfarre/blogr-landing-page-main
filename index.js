const headerBtns = document.querySelectorAll(".navbar__nav__group__title");
const navGroups = document.querySelectorAll(".navbar__nav__group");
const navigation = document.querySelector(".navbar__nav");
const menuBtn = document.querySelector(".btn--menu");

window.addEventListener("click", (e) => {
  console.log(e.target.classList);
  console.log(e.target.classList.value !== "navbar__nav__group__title");
  if (e.target.classList.value !== "navbar__nav__group__title") {
    navGroups.forEach((group) => {
      group.classList.remove("open");
    });
  }
});

navGroups.forEach((btn) => {
  btn.addEventListener("click", () => {
    navGroups.forEach((btnbis) => {
      if (btn === btnbis) {
        return;
      }
      btnbis.closest(".navbar__nav__group").classList.remove("open");
    });

    const targetMenu = btn.closest(".navbar__nav__group");

    // if (!targetMenu.classList.contains("open")) {
    //   targetMenu.classList.add("open");
    // } else {
    //   targetMenu.classList.remove("open");
    // }

    targetMenu.classList.toggle("open");
  });
});

// navGroups.forEach(btn => {
//     btn.addEventListener("mouseout", () => {
//         btn.closest(".navbar__nav__group").classList.remove("open")
//     })
// })

menuBtn.addEventListener("click", () => {
  navigation.classList.toggle("display");
  menuBtn.classList.toggle("display");
});
