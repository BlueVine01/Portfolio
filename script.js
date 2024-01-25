////////////////////////////
//////////ACTIVE NAVBAR

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(aa => {
        let top = window.scrollY;
        let offset = aa.offsetTop - 150;
        let height = aa.offsetHeight;
        let id = aa.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*= ' + id +']').classList.add('active')
            })
        }
    })
}


////////////////////////////
//////////DARK MODE
const moon = document.querySelector(".fa-moon");
const body = document.querySelector(".body");

moon.addEventListener("click", () => {
    moon.classList.toggle("fa-sun");
    body.classList.toggle("dark-mode");
    if (moon.className.contain = "fa-sun") {
      moon.style.color = "yellow";
    } else{
      moon.style.color = "black";
    }
})


///////////////////////////////////
///////////////////////////////////
//////////////LAODING
const loaders = document.querySelector(".preloader")
const removeBody = document.querySelector(".page-revealed")
window.onload = function() {
    removeBody.style.display = "none";
    loaders.style.visibility = "visible";
    setTimeout(() => {
        loaders.style.visibility = "hidden";
        removeBody.style.display = "block";
    }, 5000);
}


///////////////////////////////////
///////////////////////////////////
//////////////EVENT OUTSIDE THE NAVIGATION MENU
const toggle = document.getElementById("hamburger-lines")
const navigation = document.getElementById("navigation__nav");


toggle.onclick = function() {
    toggle.classList.toggle("active");
    navigation.classList.toggle("active");
}

// body.onclick = function(e) {
//     if (e.target.id !== "navigation" && e.target.id !== "toggle") {
//         toggle.classList.remove("active");
//         navigation.classList.remove("active");
//     }
// }



///////////////////////////////////
///////////////////////////////////
//////////////AOS

ScrollReveal ({ 
  reset: true,
  duration: 2000,
  delay: 200,
  distance: '30px'
});

ScrollReveal().reveal('.about__container-right, .ski-icon, .flex__items1', {origin: 'top' , delay : 100});
ScrollReveal().reveal('.contact--container , .flex__items2 , .flex__items4',  {origin: 'bottom' , delay : 200});
ScrollReveal().reveal('.hero__intro, .col-of-1 , .box1, .box3',{origin: 'left' , delay: 100});
ScrollReveal().reveal('.hero__right-about, .experience-time, .box2, .box4', {origin: 'right', delay: 200});
