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
  grabCursor: true,
  loop: true,
  centeredSlides: true,
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

accordions.forEach(acco => {
  acco.onclick = () => {
    accordions.forEach(subAcco => { subAcco.classList.remove('active') });
    acco.classList.add('active');
  }
})

/* EMAILJS SERVICE*/
function validateEmail() {
  var email = document.getElementById('email').value;

  if (email.length == 0) {
    emailError.innerHTML = 'Un indirizzo email valido è necessario!';
    return false;
  }
  // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
  if (!email.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
    emailError.innerHTML = 'Email non valido!';
    return false;
  }
  emailError.innerHTML = '<i class="uil uil-check-circle projects__modal-icon"></i>';
  return true;
}

function SendMail() {
  var params = {
    from_name: document.getElementById("name").value,
    email_id: document.getElementById("email").value,
    check_in: document.getElementById("check_in").value,
    check_out: document.getElementById("check_out").value,
    adults_num: document.getElementById("adults").value,
    children_num: document.getElementById("children").value,
    room_num: document.getElementById("number_of_rooms").value,
    room_type: document.getElementById("type_of_room").value,
    message: document.getElementById("message").value,

    //message: document.getElementById("message").value
  }
  emailjs.send("service_nmyx34e", "template_h55i6t6", params).then(function (res) {
    // alert("Success! " + res.status);
    if(languageSelect.value == 'al')
      alert("Mesazhi u dergua!\n Stafi jon do t'ju kontaktoj sa me pare.");
    else if (languageSelect.value == 'it')
      alert("Il messaggio è stato inviato! Vi contattiamo appena possibile.");
    else
      alert("Your message has been sent successfully!\ We'll contact you as soon as we can");

  })
}
// fine

