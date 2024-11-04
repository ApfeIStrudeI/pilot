document.addEventListener('DOMContentLoaded', () => {
    const parentContainer = document.querySelector('.catalog .container');

    parentContainer.addEventListener('click', (e) => {
        if(e.target && e.target.className == 'catalogCard__button-more') {
            e.target.parentElement.parentElement.firstElementChild.classList.toggle('catalogCard__item_active');
            if (e.target.parentElement.parentElement.firstElementChild.classList.contains('catalogCard__item_active')) {
                e.target.innerHTML = '<span>Назад</span>'
                e.target.parentElement.parentElement.style.cssText = 'background: url(../images/G3.png) center center/cover no-repeat'
            } else {
                e.target.innerHTML = '<span>Узнать больше</span>' 
                e.target.parentElement.parentElement.style.cssText = 'background: rgba(0, 0, 0, 0.5)'
            }
        }
    })
})