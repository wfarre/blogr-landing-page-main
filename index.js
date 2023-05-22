const headerBtns = document.querySelectorAll(".navbar__nav__group__title")
const navGroups = document.querySelectorAll(".navbar__nav__group");


navGroups.forEach(btn => {
    btn.addEventListener("mouseover", () => {
        btn.closest(".navbar__nav__group").classList.add("open")
    })
})

navGroups.forEach(btn => {
    btn.addEventListener("mouseout", () => {
        btn.closest(".navbar__nav__group").classList.remove("open")
    })
})