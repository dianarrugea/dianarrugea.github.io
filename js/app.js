// Define global variables
const mainElement = document.querySelector('main');
const navbarMenu = document.querySelector('#navbar__list');

// Dynamically add sections
for (let i = 4; i <= 7; i++) {
  const sectionEl = document.createElement('section');
  const landingEl = document.createElement('div');
  
  sectionEl.appendChild(landingEl);

  landingEl.setAttribute('class', 'landing__container');
  sectionEl.setAttribute('id', `section${i}`);
  sectionEl.setAttribute('data-nav', `Section ${i}`);

  landingEl.insertAdjacentHTML('beforeend', `<h2>Section ${i}</h2>`);
	
  landingEl.insertAdjacentHTML('beforeend', '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>');
	
  landingEl.insertAdjacentHTML('beforeend', '<p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>');

  mainElement.appendChild(sectionEl);
}

// Dynamically build navbar
const selectSectionElements = document.querySelectorAll('section');

selectSectionElements.forEach(section => {
  navbarMenu.insertAdjacentHTML('beforeend', `<li><a href="${section.id}">${section.dataset.nav}</a></li>`)
});

const navbarList = document.querySelectorAll('li');

navbarList.forEach(item => {
  item.setAttribute('class', 'menu__link');
});

// Add active class
const addActiveClass = (inView, section, item) => {
  if (inView) {
    section.classList.add('your-active-class');
    item.classList.add('link__active');
  }
}

// Remove active class
const removeActiveClass = (section, item) => {
  section.classList.remove('your-active-class');
  item.classList.remove('link__active');
}

// Implementing the active class
const activeScrollingSection = () => {
  navbarList.forEach(item => {
    const section = document.getElementById(item.firstChild.getAttribute('href'));
    const sectionOffset = (Math.floor(section.getBoundingClientRect().top));
    
    removeActiveClass (section, item);
    addActiveClass ((sectionOffset < 200 && sectionOffset >= -200), section, item);
  })
}
window.addEventListener('scroll', activeScrollingSection);


// Scroll to anchor ID with ScrollTo
document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', function(prvt) {
      prvt.preventDefault();
      
      document.getElementById(a.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
  });
});

const topButton = document.getElementById("topButton");

//when user scrolls 20px down from top
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

//Go to top on click
	function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}