import coverImage from '../image/restaurant_cover.jpeg';

function displayHome() {
    const content = document.querySelector('#content');
    content.textContent = '';

    const infoContent = document.createElement('div');
    infoContent.classList.add('content__info');

    const title = document.createElement('h1');
    title.textContent = 'Awesome food';
    title.classList.add('info__title');

    const text = document.createElement('p');
    text.textContent = `
                        Awesome food has the best gourmet dishes that will make your palate experience
                        and explosion of flavors, along with a modern, pleasant and fresh atmosphere
                        make this an unparalleled experience that you can't miss. What are you waiting
                        for, come and experience it!.
                       `;
    text.classList.add('info__text');

    const credit = document.createElement('p');
    credit.classList.add('info__credit');
    credit.innerHTML = 'Photo by <a href="https://unsplash.com/es/@ninjason?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jason Leung</a> on <a href="https://unsplash.com/">Unplash</a>';

    infoContent.appendChild(title);
    infoContent.appendChild(text);
    
    const restaurantCover = new Image();
    restaurantCover.src = coverImage;

    content.style.backgroundImage = `url('${restaurantCover.src}')`;
    content.appendChild(infoContent);
    content.appendChild(credit);
    return content;
}

export {
    displayHome,
};