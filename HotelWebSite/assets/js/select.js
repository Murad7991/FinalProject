// Select Option CSS (Booking Section in Home Page)

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
    if ('active' === selectSingle.getAttribute('data-state')) {
        selectSingle.setAttribute('data-state', '');
    } else {
        selectSingle.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
    selectSingle_labels[i].addEventListener('click', (evt) => {
        selectSingle_title.textContent = evt.target.textContent;
        selectSingle.setAttribute('data-state', '');
    });
}

const selectSingle2 = document.querySelector('.__select-2');
const selectSingle_title2 = selectSingle2.querySelector('.__select__title-2');
const selectSingle_labels2 = selectSingle2.querySelectorAll('.__select__label-2');

// Toggle menu
selectSingle_title2.addEventListener('click', () => {
    if ('active' === selectSingle2.getAttribute('data-state')) {
        selectSingle2.setAttribute('data-state', '');
    } else {
        selectSingle2.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels2.length; i++) {
    selectSingle_labels2[i].addEventListener('click', (evt) => {
        console.log('working')
        selectSingle_title2.textContent = evt.target.textContent;
        selectSingle2.setAttribute('data-state', '');
    });
}


const selectSingle3 = document.querySelector('.__select-3');
const selectSingle_title3 = selectSingle3.querySelector('.__select__title-3');
const selectSingle_labels3 = selectSingle3.querySelectorAll('.__select__label-3');

// Toggle menu
selectSingle_title3.addEventListener('click', () => {
    console.log('working')
    if ('active' === selectSingle3.getAttribute('data-state')) {
        selectSingle3.setAttribute('data-state', '');
    } else {
        selectSingle3.setAttribute('data-state', 'active');
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels3.length; i++) {
    selectSingle_labels3[i].addEventListener('click', (evt) => {
        selectSingle_title3.textContent = evt.target.textContent;
        selectSingle3.setAttribute('data-state', '');
    });
}

