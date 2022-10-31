$(".owl-carousel").owlCarousel({
  loop: true,
  nav: false,
  autoplay: true,
  autoplayTimeout: 2000,
  stagePadding: 50,
  dots: false,
  responsive: {
    0: {
      items: 1,
      stagePadding: 0,
    },
    600: {
      items: 3,
      stagePadding: 0,
    },
    1000: {
      items: 6,
    },
  },
});

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    $("nav").addClass("nav-scroll");
  } else {
    $("nav").removeClass("nav-scroll");
  }
});

AOS.init();

const alertElement = document.querySelector(".alert");

const showAlert = () => {
  alertElement.hidden = false;
};
const hideAlert = () => {
  alertElement.hidden = true;
};

const sendEmail = () => {
  Email.send({
    SecureToken: "725561af-cbf9-42e3-9595-2a1e300c04e7 ",
    To: "nikoladojcinovic9@gmail.com",
    From: "goonergalactico@gmail.com",
    Subject: "New message from Portfolio site",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then(
    // message => alert("Sent successfully")

    setTimeout(() => {
      showAlert();
      setTimeout(() => {
        hideAlert();
      }, "4000");
    }, "2000")
  );
};

const sections = document.querySelectorAll(".link-section");
const navList = document.querySelectorAll("nav ul li");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const secTop = section.offsetTop;
    const secHeight = section.clientHeight;
    if (pageYOffset >= secTop - secHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navList.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});

const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    toggle.src = "Img/moon.png";
  } else {
    toggle.src = "Img/sun.png";
  }
});


const menuBtn = document.querySelector('.menu-btn');
const menuList = document.querySelector('.burger-menu-list');

let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuList.classList.add('show');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
    menuList.classList.remove('show');
  }
});
