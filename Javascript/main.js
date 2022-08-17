AOS.init();

window.addEventListener("scroll", function () {
  let header = document.querySelector("header");
  let windowPosition = window.scrollY > 0;
  header.classList.toggle("scrolling-active", windowPosition);
});

let burgerIcon = document.querySelector(".icon-burger-menu");
let burgerMenu = document.querySelector(".burger-sections");
let crossIcon = document.querySelector(".cross-burger-menu");
let burgerSections = document.querySelector("#burger-sections");

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

burgerSections.onclick = () => {
  burgerIcon.classList.remove("hide");
  crossIcon.classList.remove("active");
  burgerMenu.classList.remove("active");
};

const typed = new Typed(".typed", {
  strings: [
    '<h3 class="subName">Designer</h3>',
    '<h3 class="subName">Developer</h3>',
    '<h3 class="subName">Frontend Developer</h3>',
  ],
  typeSpeed: 75,
  starDelay: 3000,
  backSpeed: 75,
  loop: true,
  backDelay: 3000,
  showCursor: false,
});



cardsContainer = document.querySelector("#cards-container");
const projects = async () => {
  try {
    const respuesta = await fetch(`/projects.JSON`);

    if (respuesta.status === 200) {
      let fill = "";
      const datos = await respuesta.json();
      let i = 0
      datos.forEach(e => {
        if(i%2 == 1){
         animation = "right"
        }
        else{
          animation = "left"
        }
        fill += `<div class="card" data-aos="fade-${animation}" data-aos-duration="1500">
        <img src="${datos[i].image}">
        <div class="information">
          <p class="status-finished">${datos[i].status}</p>
          <h4 class="title">${datos[i].title}</h4>
          <div class="technologies">
            <i class="${datos[i].tech1}"></i>
            <i class="${datos[i].tech2}"></i>
            <i class="${datos[i].tech3}"></i>
          </div>
          <p class="description">${datos[i].description}</p>
          <div class="buttons">
            <a class="live" target="_blank" href="${datos[i].bntLive}"><i class="fa-solid fa-share"></i> Live</a>
            <a class="repo" target="_blank" href="${datos[i].btnRepo}"><i class="fa-brands fa-github"></i> Source</a>
          </div>
        </div>
      </div>`;
      cardsContainer.innerHTML = fill;
      i++;
      });
    }
  } catch (error) {
    console.log(error);
  }
};

projects();

/* EMAIL JS */
const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_4zudw8l';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send';
      alert('Sent!');
    }, (err) => {
      btn.value = 'Send';
      alert(JSON.stringify(err));
    });
});