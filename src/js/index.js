import '../css/styles.css';
import { displayHome } from './home';
import { displayMenu } from './menu';

document.addEventListener('DOMContentLoaded', () => {
    const navbarButtons = document.querySelectorAll('.navbar__button');
    const homeButton = navbarButtons[0];
    const menuButton = navbarButtons[1];
    const aboutButton = navbarButtons[2];

    homeButton.addEventListener('click', () => {
        displayHome();
    });

    menuButton.addEventListener('click', () => {
        displayMenu();
    });

    aboutButton.addEventListener('click', () => alert('Button about clicado'));
    
    displayHome();
});