import Swiper from 'swiper';

function forum () {
    const forumSwiper = document.querySelector('.swiper-forum')

    const swiperForum = new Swiper(forumSwiper, {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
    });
}

export default forum