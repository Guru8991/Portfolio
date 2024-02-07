/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]");
tabContent = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContent.forEach((tabContents) => {
      tabContents.classList.remove("skills_active");
    });

    target.classList.add("skills_active");

    tabs.forEach((tab) => {
      tab.classList.remove("skills_active");
    });

    tab.classList.add("skills_active");
  });
});


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 80) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
        const darkTheme = "dark-theme";
        const iconTheme = "bi-sun";

        // Previously selected topic (if user selected)
        const selectedTheme = localStorage.getItem("selected-theme");
        const selectedIcon = localStorage.getItem("selected-icon");

        // We obtain the current theme that the interface has by validating the dark-theme class
        const getCurrentTheme = () =>
            document.body.classList.contains(darkTheme) ? "dark" : "light";
        const getCurrentIcon = () =>
            themeButton.classList.contains(iconTheme) ? "bi-moon" : "bi-sun";

        // We validate if the user previously chose a topic
        if (selectedTheme) {
            // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
            document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
                darkTheme
            );
            themeButton.classList[selectedIcon === "bi-moon" ? "add" : "remove"](
                iconTheme
            );
            // Update logo based on the selected theme
            const logo = document.getElementById('logo');
            const darkLogo = document.getElementById('dark-logo');
            const lightLogo = document.getElementById('light-logo');
            if (selectedTheme === 'dark') {
                darkLogo.style.display = 'block';
                lightLogo.style.display = 'none';
            } else {
                darkLogo.style.display = 'none';
                lightLogo.style.display = 'block';
            }
        }

        // Activate / deactivate the theme manually with the button
        themeButton.addEventListener("click", () => {
            // Add or remove the dark / icon theme
            document.body.classList.toggle(darkTheme);
            themeButton.classList.toggle(iconTheme);
            // Update logo based on the current theme
            const logo = document.getElementById('logo');
            const darkLogo = document.getElementById('dark-logo');
            const lightLogo = document.getElementById('light-logo');
            if (getCurrentTheme() === 'dark') {
                darkLogo.style.display = 'block';
                lightLogo.style.display = 'none';
            } else {
                darkLogo.style.display = 'none';
                lightLogo.style.display = 'block';
            }
            // We save the theme and the current icon that the user chose
            localStorage.setItem("selected-theme", getCurrentTheme());
            localStorage.setItem("selected-icon", getCurrentIcon());
        });


/*==================== EMAIL JS ====================*/
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_j86mnew";
  const templateID = "template_rp7vvwb";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      showSuccessMessage("Message sent successfully.");
    })
    .catch((err) => console.log(err));
}

function showSuccessMessage(message) {
  // Create a new div element
  var successDiv = document.createElement("div");
  successDiv.textContent = message;
  successDiv.style.backgroundColor = "green";
  successDiv.style.color = "white";
  successDiv.style.padding = "10px";
  successDiv.style.position = "fixed";
  successDiv.style.bottom = "10px";
  successDiv.style.left = "50%";
  successDiv.style.transform = "translateX(-50%)";
  successDiv.style.borderRadius = "5px";
  successDiv.style.zIndex = "9999";

  // Append the div to the body
  document.body.appendChild(successDiv);

  // Remove the message after 3 seconds
  setTimeout(function () {
    document.body.removeChild(successDiv);
  }, 3000);
}
