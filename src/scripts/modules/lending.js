import Swiper from 'swiper';

function lending (){
    const lendingSwiper = document.querySelector('.lending-swiper__block')

    const swiperBlock = new Swiper(lendingSwiper, {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
    });
}

export default lending