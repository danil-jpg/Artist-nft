import Swiper from 'swiper';

function forum () {
    const forumSwiper = document.querySelector('.swiper-forum')

    const swiperForum = new Swiper(forumSwiper, {
        loop: true,
        breakpoints: {
            320: {
              slidesPerView: 1.23,
              spaceBetween: 14,
            },
            578: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            1200: {
                spaceBetween: 30,
                slidesPerView: 3,
              },
          }
    });
}

export default forum