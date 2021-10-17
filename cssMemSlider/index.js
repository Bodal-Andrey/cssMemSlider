const slides = document.querySelectorAll('.slider-list__item');
const texts = document.querySelectorAll('.slider-text__item');
const buttons = document.querySelectorAll('.slider-buttons__item');

const getTransform = (index) => {
    if (index === 0) {
        return slides.forEach(slide => slide.style.transform = `translateX(0)`),
            texts.forEach(text => text.style.transform = `translateX(0)`);
    }
    if (index === 1) {
        return slides.forEach(slide => slide.style.transform = `translateX(-${index}00%)`),
            texts.forEach(text => text.style.transform = `translateX(-${index}00%)`);
    }
    if (index === 2) {
        return slides.forEach(slide => slide.style.transform = `translateX(-${index}00%)`),
            texts.forEach(text => text.style.transform = `translateX(-${index}00%)`);
    }
    if (index === 3) {
        return slides.forEach(slide => slide.style.transform = `translateX(-${index}00%)`),
            texts.forEach(text => text.style.transform = `translateX(-${index}00%)`);
    }
};

const changeSlide = () => {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener(`click`, () => {
            getTransform(i);
            buttons.forEach(button => button.classList.remove('active'));
            buttons[i].classList.add('active');
        });
    }
};

changeSlide();
