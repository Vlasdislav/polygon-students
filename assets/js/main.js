import { tmp_slide_description, tmp_slide_image, create_card } from "./templates.js";

const getData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}!`);
    }
    return await response.json();
};

// Slider
const slider_description = document.querySelector('.slider-description');
const slider_image = document.querySelector('.slider-image');
const button_slider_left = document.querySelector('.button-slider-left');
const button_slider_right = document.querySelector('.button-slider-right');

const count_slides = 3;
let slide_now = 0;

const mod = (x) => (x % count_slides + count_slides) % count_slides;

const next_slide = () => {
    getData('./assets/content/slider-content.json').then((data) => {
        slider_description.innerHTML = tmp_slide_description(data[slide_now]);
        slider_image.innerHTML = tmp_slide_image(data[slide_now]);
    });
}

next_slide();

button_slider_left.addEventListener('click', () => {
    slide_now = mod(slide_now - 1);
    next_slide();
}, false);

button_slider_right.addEventListener('click', () => {
    slide_now = mod(slide_now + 1);
    next_slide();
}, false);

// Marquee
$(function() {
    $('.marquee').marquee({
        duration: 10000,
        startVisible: true,
        duplicated: true
    });
});

// FAQ
const cards = document.querySelector('.cards');

let open_card = new Array();

const update_faq = (id_click=-1) => {
    getData('./assets/content/faq-content.json').then((data) => {
        let all_cards = '';
        data.forEach((card, id) => {
            all_cards += create_card(card, id, id_click, open_card[id]);
        });
        cards.innerHTML = all_cards;
    });
}

update_faq();

cards.addEventListener('click', (event) => {
    const target = event.target;
    const card = target.closest('.click');
    if (card) {
        const id = String(card.id).replace(/[^0-9]/g,"");
        open_card[id] = !open_card[id];
        update_faq(id);
    }
});

// Burger
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu-phone');
const burger_line = document.querySelector('.burger-line');
const body = document.querySelector('body');

burger.addEventListener('click', () => {
    menu.classList.toggle('menu-phone-show');
    burger_line.classList.toggle('burger-line-active');
    body.classList.toggle('scroll-none');
});