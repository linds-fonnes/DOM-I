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

//get querySelectorAll on all elements that are the same and then use index to specify the specific element to update with the informatioon 

const headings = document.querySelectorAll('.text-content h4');
console.log(headings);
headings[0].textContent = siteContent["main-content"]["features-h4"];
headings[1].textContent = siteContent["main-content"]["about-h4"];
headings[2].textContent = siteContent["main-content"]["services-h4"];
headings[3].textContent = siteContent["main-content"]["product-h4"];
headings[4].textContent = siteContent["main-content"]["vision-h4"];


const middleImage = document.querySelector('.middle-img');
console.log(middleImage);
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


const paragraphs = document.querySelectorAll('.text-content p');
console.log(paragraphs)
paragraphs[0].textContent = siteContent["main-content"]["features-content"];
paragraphs[1].textContent = siteContent["main-content"]["about-content"];
paragraphs[2].textContent = siteContent["main-content"]["services-content"];
paragraphs[3].textContent = siteContent["main-content"]["product-content"];
paragraphs[4].textContent = siteContent["main-content"]["vision-content"];

/*FOOTER STYLES*/

const contactHeader = document.querySelector('.contact h4');
console.log(contactHeader);
contactHeader.textContent = siteContent['contact']["contact-h4"];

const addressLines = document.querySelectorAll('.contact p');
console.log(addressLines);
addressLines[0].textContent = siteContent['contact']['address'];
addressLines[1].textContent = siteContent['contact']['phone'];
addressLines[2].textContent = siteContent['contact']['email'];

const copyright = document.querySelector('footer p');
console.log(copyright);
copyright.textContent = siteContent['footer']['copyright'];