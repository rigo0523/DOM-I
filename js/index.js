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
    "h1": "DOM Is Awesome",
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
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

/// nav bar section
const navBar = document.querySelectorAll('a');

  navBar[0].textContent = siteContent['nav']['nav-item-1'];
  navBar[1].textContent = siteContent['nav']['nav-item-2'];
  navBar[2].textContent = siteContent['nav']['nav-item-3'];
  navBar[3].textContent = siteContent['nav']['nav-item-4'];
  navBar[4].textContent = siteContent['nav']['nav-item-5'];
  navBar[5].textContent = siteContent['nav']['nav-item-6'];

//green 
  navBar[0].style.color = 'green'
  navBar[1].style.color = 'green'
  navBar[2].style.color = 'green'
  navBar[3].style.color = 'green'
  navBar[4].style.color = 'green'
  navBar[5].style.color = 'green'

  
  // for(let key in navBar) {
  //   navBar[key].style.color = 'green'
  // } 

  navBar.forEach(item => {
    item.style.color = 'green'
  })
  // THIS BREAKS THE PAGE WHEN I CHANGE ALL LINKS TO GREEN, NEED HELP


//logo section circle
const h1 = document.querySelector('h1');
  h1.textContent = siteContent["cta"]["h1"];

//button
const button = document.querySelector('button');
  button.textContent = siteContent['cta']['button'];

//logo
const circleImage = document.getElementById("cta-img");
  circleImage.src = siteContent["cta"]["img-src"];

//main contant feautures  

//feautures
const firstHeader = document.querySelectorAll('.top-content .text-content h4');
  firstHeader[0].textContent = siteContent["main-content"]["features-h4"];
const featContent = document.querySelectorAll('.top-content .text-content p');
  featContent[0].textContent = siteContent['main-content']['features-content']
//About
const secondHeader = document.querySelectorAll('.top-content .text-content h4');
  secondHeader[1].textContent = siteContent["main-content"]["about-h4"];
const aboutContent = document.querySelectorAll('.top-content .text-content p');
  aboutContent[1].textContent = siteContent['main-content']['features-content']

//middle image 
const middleImage = document.querySelector('.middle-img');
  middleImage.src = siteContent["main-content"]["middle-img-src"];


//bottom content 

//services
const thirdHeader = document.querySelectorAll('.bottom-content .text-content h4');
  thirdHeader[0].textContent = siteContent['main-content']['services-h4'];
const thirdheadContent = document.querySelectorAll('.bottom-content .text-content p');
  thirdheadContent[0].textContent = siteContent['main-content']['services-content'];
//product
const fourthCont = document.querySelectorAll('.bottom-content .text-content h4');
  fourthCont[1].textContent = siteContent["main-content"]["product-h4"];
const fourthPara = document.querySelectorAll('.bottom-content .text-content p');
  fourthPara[1].textContent = siteContent['main-content']['product-content'];
//vision
const fifthCont = document.querySelectorAll('.bottom-content .text-content h4');
  fourthCont[2].textContent = siteContent["main-content"]["vision-h4"];
const fifthPara = document.querySelectorAll('.bottom-content .text-content p');
  fourthPara[2].textContent = siteContent['main-content']['vision-content'];


//contact section 
const contact = document.querySelectorAll('.contact h4');
  contact[0].textContent = siteContent['contact']['contact-h4'];
  //paragraphs
const contactInfo = document.querySelectorAll('.contact p');
  contactInfo[0].textContent = siteContent['contact']['address'];
  contactInfo[1].textContent = siteContent['contact']['phone'];
  contactInfo[2].textContent = siteContent['contact']['email'];

//footer
const footer = document.querySelectorAll('footer p');
  footer[0].textContent = siteContent.footer.copyright;

//Append Child CREATE NEW A TAG 
let nav = document.querySelector('nav'); // will append to the nav bar

let newAnchor = document.createElement('a');
let anchorText = document.createTextNode('Find Me');
newAnchor.appendChild(anchorText);
let newAnchorTag = nav.appendChild(newAnchor);
newAnchorTag.style.background = 'black';
newAnchorTag.style.fontSize = "1em"

//PREPEND ON NAV BAR 


let newAnchorBefore = document.createElement('a');
let anchorBeforeText = document.createTextNode('1st link');
newAnchorBefore.appendChild(anchorBeforeText);
let appended = nav.prepend(newAnchorBefore);
//appended.style.color = 'red';
const navBar2 = document.querySelectorAll('a');
navBar2[0].style.color = 'red'
console.log(navBar2[0])


function my() {
//STRETCH DOES NOT WORK NEED HELP 
const aside = document.querySelector('h5');
console.log(aside)
aside.addEventListener("mouseenter", () => {
  aside.style.color = 'red';
  aside.style.textAlign= "center"
  aside.style.padding = "20px"
  aside.style.border = "2px solid blue"
})

aside.addEventListener("mouseleave", () => {
  aside.style.color = 'red';
  aside.style.background = 'white'
  aside.style.border = 'none'
})
}

my();