const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container .section__subheader", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".header__container .btn", {
  ...scrollRevealOption,
  delay: 1000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// feature container
ScrollReveal().reveal(".feature__card", {
  ...scrollRevealOption,
  interval: 500,
});

// news container
ScrollReveal().reveal(".news__card", {
  ...scrollRevealOption,
  interval: 500,
});


/* Swiper */
var swiper = new Swiper(".review-slider", {
  spaceBetween: 10,
  grabCursor:true,
  loop:true,
  centeredSlides:true,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
});
/* end */

let accordions = document.querySelectorAll('.faqs .row .content .box');

accordions.forEach(acco =>{
    acco.onclick = () =>{
        accordions.forEach(subAcco => {subAcco.classList.remove('active')});
        acco.classList.add('active');
    }
})


/* Translations */
const translations = {
  en: {
    navHome: "Home",
    navAbout: "About",
    navRoom: "Room",
    navFeature: "Feature",
    navMenu: "Menu",
    navNews: "News",
    about: "ABOUT US",
    title: "The Perfect Place For You",
    strongTeam: "Strong Team",
    strongTeamP: "Unlocking Hospitality Excellence And Ensures Your Perfect Stay"
  },
  it: {
    navHome: "Home",
    navAbout: "Chi Siamo",
    navRoom: "Camere",
    navFeature: "Servizi",
    navMenu: "Menu",
    navNews: "Notizie",
    about: "CHI SIAMO",
    title: "Il Posto Perfetto Per Te",
    strongTeam: "La Nostra Squadra",
    strongTeamP: "Sblocca l'eccellenza dell'ospitalità e garantisce il tuo soggiorno perfetto"
  },
  al: {
    navHome: "Kreu",
    navAbout: "Rreth Nesh",
    navRoom: "Dhomat",
    navFeature: "Sherbimet",
    navMenu: "Menu",
    navNews: "Lajmet",
    about: "RRETH NESH",
    title: "Vendi Perfekt Per Ju",
    strongTeam: "Stafi Jon Ofron",
    strongTeamP: "Ekselencën e mikpritjes që siguron qëndrimin tuaj të përsosur"
  }
}

const languageSelect = document.querySelector("select");
let navHome = document.getElementById("nav-home");
let navAbout = document.getElementById("nav-about");
let navRoom = document.getElementById("nav-room");
let navFeature = document.getElementById("nav-feature");
let navMenu = document.getElementById("nav-menu");
let navNews = document.getElementById("nav-news");
let about = document.getElementById("about-us");
let title = document.getElementById("title");
let strongTeam = document.getElementById("strong-team");
let strongTeamP = document.getElementById("strong-team-p");


languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

const setLanguage = (language) => {
  if(language == "it"){
    navHome.innerText = translations.it.navHome;
    navAbout.innerText = translations.it.navAbout;
    navRoom.innerText = translations.it.navRoom;
    navFeature.innerText = translations.it.navFeature;
    navMenu.innerText = translations.it.navMenu;
    navNews.innerText = translations.it.navNews;
    about.innerText = translations.it.about;
    title.innerText = translations.it.title;
    strongTeam.innerText = translations.it.strongTeam;
    strongTeamP.innerText = translations.it.strongTeamP;
  } else if(language=="en"){
    navHome.innerText = translations.en.navHome;
    navAbout.innerText = translations.en.navAbout;
    navRoom.innerText = translations.en.navRoom;
    navFeature.innerText = translations.en.navFeature;
    navMenu.innerText = translations.en.navMenu;
    navNews.innerText = translations.en.navNews;
    about.innerText = translations.en.about;
    title.innerText = translations.en.title;
    strongTeam.innerText = translations.en.strongTeam;
    strongTeamP.innerText = translations.en.strongTeamP;
  } else if(language=="al"){
    navHome.innerText = translations.al.navHome;
    navAbout.innerText = translations.al.navAbout;
    navRoom.innerText = translations.al.navRoom;
    navFeature.innerText = translations.al.navFeature;
    navMenu.innerText = translations.al.navMenu;
    navNews.innerText = translations.al.navNews;
    about.innerText = translations.al.about;
    title.innerText = translations.al.title;
    strongTeam.innerText = translations.al.strongTeam;
    strongTeamP.innerText = translations.al.strongTeamP;
  }
}
