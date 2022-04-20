const selectSingle4 = document.querySelector('.__select-4');
const selectSingle_title4 = selectSingle4.querySelector('.__select__title-4');
const selectSingle_labels4 = selectSingle4.querySelectorAll('.__select__label-4');

// Toggle menu
selectSingle_title4.addEventListener('click', () => {
    if ('active' === selectSingle4.getAttribute('data-state')) {
        selectSingle4.setAttribute('data-state', '');
    } else {
        selectSingle4.setAttribute('data-state', 'active');
        console.log('working')
    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels4.length; i++) {
    selectSingle_labels4[i].addEventListener('click', (evt) => {
        selectSingle_title4.textContent = evt.target.textContent;
        selectSingle4.setAttribute('data-state', '');
    });
}


const selectSingle5 = document.querySelector('.__select-5');
const selectSingle_title5 = selectSingle5.querySelector('.__select__title-5');
const selectSingle_labels5 = selectSingle5.querySelectorAll('.__select__label-5');

// Toggle menu
selectSingle_title5.addEventListener('click', () => {
    if ('active' === selectSingle5.getAttribute('data-state')) {
        selectSingle5.setAttribute('data-state', '');
    } else {
        selectSingle5.setAttribute('data-state', 'active');

    }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels5.length; i++) {
    selectSingle_labels5[i].addEventListener('click', (evt) => {
        selectSingle_title5.textContent = evt.target.textContent;
        selectSingle5.setAttribute('data-state', '');
        console.log('working')
    });
}


//Fetch Rooms Section

let roomsPage = document.querySelector('.room')

const fetchAllRooms = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/room.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

fetchAllRooms().then(res => {
    res.map(data => {
        roomsPage.innerHTML += `<div  class="room-box ">
                <div class="room-box-img">
                    <a href="./single-room.html?id=${data.id}"><img src="${data.img}" alt="room-img"/></a>
                </div>
                <div class="room-box-description">
                    <h2>${data.roomsData.name}</h2>
                    <h4>${data.roomsData.price}$ <span>/ Day</span></h4>
                    <div class="room-box-services">
                        <h6>Size: <span>${data.roomsData.size} ft</span></h6>
                        <h6>Capacity: <span>${data.roomsData.capacity}</span></h6>
                        <h6>Bed: <span>${data.roomsData.bed}</span></h6>
                        <h6>Services: <span>${data.roomsData.services}</span></h6>
                    </div>
                    <div class="view-button">
                        <a href="./single-room.html?id=${data.id}">View Details<i class="fa-solid fa-right-long"></i></a>
                    </div>
                </div>
            </div>`
        const button = document.querySelector('.check-button button')
        const room = document.querySelectorAll('.room-box-description h4')
        // let rooms = document.querySelector(".room-box")
        let newArr = Array.from(room)
        let newArr2 = []
        for (let i = 0; i < newArr.length; i++) {
            newArr2.push(newArr[i].innerText.slice(0,3))
        }

        button.addEventListener('click', () => {
            let range = document.querySelector('#range')
            let rangeValue = range.innerText.slice(1,4)
            let roomsArr = newArr
            if(newArr2.includes(rangeValue)){
                for (let i  = 0; i < roomsArr.length; i++) {
                    let roomPrice = parseInt(roomsArr[i].innerText.slice(0,3))
                    let roomBox = roomsArr[i].parentNode.parentNode
                    roomBox.style.display = "flex"
                    if(roomPrice !== Number(rangeValue)){
                        roomBox.style.display = "none"
                    }
                }
            }
            else{
                swal("Verilmiş qiymətdə otaq yoxdur!!")
            }
        })
    })
})

