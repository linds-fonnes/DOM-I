const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

const navContainer = document.querySelector(".nav");

const servicesNav = document.querySelector("a:nth-of-type(1)");
servicesNav.textContent = siteContent.nav["nav-item-1"];

const productNav = document.querySelector("a:nth-of-type(2)");
productNav.textContent = siteContent.nav["nav-item-2"];

const visionNav = document.querySelector("a:nth-of-type(3)");
visionNav.textContent = siteContent.nav["nav-item-3"];

const featuresNav = document.querySelector("a:nth-of-type(4)");
featuresNav.textContent = siteContent.nav["nav-item-4"];

const aboutNav = document.querySelector("a:nth-of-type(5)");
aboutNav.textContent = siteContent.nav["nav-item-5"];

const contactNav = document.querySelector("a:nth-of-type(6)");
contactNav.textContent = siteContent.nav["nav-item-6"];

const heading = document.querySelector("h1");
heading.textContent = siteContent.cta.h1;

const headingButton = document.querySelector(".cta button");
headingButton.textContent = siteContent.cta.button;

const headingImage = document.querySelector(".cta img");
headingImage.setAttribute("src", siteContent.cta["img-src"]);

const featuresHeading = document.querySelector("h4:nth-of-type(1)");
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

const featuresText = document.querySelector(".top-content .text-content p");
featuresText.textContent = siteContent["main-content"]["features-content"];

const aboutHeading = document.querySelector(
  ".top-content .text-content:nth-of-type(2) h4"
);
aboutHeading.textContent = siteContent["main-content"]["about-h4"];
const aboutText = document.querySelector(
  ".top-content .text-content:nth-of-type(2) p"
);
aboutText.textContent = siteContent["main-content"]["about-content"];

const middleImage = document.querySelector(".middle-img");
middleImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

const servicesHeading = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) h4"
);
servicesHeading.textContent = siteContent["main-content"]["services-h4"];
const servicesText = document.querySelector(
  ".bottom-content .text-content:nth-of-type(1) p"
);
servicesText.textContent = siteContent["main-content"]["services-content"];

const productHeading = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) h4"
);
productHeading.textContent = siteContent["main-content"]["product-h4"];
const productText = document.querySelector(
  ".bottom-content .text-content:nth-of-type(2) p"
);
productText.textContent = siteContent["main-content"]["product-content"];

visionHeading = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) h4"
);
visionHeading.textContent = siteContent["main-content"]["vision-h4"];
visionText = document.querySelector(
  ".bottom-content .text-content:nth-of-type(3) p"
);
visionText.textContent = siteContent["main-content"]["vision-content"];

const contactHeader = document.querySelector(".contact h4");
contactHeader.textContent = siteContent.contact["contact-h4"];

const address = document.querySelector(".contact p:nth-of-type(1)");
address.textContent = siteContent.contact.address;
const phone = document.querySelector(".contact p:nth-of-type(2)");
phone.textContent = siteContent.contact.phone;
const email = document.querySelector(".contact p:nth-of-type(3)");
email.textContent = siteContent.contact.email;

const copyright = document.querySelector("footer");
copyright.textContent = siteContent.footer.copyright;
