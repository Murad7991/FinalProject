// Loading

setTimeout(() => {
    document.body.classList.add('loaded');
    document.body.classList.remove('loaded_hiding');
}, 2000)

// Scroll To Top
window.onscroll = function() {scrollFunction()};

let myButton = document.getElementById("myBtn");
function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        myButton.style.display = "block";
    } else {
        myButton.style.display = "none";
    }
}



// Search Block

let search = document.querySelector('.search-container')
document.querySelector('.search-icon').addEventListener('click', toggleSearch)

function toggleSearch() {
    if (search.classList.contains('search-container-active')) {
        search.classList.remove('search-container-active')
    } else {
        search.classList.add('search-container-active')
    }
}

//AOS animate plugin

AOS.init();

// Burger Menu

let burger = document.querySelector('.menu_icon')
let menu = document.querySelector('.menu_list')
let closeIcon = document.querySelector('.close-icon')


closeIcon.addEventListener('click', toggleMenu)
burger.addEventListener('click', toggleMenu)
function toggleMenu() {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
        burger.classList.remove('activeBurger')
    } else {
        menu.classList.add('active')
        burger.classList.add('activeBurger')
    }
}



myButton.addEventListener('click', topFunction)
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

const footerButton = document.querySelector('#footerButton')

footerButton.addEventListener('click', (e) => {
    e.preventDefault()
    const email = document.querySelector('#footerSubscribe')
    if (email.value.trim().length < 9) {
        swal("Email adresinizi düzgün qeyd edin")
    } else {
        swal("Subscribed :)")
        email.value = ''
    }
})
