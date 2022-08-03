window.addEventListener('scroll', function () {
    let header = document.querySelector('header');
    let windowPosition = window.scrollY > 0;
    header.classList.toggle('scrolling-active', windowPosition);
})


let burgerIcon = document.querySelector(".icon-burger-menu");
let burgerMenu = document.querySelector(".burger-sections");
let crossIcon = document.querySelector(".cross-burger-menu");


burgerIcon.onclick = () => {
    burgerMenu.classList.add("active");
    burgerIcon.classList.add("hide");
    crossIcon.classList.add("active");
  };
  /* Close Menu */
  crossIcon.onclick = () => {
    burgerMenu.classList.remove("active");
    crossIcon.classList.remove("active");
    burgerIcon.classList.remove("hide");
  };



  const typed = new Typed('.typed',{
    strings: [
        '<h3 class="subName">Designer</h3>', 
        '<h3 class="subName">Developer</h3>',
        '<h3 class="subName">Frontend Developer</h3>'
    ],
    typeSpeed:75,
    starDelay:3000,
    backSpeed:75,
    loop:true,
    backDelay:3000,
    showCursor:false,
  });