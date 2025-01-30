import '../css/styles.css';
import { displayHome } from './home';
import { displayMenu } from './menu';
import { displayAbout } from './about';

document.addEventListener('DOMContentLoaded', () => {
    const navbarButtons = document.querySelectorAll('.navbar__button');    
    navbarButtons.forEach((button, index) => {
        button.addEventListener('click', () =>{
            navbarButtons.forEach(button => button.classList.remove('navbar__button--active'));

            button.classList.add('navbar__button--active');

            if (index === 0) { 
                displayHome();
            } else if (index === 1) {
                displayMenu();
            } else if (index === 2) {
                displayAbout();
            }
        });
    });

    displayHome();
});