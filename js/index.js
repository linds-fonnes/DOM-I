const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM <br> Is <br> Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

/*NAV STYLES*/
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navServices = document.querySelector('a:nth-of-type(1)');
navServices.textContent = siteContent["nav"]["nav-item-1"];

const navProduct = document.querySelector('a:nth-of-type(2)');
navProduct.textContent = siteContent["nav"]["nav-item-2"];

const navVision = document.querySelector('a:nth-of-type(3)');
navVision.textContent = siteContent["nav"]["nav-item-3"];

const navFeatures = document.querySelector('a:nth-of-type(4)');
navFeatures.textContent = siteContent["nav"]["nav-item-4"];

const navAbout = document.querySelector('a:nth-of-type(5)');
navAbout.textContent = siteContent["nav"]["nav-item-5"];

const navContact = document.querySelector('a:nth-of-type(6)');
navContact.textContent = siteContent["nav"]["nav-item-6"];

/*HEADING STYLES*/
const ctaText= document.querySelector('.cta-text h1');
ctaText.style.fontFamily = 'Bangers'
ctaText.innerHTML = siteContent["cta"]["h1"];

const ctaButton = ctaText.nextElementSibling;
ctaButton.textContent = siteContent["cta"]["button"];

const codeSnippet = document.querySelector('#cta-img');
codeSnippet.setAttribute('src', siteContent["cta"]["img-src"]);



/*MAIN CONTENT STYLES*/
const featuresHeading = document.querySelector('.text-content h4');
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

const featuresParagraph = featuresHeading.nextElementSibling;
featuresParagraph.textContent = siteContent["main-content"]["features-content"];

const topContent = document.querySelector('.top-content')
const aboutHeading = topContent.querySelector('.text-content:nth-of-type(2)')
aboutHeading.textContent = siteContent["main-content"]["about-h4"];

const aboutParagraph = topContent.querySelector('p:nth-of-type(2)')
console.log(aboutParagraph)
aboutParagraph.textContent = siteContent["main-content"]["about-content"];


