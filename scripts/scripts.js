/* STICKING NAVIGATION BAR */
// Function to update scroll padding top based on nav and links flex container heights
function updateScrollPaddingTop() {
  const navSection = document.querySelector(".nav-container");
  const linksWrapperHeight =
    document.querySelector(".links-wrapper").offsetHeight;
  const navHeight = navSection.classList.contains("sticking") ? 4 * 16 : 6 * 16; // Convert rem to px
  const scrollPaddingTop = linksWrapperHeight + navHeight;
  document.documentElement.style.setProperty(
    "--scroll-padding-top",
    scrollPaddingTop + "px"
  );
}

// Function to handle scroll events
function handleScroll() {
  const navSection = document.querySelector(".nav-container");
  if (window.scrollY > 0) {
    navSection.classList.add("sticking");
  } else {
    navSection.classList.remove("sticking");
  }
  updateScrollPaddingTop(); // Update scroll padding top on scroll
}

// Scroll event listener to toggle the "sticking" class
window.addEventListener("scroll", handleScroll);

// Load event listener to set initial state and update scroll padding top
window.addEventListener("load", () => {
  handleScroll(); // Check the initial scroll position and update classes and padding
  updateScrollPaddingTop(); // Update scroll padding top on load
});

// Resize event listener to update scroll padding top on window resize
window.addEventListener("resize", updateScrollPaddingTop);

// Initial call to set the scroll padding top
updateScrollPaddingTop();

/* MOBILE MENU */
const hamburger = document.getElementById("hamburger");
const fadeMobile = document.getElementById("fadeMobile");
const nav = document.getElementById("nav");
const closeButton = document.getElementById("closeButton");
const navItems = document.querySelectorAll(".nav-item");
const body = document.body;

hamburger.addEventListener("click", () => {
  const isNavOpen = nav.classList.toggle("nav-mobile");
  body.classList.toggle("lock-scroll", isNavOpen);
  fadeMobile.classList.toggle("show-fade-mobile");
});

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("nav-mobile");
    body.classList.remove("lock-scroll");
    fadeMobile.classList.remove("show-fade-mobile");
  });
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("nav-mobile");
  body.classList.remove("lock-scroll");
  fadeMobile.classList.remove("show-fade-mobile");
});

/* CHART.JS */
var xValues = ["Start", "Standart", "Standart +", "Growth", "Premium"];
var yValues = [300, 350, 550, 750, 1150];
var barColors = ["blueviolet", "green", "blue", "orange", "brown"];

new Chart("pricingChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [
      {
        backgroundColor: barColors,
        data: yValues,
        barThickness: 60,
      },
    ],
  },
  options: {
    plugins: {
      legend: { display: false },
      title: {
        display: true,
        text: "Price guide 2024",
        font: {
          size: 24,
        },
      },
      subtitle: {
        display: true,
        text: "$300 - $1150",
        font: {
          size: 18,
        },
        padding: {
          top: 10,
          bottom: 10,
        },
      },
      datalabels: {
        align: "end",
        anchor: "end",
        formatter: function (value, context) {
          return "$" + value;
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
  plugins: [ChartDataLabels],
});

// ------------ CONTACT FORM PROCESSING ------------- //
const contactForm = document.getElementById("contactForm");
const notificationContainer = document.getElementById("notificationContainer");
const fade = document.getElementById("fade");
const notificationWindow = document.getElementById("notificationWindow");
const closeWindowBtn = document.getElementById("closeWindowBtn");

if (contactForm) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting the form...");
      notificationContainer.style.display = "block";
      fade.style.display = "flex";
      await submitContact(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("message").value
      );
      console.log("Form submitted successfully.");

      // Show modal window after successful submission
      notificationWindow.style.display = "block";
      contactForm.reset();
    } catch (error) {
      console.log("Error submitting the form:", error);
    }
  });

  closeWindowBtn.addEventListener("click", () => {
    notificationContainer.style.display = "none";
    fade.style.display = "none";
    notificationWindow.style.display = "none";
  });
}

// ------------ GO TO TOP BUTTON ------------- //
document.addEventListener("DOMContentLoaded", () => {
  const upButton = document.getElementById("goTop");
  if (upButton) {
    window.addEventListener("scroll", scrollFunction);

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        upButton.style.display = "block";
      } else {
        upButton.style.display = "none";
      }
    }
  }
});

// When the user clicks on the button, scroll to the top of the document
function goTopFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
