import './styles.css';

import {languages} from './languages';

const firstOffer = document.getElementById('offer1');
const secondOffer = document.getElementById('offer2');
const continueBtn = document.getElementsByClassName('main__btn')[0];

let selectedOffer = firstOffer.id;

firstOffer.addEventListener("touchend", () => selectOffer('offer1'));
secondOffer.addEventListener("touchend", () => selectOffer('offer2'));
continueBtn.addEventListener("touchend", () => confirmOffer());

const selectOffer = (offer) => {
    if (selectedOffer) {
        document.getElementById(selectedOffer).classList.remove('selected');
    }

    selectedOffer = offer;
    document.getElementById(selectedOffer).classList.add('selected');
}

const confirmOffer = () => {
    if (selectedOffer) {
        switch (selectedOffer) {
            case 'offer1':
                window.location.href = 'https://apple.com/';
                break;
            case 'offer2':
                window.location.href = 'https://google.com/';
                break;
            default:
                return;
        }
    }
};

const getTranslation = (langCode) => {
    const checkedCode = languages[langCode] ? langCode : 'en';

    document.documentElement.setAttribute("lang", checkedCode);
    translatePage(languages[checkedCode]);
    updateURL(checkedCode);
};

const translatePage = (translation) => {
    document.getElementsByClassName('header__title')[0].innerHTML = translation['Get Unlimited <br>Access'];
    document.getElementsByClassName('advantages__card')[0].innerHTML = translation['Unlimited Art <br>Creation'];
    document.getElementsByClassName('advantages__card')[1].innerHTML = translation['Exclusive <br>Styles'];
    document.getElementsByClassName('advantages__card')[2].innerHTML = translation['Magic Avatars <br>With 20% Off'];
    document.getElementsByClassName('card__description')[0].innerHTML = translation['YEARLY ACCESS'];
    document.getElementsByClassName('card__hint')[0].innerHTML = translation['BEST OFFER'];
    document.getElementsByClassName('card__price_per_year')[0].innerHTML = translation['Just {{price}} per year'].replace('{{price}}', '$39.99');
    document.getElementsByClassName('card__price')[0].innerHTML = translation['{{price}} <br>per week'].replace('{{price}}', '$0.48');
    document.getElementsByClassName('card__description')[1].innerHTML = translation['WEEKLY ACCESS'];
    document.getElementsByClassName('card__price')[1].innerHTML = translation['{{price}} <br>per week'].replace('{{price}}', '$6.99');
    continueBtn.innerHTML = translation['Continue'];
    document.querySelector('[data-name="terms"]').innerHTML = translation['Terms of Use'];
    document.querySelector('[data-name="privacy"]').innerHTML = translation['Privacy Policy'];
    document.querySelector('[data-name="restore"]').innerHTML = translation['Restore'];
};

const updateURL = (langCode) => {
    const url = new URL(window.location.href);

    if (!url.searchParams.get('lang')) {
        url.searchParams.set('lang', langCode);

        window.location.href = url.toString();
    }
}

function handleURLParamsChange() {
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || navigator.language.substring(0, 2);

    getTranslation(lang)
}

handleURLParamsChange();

window.addEventListener('popstate', handleURLParamsChange);