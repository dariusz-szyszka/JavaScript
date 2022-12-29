const homeTitle = "Home"
const seaTitle = "Sea"
const mountainsTitle = "Mountains"
const forestsTitle = "Forests"

if (document.title == homeTitle) {
  // main slideshow

  let slideIndex = 1;
  showSlides(slideIndex);

  function changeSlide(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i=0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
  }

  // Tatra article gallery

  let miniSlideIndex = 1;
  showMiniSlides(miniSlideIndex);

  function changeMiniSlide(n) {
    showMiniSlides(miniSlideIndex += n);
  }

  function currentMiniSlide(n) {
    showMiniSlides(miniSlideIndex = n);
  }

  function openModal() {
    document.getElementById("gallery-modal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("gallery-modal").style.display = "none";
  }

  function showMiniSlides(n) {
    let i;
    let miniSlides = document.getElementsByClassName("mini-slide");

    if (n > miniSlides.length) {
      miniSlideIndex = 1;
    } else if (n < 1) {
      miniSlideIndex = miniSlides.length;
    }
    for (i = 0; i < miniSlides.length; i++) {
      miniSlides[i].style.display = "none";
    }
    miniSlides[miniSlideIndex-1].style.display = "block";
  }
}

// national park info container visibility

const nationalParksMap = new Map([
  ["bialowieza",[
    "Białowieża National Park",
    "Established in 1947.",
    "Area of 105.20 km<sup>2</sup>."
  ]],
  ["swietokrzyski",[
    "Świętokrzyski National Park",
    "Established in 1950.",
    "Area of 76.26 km<sup>2</sup>."
  ]],
  ["pieniny",[
    "Pieniny National Park",
    "Established in 1954.",
    "Area of 23.46 km<sup>2</sup>."
  ]],
  ["tatra",[
    "Tatra National Park",
    "Established in 1954.",
    "Area of 211.64 km<sup>2</sup>."
  ]],
  ["babia-gora",[
    "Babia Góra National Park",
    "Established in 1954.",
    "Area of 33.92 km<sup>2</sup>."
  ]],
  ["ojcow",[
    "Ojców National Park",
    "Established in 1956.",
    "Area of 21.46 km<sup>2</sup>."
  ]],
  ["wielkopolska",[
    "Wielkopolski National Park",
    "Established in 1957.",
    "Area of 75.84 km<sup>2</sup>."
  ]]
]);


if (document.title == forestsTitle) {
  let nationalParkName = document.querySelector("#np-name");
  let nationalParkDate = document.querySelector("#np-date");
  let nationalParkArea = document.querySelector("#np-area");
  let nationalParkLogos = document.querySelectorAll(".np-logo");

  nationalParkLogos.forEach(logo => {
    logo.addEventListener("mouseover", () => {
      if (logo.classList.contains("bialowieza")) {
        nationalParkName.innerHTML = nationalParksMap.get("bialowieza")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("bialowieza")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("bialowieza")[2];
      } else if (logo.classList.contains("swietokrzyski")) {
        nationalParkName.innerHTML = nationalParksMap.get("swietokrzyski")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("swietokrzyski")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("swietokrzyski")[2];
      } else if (logo.classList.contains("pieniny")) {
        nationalParkName.innerHTML = nationalParksMap.get("pieniny")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("pieniny")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("pieniny")[2];
      } else if (logo.classList.contains("tatra")) {
        nationalParkName.innerHTML = nationalParksMap.get("tatra")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("tatra")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("tatra")[2];
      } else if (logo.classList.contains("babia-gora")) {
        nationalParkName.innerHTML = nationalParksMap.get("babia-gora")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("babia-gora")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("babia-gora")[2];
      } else if (logo.classList.contains("ojcow")) {
        nationalParkName.innerHTML = nationalParksMap.get("ojcow")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("ojcow")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("ojcow")[2];
      } else if (logo.classList.contains("wielkopolska")) {
        nationalParkName.innerHTML = nationalParksMap.get("wielkopolska")[0];
        nationalParkDate.innerHTML = nationalParksMap.get("wielkopolska")[1];
        nationalParkArea.innerHTML = nationalParksMap.get("wielkopolska")[2];
      }
    })
  });
}