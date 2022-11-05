function auction () {
    const auctionBtn = document.querySelector('.auction-about__text-btn')
    const auctionTextBig = document.querySelector('.auction-about__text-big')
    const auctionTextSmal = document.querySelector('.auction-about__text-smale')

    auctionBtn.addEventListener('click', () => {
        auctionTextBig.classList.toggle('auction-hidden')
        auctionTextSmal.classList.toggle('auction-hidden')
    })
}
export default auction