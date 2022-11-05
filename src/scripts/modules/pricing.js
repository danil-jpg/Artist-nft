function pricing () {

    document.querySelector('.header-menu__list').classList.add('active')
    document.querySelector('.pricing-offer__content').classList.add('active')
    
    function selectPricing (e) {
        let target = e.target.dataset.target

        document.querySelectorAll('.pricing-btn, .pricing-offer__content').forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        document.querySelector('.'+ target).classList.add('active')
    }

    document.querySelectorAll('.pricing-btn').forEach(el => {
        el.addEventListener('click', selectPricing)
    })

}
export default pricing