const footer = document.getElementsByTagName('footer')[0];

// Back to top modifiers
window.addEventListener('scroll', () => {
  if (this.scrollY <= 400) footer.setAttribute('hidden', true);
  else footer.removeAttribute('hidden');
});

const backToTopBtn = document.querySelector('.to-top');
backToTopBtn.addEventListener('click', () => footer.setAttribute('hidden', true));

// Project descriptions
const projectInfo = {
  sousais: 'An Amazon Alexa skill that acts as your personal Sous Chef in the kitchen! <br /><br /> Accompanied by an integrated Web Application via: https://sousais.herokuapp.com/. <br /><br /> You pack your "fridge" by telling Sous what ingredients you have. At anytime, you can then ask Sous "what recipes can I make" and she will give you back recipes that include the ingredients you have in your fridge. <br /><br /> Built with: JavaScript, CSS, Node, Express, React, React-Redux, PostgreSQL, Sequelize, AWS Lambda, Heroku, Socket.io',
  foreignKey: 'A light weight web app to practice Spanish (more languages to come). Foreign Key throws a new Spanish word at you, along with the pronunciation of both the Spanish and English translation. Pronounce the word correctly to score points. Additionally, press \'Enter\' to open a search box and type in any recognizable English word/phrase to get an immediate translation rendered on your screen and added to your local dictionary, to be able to practice it any time in the future as well. Soon to be a Chrome Extension that operates the same as the demo on each New Tab opened. <br /><br /> To use, click on the speaker for pronunciation. Click anywhere else on screen to reveal the English translation. Click the mic to speak. <br /><br /> Built using HTML, CSS, Bootstrap, jQuery, JavaScript, Express, Annyang, and Web Speech API.',
  genieInBottle: 'A mock e-commerce site selling various bottled goods, where users can sign up, browse or search the inventory, add to cart, purchase orders, and keep track of past orders. <br /><br /> Built with JavaScript, Express, Sequelize, Postgres, Node, React, and Redux on an agile team.',
  portfolio: 'Soo meta! <br /><br /> A site to showcase my skills to convince you to <a href="https://www.linkedin.com/in/djbap/">hire me</a>. <br /><br /> Built from scratch with VanillaJS, plain CSS, and good ol\' HTML. <br /><br /> Click on the link below for a recursive joke.',
  financialFoundations: 'A React single page app to contain my notes from a Lynda course, Finance Foundations'
};

const {
  sousais, foreignKey, genieInBottle, portfolio, financialFoundations
} = projectInfo;

// Projects' modal modifiers
const modal = document.querySelector('#modal');
const modalToggler = document.querySelectorAll('.open-modal');
const closeModal = document.querySelector('.close');
const modalTitle = document.querySelector('#modal-title');
const projectDescription = document.querySelector('#project-description');
const projectLink = document.querySelector('.project-link');

const setModalContents = (title, content, link) => {
  modalTitle.innerHTML = title;
  projectDescription.innerHTML = content;
  projectLink.setAttribute('href', link);
};

// Open modal when a project div is clicked on
modalToggler.forEach((div) => {
  div.onclick = () => {
    switch (div.classList[0]) {
      case 'genie-bottle':
        setModalContents('GENIE IN A BOTTLE', genieInBottle, 'https://genie-in-a-bottle.herokuapp.com/');
        break;
      case 'foreign-key':
        setModalContents('FOREIGN KEY', foreignKey, 'https://foreign-key.herokuapp.com/');
        break;
      case 'sousais':
        setModalContents('SOUSAIS', sousais, 'https://sousais.herokuapp.com/');
        break;
      case 'portfolio':
        setModalContents('PORTFOLIO SITE', portfolio, 'https://devondacoda.github.io/portfolio/');
        break;
      case 'financial-foundations':
        setModalContents('FINANCIAL FOUNDATIONS', financialFoundations, 'https://financialfoundations.herokuapp.com/');
        break;
      default:
        projectDescription.innerHTML = 'Select a project for more info';
    }

    modal.removeAttribute('hidden');
  };
});

// close the modal when 'x' is clicked
closeModal.onclick = () => {
  modal.setAttribute('hidden', true);
};

// close modal when anywhere else is clicked
modal.onclick = (event) => {
  if (event.target === modal) {
    modal.setAttribute('hidden', true);
  }
};
