
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)


getParent = (element, selector) => {
    while (element.parentElement) {
        // matches dùng để check các element trong HTML
        if (element.parentElement.matches(selector)) {
            return element.parentElement
        }
        else {
            element = element.parentElement
        }
    }
}

document.addEventListener('click', (e) => {
    const iconsActive = $('.icons.active')
    const sortPriceBtnActive = $('.sort-price-btn.active')
    const categoryActive = $('.category.active')
    const inputSearchActive = $('input.header-search-input.active')
    e.target.matches('i#js-icon-trash') && console.log(2)

    if (e.target.className === 'hydrated' || !e.target.matches('.icons') && !e.target.parentElement.matches('.icons') && !e.target.matches('.mobile-header-search-input')) {
        if (iconsActive) {
            iconsActive.classList.remove('active')
        }
    }
    if (e.target.className === 'hydrated' || !e.target.matches('.sort-price-btn') && !e.target.parentElement.matches('.sort-price-btn')) {
        if (sortPriceBtnActive) {
            sortPriceBtnActive.classList.remove('active')
        }
    }
    if (e.target.className === 'hydrated' || !getParent(e.target, '.category')) {
        if (categoryActive) {
            categoryActive.classList.remove('active')
        }
    }
    if (e.target.className === 'hydrated' || !e.target.matches('input.header-search-input') && !e.target.matches('.history-search ion-icon')) {
        $('input.header-search-input').classList.remove('active')
    }
})

// document.addEventListener('click', (e) => {
//     const sortPriceBtnActive = $('.sort-price-btn.active')
//     if (e.target.className === 'hydrated' || !e.target.matches('.sort-price-btn') && !e.target.parentElement.matches('.sort-price-btn')) {
//         if (sortPriceBtnActive) {
//             sortPriceBtnActive.classList.remove('active')
//         }
//     }
// })