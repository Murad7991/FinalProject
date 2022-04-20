const fetchSingleRoom = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/room.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

const id = window.location.search.slice(4,50)

const main = document.querySelector('.main')
const roomSettings = document.querySelector('.room-settings')
const roomDescription = document.querySelector('.room-description')

fetchSingleRoom().then(res => {
    const newRes = res.filter(item => Number(item.id) == Number(id))
    for (let item of newRes) {
        main.innerHTML = `<h2>${item.roomsData.name}</h2>
                <div class="price">
                    <h2>${item.roomsData.price}$ <span>/ Per Night</span></h2>
                </div>`
        roomSettings.innerHTML = `
                    <div class="room-settings-box">
                        <h6>Size:</h6>
                        <span>${item.roomsData.size}</span>
                    </div>
                    <div class="room-settings-box">
                        <h6>Capacity:</h6>
                        <span>${item.roomsData.capacity}</span>
                    </div>
                    <div class="room-settings-box">
                        <h6>Bed:</h6>
                        <span>${item.roomsData.bed}</span>
                    </div>
                    <div class="room-settings-box">
                        <h6>Services: </h6>
                        <span>${item.roomsData.services}</span>
                    </div>`
        roomDescription.innerHTML = `<p>${item.roomsData.description}</p>
                    <ul>
                        <li><i class="fa-solid fa-check"></i>Mauris molestie lectus in irdiet auctor.</li>
                        <li><i class="fa-solid fa-check"></i>Dictum purus at blandit molestie.</li>
                        <li><i class="fa-solid fa-check"></i>Neque non fermentum suscipit.</li>
                        <li><i class="fa-solid fa-check"></i>Donec id dui ac massa malesuada.</li>
                        <li><i class="fa-solid fa-check"></i>In sit amet sapien quis orci maximus.</li>
                        <li><i class="fa-solid fa-check"></i>Vestibulum rutrum diam vel eros tristique.</li>
                    </ul>
                    <p>Every time I hail a cab in New York City or wait for one at the airports, I hope I’ll be lucky enough to get one that’s halfway decent and that the driver actually speaks English. I have spent many anxious moments wondering if I ever get to my destination. Or whether I’d get ripped off. Even if all goes well, I can’t say I can remember many rides in New York cabs that were very pleasant. And given how much they cost by now, going with a limo makes ever more sense.</p>`
    }
})
