const propil = document.querySelector(".profil");
const judulProject = document.querySelector(".projectsTitle")
const app = document.querySelectorAll(".phone")

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY
  propil.style.transform =`translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)` 
  judulProject.style.transform = `translateY(calc(200vh - ${offsetY}px))`
  app[0].style.transform = `translateX(calc(300vh - ${offsetY}px))`
  app[1].style.transform = `translateX(calc(${offsetY}px - 410vh))`
});
