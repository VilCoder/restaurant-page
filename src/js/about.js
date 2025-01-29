import emailIcon from '../icons/email.svg';
import locationIcon from '../icons/map-marker.svg';
import phoneIcon from '../icons/phone.svg';
import reservationIcon from '../icons/table-chair.svg';

function displayAbout() {
    const aboutContent = document.querySelector('#content');
    aboutContent.style.backgroundImage = '';
    aboutContent.textContent = '';

    const containerContact = document.createElement('div');
    containerContact.classList.add('container__contact');
    containerContact.insertAdjacentHTML(
        'beforeend',
        `<div class="contact__cards">
            <div class="cards__card">
                <i class="card__icon">${locationIcon}</i>
                <h2 class="card__title">Location</h2>
                <p class="card__text">Ave 17 Broadway St New York, NY 1001</p>
            </div>
            <div class="cards__card">
                <i class="card__icon">${phoneIcon}</i>
                <h2 class="card__title">Tel</h2>
                <p class="card__text">8997976</p>
            </div>
            <div class="cards__card">
                <i class="card__icon">${reservationIcon}</i>
                <h2 class="card__title">Reservations</h2>
                <p class="card__text">8776546</p>
            </div>
            <div class="cards__card">
                <i class="card__icon">${emailIcon}</i>
                <h2 class="card__title">Email</h2>
                <p class="card__text"><a href="#" class="text__link">email@email.com</a></p>
            </div>
        </div>
        <form class="contact__form">
            <h1 class="form__title">Contact us</h1>
            <div class="form__group">
                <input type="text" class="form__input id="name" name="user__name" maxlength="100" placeholder="Enter your name" required>
                <label class="form__label" for="name"></label>
            </dic>
            <div class="form__group">
                <input type="text" class="form__input id="email" name="user__email" maxlength="100" placeholder="Enter a valid email address" required>
                <label class="form__label" for="email"></label>
            </dic>
            <div class="form__group">
                <textarea class="form__textarea" name="user__message" id="message" cols="30" rows="10"></textarea>
            </dic>
            <button type="submit" class="form__button">Submit</button>
        </form>`
    );

    aboutContent.appendChild(containerContact);
}

export {
    displayAbout,
}