/* CONTACT FUNCTION */
document.getElementById('contact-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default action

  // Create a dialog to ask the user for their choice
  const userChoice = confirm("Would you like to call or message on WhatsApp?\nPress OK to call, Cancel to use WhatsApp.");

  if (userChoice) {
    // User chose to call
    window.location.href = 'tel:+355696966244';
  } else {
    // User chose WhatsApp
    window.location.href = 'https://api.whatsapp.com/send?phone=355696966244';
  }
});
// fine



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
    strongTeam: "Expert Hospitality Team",
    strongTeamP: "Our dedicated team is committed to unlocking excellence in hospitality, ensuring your stay at Hotel Beke is nothing short of perfection.",
    luxuryAccomodation: "Luxury Accommodation",
    luxuryAccomodationP: "Indulge in unrivaled luxury at our exquisite accommodations, designed to elevate your stay to new heights of comfort and style.",
    exploreOurLocation: "Explore Our Location",
    exploreOurLocationP: `Welcome to Hotel Beke, ideally located just 250 meters from Vlore Beach in the picturesque city of Vlore. Our
                          4-star hotel offers comfortable accommodation with the convenience of free private parking.

                          Guests staying at Hotel Beke can enjoy access to our 24-hour bar and exclusive beach zone throughout their
                          stay. Nestled amidst serene natural surroundings, our hotel boasts a breathtaking view, making it the perfect
                          retreat for relaxation and tranquility.

                          Experience the beauty of Vlore from the comfort of Hotel Beke, where nature meets hospitality.`,
    exclusiveRoomChoices: "Exclusive Room Choices",
    deluxeSuit: "Deluxe Suite",
    deluxeSuitP: "Indulge in our well-appointed Deluxe Suites, designed for guests seeking refined luxury and comfort.",
    familySuit: "Family Suite",
    familySuitP: `Our spacious Family Suite features three comfortable beds, ideal for families or groups looking for a
                  larger room to accommodate multiple guests. Enjoy ample space and comfort during your stay in our Family
                  Suite.`,
    introDiscover: "Discover Our Luxury Destination",
    introDiscoverP: `Whether you're seeking an intimate and exclusive retreat or a captivating
                      adventure, Hotel Beke promises an unforgettable experience where comfort
                      and excitement converge to create lasting memories.`,

    services: "SERVICES",
    coreFeatures: "Core Features",
    topRated: "Top-Rated by Our Guests",
    topRateP: "Proud to be consistently rated highly by our valued guests, reflecting our commitment to exceptional service and guest satisfaction.",
    quiteHours: "Quite Hours",
    quiteHoursP: "At Hotel Beke, we prioritize peace and uninterrupted rest to ensure a rejuvenating experience for our guests.",
    primeLocation: "Prime Location",
    primeLocationP: "Experience unparalleled convenience at Hotel Beke, strategically situated in one of the most coveted and sought-after locales.",
    freeCancellation: "Free Cancellation",
    freeCancellationP: "Enjoy peace of mind knowing that we offer the flexibility of free cancellation, recognizing that travel plans can change unexpectedly.",
    freeWifi: "Free WI-FI",
    freeWifiP: "Stay connected with complimentary Wi-Fi available throughout our property.",
    specialOffers: "Special Offers",
    specialOffersP: `Discover our exclusive special offers crafted to enhance every occasion, whether you're planning a romantic
                    escape or a productive business trip.`,
    contServ: "24/7 Service",
    contServP: "Our dedicated team is available around the clock to cater to your needs, ensuring exceptional service at any time.",
    freeParking: "Free Parking",
    freeParkingP: "Enjoy the convenience of complimentary parking available at all times during your stay.",
    privateBeach: "Private Beach Access",
    privateBeachP: "Enjoy access to our private beach during your stay.",
    breakfastIncluded: "Breakfast Included",
    breakfastIncludedP: "Start your day right with a delicious breakfast featuring our freshly baked brioche, perfect before heading to the beach.",

    clientReview1: `Absolutely loved our stay at this hotel! From the stylish decor to the friendly staff, everything was
                    top-notch. The room was cozy and well-appointed, and the amenities exceeded our expectations. The location
                    was ideal, with plenty of dining options nearby. Can't wait to come back!`,
    clientReview2: `Our stay at this hotel was fantastic! The staff were friendly and attentive, the room was clean and
                    comfortable, and the location was perfect. We especially loved the complimentary amenities like the free
                    Wi-Fi and beach access. Highly recommend!`,

    specialPrice: "Contact us via email/telephone or complete the form to receive special prices!",
    nameP: "Name ",
    adultsP: "Adults ",
    childrenP: "Children ",
    roomsP: "Rooms ",
    roomTypeP: "Room Type ",

    contactUs: "Contact Us",
    onlineBooking: "Online Booking",
    phoneNumber: "Phone Number",
    locationH: "Location",
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
    strongTeamP: "Sblocca l'eccellenza dell'ospitalità e garantisce il tuo soggiorno perfetto",



  },
  al: {
    navHome: "Kreu",
    navAbout: "Rreth Nesh",
    navRoom: "Dhomat",
    navFeature: "Shërbimet",
    navMenu: "Menu",
    navNews: "Lajmet",
    about: "RRETH NESH",
    title: "Vendi Perfekt Per Ju",
    strongTeam: "Stafi Jon Ofron",
    strongTeamP: "Ekselencën e mikpritjes që siguron qëndrimin tuaj të përsosur",

    luxuryAccomodation: "Akomodim i Mrekullueshëm",
    luxuryAccomodationP: "Shijoni luksin në akomodimet tona të shkëlqyera, të dizajnuara për të bërë qëndrimin tuaj më të rehatshëm dhe elegante.",
    exploreOurLocation: "Eksploroni Lokacionin Tonë",
    exploreOurLocationP: `Mirë se vini në Hotel Beke, i vendosur idealisht vetëm 250 metra larg plazhit të Vlorës në qytetin pitoresk të Vlorës. Hoteli ynë 4-yje ofron akomodim të rehatshëm me parkim privat falas.

                      Të ftuarit që qëndrojnë në Hotelin Beke mund të përfitojn shërbimet e barit tonë 24-orësh dhe zonën tonë ekskluzive të plazhit gjatë gjithë qëndrimit të tyre. Nën krahët e natyrës së qetë, hoteli ynë ofron pamje të mahnitshme, duke e bërë atë strehën e përsosur për relaksim dhe qetësi.

                      Përjetoni bukurinë e Vlorës nga komoditeti i Hotelit Beke, ku natyra takon mikpritjen.`,
    exclusiveRoomChoices: "Zgjedhje Dhomash Ekskluzive",
    deluxeSuit: "Apartament Deluxe",
    deluxeSuitP: "Apartamentet tona të Mrekullueshme, të dizajnuara për vizitorët që kërkojnë luks dhe komoditet të rafinuar.",
    familySuit: "Apartament Familjar",
    familySuitP: `Apartamenti ynë familjar i gjerë ofron tre krevate të rehatshme, ideal për familjet ose grupet që kërkojnë një dhomë më të madhe për të strehuar shumë vizitorë. Gëzojini hapësirën dhe komoditetin gjatë qëndrimit në apartamentin tonë familjar.`,
    introDiscover: "Zbuloni Destinacionin Tonë të Mrekullueshëm",
    introDiscoverP: `Qoftë se kërkoni një strehë intime dhe ekskluzive ose një aventurë kaptores, Hotel Beke premton një përvojë të paharrueshme ku komoditeti dhe emocioni bashkohen për të krijuar kujtime të përhershme.`,

    services: "SHËRBIMET",
    coreFeatures: "çfarë ofrojm",
    topRated: "E Vlerësuar si Më e Mirë nga Vizitorët Tanë",
    topRateP: "Krenarë që vlerësohemi ne menyr kostante nga vizitorët tanë, duke reflektuar angazhimin tonë për shërbim të jashtëzakonshëm dhe kënaqësinë e vizitorëve.",
    quiteHours: "Orë të Qeta",
    quiteHoursP: "Në Hotel Beke, i kushtojmë prioritet paqes dhe pushimit të pa ndërprerë për të siguruar një përvojë rinovuese për vizitorët tanë.",
    primeLocation: "Vendodhje Magjike",
    primeLocationP: "Përjetoni një përshtatshmëri e pamatë në Hotel Beke, i vendosur ne menyr strategjike në një nga vendet më të dëshiruara dhe të kërkuara.",
    freeCancellation: "Anulimi Falas",
    freeCancellationP: "Gëzoni qetësi të mendjes duke ditur se ofrojmë fleksibilitetin e anulimit falas, duke njohur se planifikimet e udhëtimit mund të ndryshojnë papritmas.",
    freeWifi: "Wi-Fi Falas",
    freeWifiP: "Mbani lidhjen duke përdorur Wi-Fi falas në dispozicion në të gjithë pronën tonë.",
    specialOffers: "Oferta Speciale",
    specialOffersP: `Zbuloni ofertat tona ekskluzive të cilat janë krijuar për të përforcuar çdo rast, qoftë keni planifikuar një shkëputje romantike
                    ose një udhëtim produktiv biznesi.`,
    contServ: "Shërbim 24/7",
    contServP: "Ekipi ynë i përkushtuar është në dispozicion rreth orës për të kërkuar nevojat tuaja, duke siguruar një shërbim të jashtëzakonshëm në çdo kohë.",
    freeParking: "Parkim Falas",
    freeParkingP: "Gëzoni përshtatshmërinë e parkimit falas në dispozicion gjatë gjithë qëndrimit tuaj.",
    privateBeach: "Akses në Plazh Privat",
    privateBeachP: "Gëzoni akses në plazhin tonë privat gjatë qëndrimit tuaj.",
    breakfastIncluded: "Mëngjesi i Përfshirë",
    breakfastIncludedP: "Filloni ditën në mënyrë të drejtë me një mëngjes të shijshëm duke përfshirë bukë të freskët brioche, ideal para se të shkoni në plazh.",

    clientReview1: `Na pëlqeu shumë qëndrimi ynë në këtë hotel! Nga dekori i stilizuar deri te stafi miqësor, gjithçka ishte shumë e mirë. Dhomat ishin të ngrohta dhe të mirë të pajisura, ndërsa shërbimet kaluan pritshmëritë tona. Vendndodhja ishte ideale, me shumë mundësi për të ngrënë në afërsi. Nuk presim të kthehemi!`,
    clientReview2: `Qëndrimi ynë në këtë hotel ishte fantastik! Stafi ishte miqësor dhe i vëmendshëm, dhoma ishte e pastër dhe e rehatshme, ndërsa vendndodhja ishte perfekte. Ne veçanërisht pëlqeu shërbimet e falshme si Wi-Fi falas dhe qasja në plazh. E rekomandojmë me ngulm!`,

    specialPrice: "Na kontaktoni përmes emailit/telefonit ose plotësoni formularin për të marrë çmimet speciale!",
    nameP: "Emri ",
    adultsP: "Të rritur ",
    childrenP: "Fëmijë ",
    roomsP: "Dhoma ",
    roomTypeP: "Lloji i Dhomës ",

    contactUs: "Na Kontaktoni",
    onlineBooking: "Prenotoni Online",
    phoneNumber: "Numri Telefonit",
    locationH: "Vendndodhja",

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

/* About */
let strongTeam = document.getElementById("strong-team");
let strongTeamP = document.getElementById("strong-team-p");
let luxuryAccomodation = document.getElementById("luxury-accomodation");
let luxuryAccomodationP = document.getElementById("luxury-accomodation-p");
let exploreOurLocation = document.getElementById("explore-our-location");
let exploreOurLocationP = document.getElementById("explore-our-location-p");

/* rooms */
let exclusiveRoomChoices = document.getElementById("exclusive-room-choices");
let deluxeSuit = document.getElementById("deluxe-suits");
let deluxeSuitP = document.getElementById("deluxe-suits-p");
let familySuit = document.getElementById("family-suite");
let familySuitP = document.getElementById("family-suite-p");

/* intro */
let introDiscover = document.getElementById("intro-discover");
let introDiscoverP = document.getElementById("intro-discover-p");

/* services */
let services = document.getElementById("services");
let coreFeatures = document.getElementById("core-features");
let topRated = document.getElementById("top-rated");
let topRateP = document.getElementById("top-rated-p");
let quiteHours = document.getElementById("quite-hours");
let quiteHoursP = document.getElementById("quite-hours-p");
let primeLocation = document.getElementById("prime-location");
let primeLocationP = document.getElementById("prime-location-p");
let freeCancellation = document.getElementById("free-cancellation");
let freeCancellationP = document.getElementById("free-cancellation-p");
let freeWifi = document.getElementById("free-wifi");
let freeWifiP = document.getElementById("free-wifi-p");
let specialOffers = document.getElementById("special-offers");
let specialOffersP = document.getElementById("special-offers-p");
let contServ = document.getElementById("24-7");
let contServP = document.getElementById("24-7-p");
let freeParking = document.getElementById("free-parking");
let freeParkingP = document.getElementById("free-parking-p");
let privateBeach = document.getElementById("private-beach");
let privateBeachP = document.getElementById("private-beach-p");
let breakfastIncluded = document.getElementById("breakfast-included");
let breakfastIncludedP = document.getElementById("breakfast-included-p");

/* reviews */
let clientReview1 = document.getElementById("client-review-1");
let clientReview2 = document.getElementById("client-review-2");

/* reservation */
let specialPrice = document.getElementById("special-price");
let nameP = document.getElementById("name-p");
let adultsP = document.getElementById("adults-p");
let childrenP = document.getElementById("children-p");
let roomsP = document.getElementById("rooms-p");
let roomTypeP = document.getElementById("room-type-p");

/* footer */
let contactUs = document.getElementById("contact-us");
let onlineBooking = document.getElementById("online-booking");
let phoneNumber = document.getElementById("phone-number");
let locationH = document.getElementById("locationH");


languageSelect.addEventListener("change", (event) => {
  setLanguage(event.target.value)
})

const setLanguage = (language) => {
  if (language == "it") {
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
  } else if (language == "en") {
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

    luxuryAccomodation.innerText = translations.en.luxuryAccomodation;
    luxuryAccomodationP.innerText = translations.en.luxuryAccomodationP;
    exploreOurLocation.innerText = translations.en.exploreOurLocation;
    exploreOurLocationP.innerText = translations.en.exploreOurLocationP;

    exclusiveRoomChoices.innerText = translations.en.exclusiveRoomChoices;
    deluxeSuit.innerText = translations.en.deluxeSuit;
    deluxeSuitP.innerText = translations.en.deluxeSuitP;
    familySuit.innerText = translations.en.familySuit;
    familySuitP.innerText = translations.en.familySuitP;
    introDiscover.innerText = translations.en.introDiscover;
    introDiscoverP.innerText = translations.en.introDiscoverP;

    services.innerText = translations.en.services;
    coreFeatures.innerText = translations.en.coreFeatures;
    topRated.innerText = translations.en.topRated;
    topRateP.innerText = translations.en.topRateP;
    quiteHours.innerText = translations.en.quiteHours;
    quiteHoursP.innerText = translations.en.quiteHoursP;
    primeLocation.innerText = translations.en.primeLocation;
    primeLocationP.innerText = translations.en.primeLocationP;
    freeCancellation.innerText = translations.en.freeCancellation;
    freeCancellationP.innerText = translations.en.freeCancellationP;
    freeWifi.innerText = translations.en.freeWifi;
    freeWifiP.innerText = translations.en.freeWifiP;
    specialOffers.innerText = translations.en.specialOffers;
    specialOffersP.innerText = translations.en.specialOffersP;
    contServ.innerText = translations.en.contServ;
    contServP.innerText = translations.en.contServP;
    freeParking.innerText = translations.en.freeParking;
    freeParkingP.innerText = translations.en.freeParkingP;
    privateBeach.innerText = translations.en.privateBeach;
    privateBeachP.innerText = translations.en.privateBeachP;
    breakfastIncluded.innerText = translations.en.breakfastIncluded;
    breakfastIncludedP.innerText = translations.en.breakfastIncludedP;

    clientReview1.innerText = translations.en.clientReview1;
    clientReview2.innerText = translations.en.clientReview2;

    specialPrice.innerText = translations.en.specialPrice;
    nameP.innerText = translations.en.nameP;
    adultsP.innerText = translations.en.adultsP;
    childrenP.innerText = translations.en.childrenP;
    roomsP.innerText = translations.en.roomsP;
    roomTypeP.innerText = translations.en.roomTypeP;

    contactUs.innerText = translations.en.contactUs;
    onlineBooking.innerText = translations.en.onlineBooking;
    phoneNumber.innerText = translations.en.phoneNumber;
    locationH.innerText = translations.en.locationH;

  } else if (language == "al") {
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

    luxuryAccomodation.innerText = translations.al.luxuryAccomodation;
    luxuryAccomodationP.innerText = translations.al.luxuryAccomodationP;
    exploreOurLocation.innerText = translations.al.exploreOurLocation;
    exploreOurLocationP.innerText = translations.al.exploreOurLocationP;

    exclusiveRoomChoices.innerText = translations.al.exclusiveRoomChoices;
    deluxeSuit.innerText = translations.al.deluxeSuit;
    deluxeSuitP.innerText = translations.al.deluxeSuitP;
    familySuit.innerText = translations.al.familySuit;
    familySuitP.innerText = translations.al.familySuitP;
    introDiscover.innerText = translations.al.introDiscover;
    introDiscoverP.innerText = translations.al.introDiscoverP;

    services.innerText = translations.al.services;
    coreFeatures.innerText = translations.al.coreFeatures;
    topRated.innerText = translations.al.topRated;
    topRateP.innerText = translations.al.topRateP;
    quiteHours.innerText = translations.al.quiteHours;
    quiteHoursP.innerText = translations.al.quiteHoursP;
    primeLocation.innerText = translations.al.primeLocation;
    primeLocationP.innerText = translations.al.primeLocationP;
    freeCancellation.innerText = translations.al.freeCancellation;
    freeCancellationP.innerText = translations.al.freeCancellationP;
    freeWifi.innerText = translations.al.freeWifi;
    freeWifiP.innerText = translations.al.freeWifiP;
    specialOffers.innerText = translations.al.specialOffers;
    specialOffersP.innerText = translations.al.specialOffersP;
    contServ.innerText = translations.al.contServ;
    contServP.innerText = translations.al.contServP;
    freeParking.innerText = translations.al.freeParking;
    freeParkingP.innerText = translations.al.freeParkingP;
    privateBeach.innerText = translations.al.privateBeach;
    privateBeachP.innerText = translations.al.privateBeachP;
    breakfastIncluded.innerText = translations.al.breakfastIncluded;
    breakfastIncludedP.innerText = translations.al.breakfastIncludedP;

    clientReview1.innerText = translations.al.clientReview1;
    clientReview2.innerText = translations.al.clientReview2;

    specialPrice.innerText = translations.al.specialPrice;
    nameP.innerText = translations.al.nameP;
    adultsP.innerText = translations.al.adultsP;
    childrenP.innerText = translations.al.childrenP;
    roomsP.innerText = translations.al.roomsP;
    roomTypeP.innerText = translations.al.roomTypeP;

    contactUs.innerText = translations.al.contactUs;
    onlineBooking.innerText = translations.al.onlineBooking;
    phoneNumber.innerText = translations.al.phoneNumber;
    locationH.innerText = translations.al.locationH;
  }
}
