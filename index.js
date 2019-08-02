const aboutLink = document.querySelector('.landing.about');
const portfolioLink = document.querySelector('.landing.portfolio');
const github = document.querySelector('.landing.portfolio_github');

if (aboutLink) {
  aboutLink.addEventListener('click', () => {
    aboutLink.innerText = `
      Code choreographer. Crazy culinarian. Expertise in JavaScript, React stack,
      and creating exceptional user experiences.
      Proven track record of delivering quality web applications at scale.
      Passionate about culinary, inclusion, and napping in parks :)
    `;
  });
}
