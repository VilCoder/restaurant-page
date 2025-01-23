import coverImage from '../image/restaurant_cover.jpeg';

function displayHome() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    const text = document.createElement('p');
    const restaurantCover = new Image();

    restaurantCover.src = coverImage;

    title.textContent = 'Awesome food';
    title.classList.add('content__title');

    text.textContent = `
                        Awesome food has the best gourmet dishes that will make your palate experience
                        and explosion of flavors, along with a modern, pleasant and fresh atmosphere
                        make this an unparalleled experience that you can't miss. What are you waiting
                        for, come and experience it!.
                       `;
    text.classList.add('content__text');

    content.style.backgroundImage = `url('${restaurantCover.src}')`;
    content.appendChild(title);
    content.appendChild(text);

    return content;
}

export {
    displayHome,
};