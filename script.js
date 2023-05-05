 const modalClose = document.querySelector('.modal-close')
 const modalMenu = document.querySelector('.modal-menu')
 const hero_burger = document.querySelector('.hero_burger')
 const modalItems = document.querySelectorAll('.modal-item__a') 
 console.log(modalClose)
 console.log(modalItems)


 modalClose.addEventListener('click', () => {
    modalMenu.classList.add('hide')
 })

 hero_burger.addEventListener('click', () => {
    modalMenu.classList.remove('hide')
 })



modalItems.forEach(element => {
    element.addEventListener('click', (e) => {
        for (let i = 0; i < modalItems.length; i++) {
            modalItems[i].classList.remove('black')
        }
        setTimeout(() => {
            modalMenu.classList.add('hide')
        }, 600)
        
        console.log(e.target)
        e.currentTarget.classList.add('black')
    })
})


