import Swiper from 'swiper';

function lending (){
    const lendingSwiper = document.querySelector('.lending-swiper__block')

    const swiperBlock = new Swiper(lendingSwiper, {
        loop: true,
        spaceBetween: 30,
        slidesPerView: 3,
        centeredSlides: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 16,
                centeredSlides: false,
              },
            375: {
                slidesPerView: 1.22,
                spaceBetween: 16,
                centeredSlides: false,
              },
            540: {
                slidesPerView: 2,
              },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            993: {
                spaceBetween: 30,
                slidesPerView: 3,
                centeredSlides: true,
              },
          }
    });
}

export default lending