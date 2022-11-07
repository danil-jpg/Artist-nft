function payment () {

    document.querySelector('.payment__nav-btn').classList.add('active')
    document.querySelector('.payment__pay').classList.add('active')
    
    function selectPricing (e) {
        let target = e.target.dataset.target

        document.querySelectorAll('.payment__nav-btn, .payment__pay').forEach(el => el.classList.remove('active'))
        e.target.classList.add('active')
        document.querySelector('.'+ target).classList.add('active')
    }

    document.querySelectorAll('.payment__nav-btn').forEach(el => {
        el.addEventListener('click', selectPricing)
    })

}
export default payment