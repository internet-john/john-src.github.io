const contactLink = document.querySelector('.landing.contact');
const email = document.querySelector('.landing.contact_email');
const linkedIn = document.querySelector('.landing.contact_linkedin');
const aboutLink = document.querySelector('.landing.about');
const portfolioLink = document.querySelector('.landing.portfolio');
const github = document.querySelector('.landing.portfolio_github');

if (contactLink && email && linkedIn) {
  contactLink.addEventListener('click', () => {
    contactLink.innerText = "xavi.labs@protonmail.com | linkedIn"
  });
}

if (aboutLink) {
  aboutLink.addEventListener('click', () => {
    aboutLink.innerText = `
      Code choreographer. Crazy culinarian. Expertise in JavaScript, React stack, and creating exceptional user experiences.
      Proven track record of delivering quality web applications at scale.
      Passionate about culinary, inclusion, and napping in parks :)
    `;
  });
}

if (portfolioLink && github) {
  portfolioLink.addEventListener('click', () => {
    portfolioLink.innerText = "GitHub"
  });
}
