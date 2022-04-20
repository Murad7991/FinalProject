// Fetch API


//Welcome Section

const slider_text = document.querySelector('.swiper-wrapper')

const fetchWelcome = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/welcome.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

fetchWelcome().then(res => {
    res.map(data => {
        var swiper = new Swiper(".mySwiper", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        slider_text.innerHTML += `<div class="swiper-slide">
                    <div class="slider-item-1">
                        <div class="slider-img">
                            <img alt="hero" src="assets/img/main/16.jpg">
                        </div>
                        <div class="slider-text lineUp">
                            <h6>${data.hotel}</h6>
                            <h2>${data.welcome}</h2>
                            <a href="./">Discover Now</a>
                        </div>
                    </div>
                </div>`
    })
}).catch(err => {
    console.log(err)
})


//Rooms Section

let rooms2 = document.querySelector('#per-month .swiper-wrapper')

const fetchRooms = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/room.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

fetchRooms().then(res => {
    res.map(data => {
        var swiper = new Swiper(".perMonth", {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".next-button",
                prevEl: ".prev-button",
            },
        });
        rooms2.innerHTML += ` <div class="swiper-slide">
                    <div class="main-box">
                        <div class="img-box">
                            <img src="${data.img}" alt="single-room">
                        </div>
                        <div class="content-box">
                            <div class="text-box animate__animated animate__fadeInDown animate__faster">
                                <h2>${data.roomsData.name}</h2>
                                <h3>${data.roomsData.price}$<span>/ Day</span></h3>
                                <ul>
                                    <li><i class="fa-solid fa-check"></i><span>Size</span> <span>: ${data.roomsData.size}</span></li>
                                    <li><i class="fa-solid fa-check"></i><span>Capacity</span><span>: ${data.roomsData.capacity}</span></li>
                                    <li><i class="fa-solid fa-check"></i><span>Bed</span><span>: ${data.roomsData.bed}</span></li>
                                    <li><i class="fa-solid fa-check"></i><span>Services </span><span>: ${data.roomsData.services}</span></li>
                                </ul>
                                <div class="button-view">
                                    <a href="./single-room.html?id=${data.id}">View Details</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
    })
}).catch(err => {
    console.log(err)
})


//Testimonials Section

let testimonialsImg = document.querySelector('.imgSlider .swiper-wrapper')
let testimonialsDescription = document.querySelector('.textSlider .swiper-wrapper')


const fetchTestimonials = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/testimonials.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}

fetchTestimonials().then(res => {
    res.map(data => {
        var swiper = new Swiper(".imgSlider", {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });

        var swiper = new Swiper(".textSlider", {
            slidesPerView: 1,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        testimonialsImg.innerHTML += ` <div class="swiper-slide">
                                <img src="${data.img}" alt="testimonial">
                            </div>`
        testimonialsDescription.innerHTML += `<div class="swiper-slide">
                                    <div class="text-slider">
                                        <h5>“${data.testimonialsData.description}”</h5>
                                        <div class="stars">
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                            <a href="#"><i class="fas fa-star"></i></a>
                                        </div>
                                        <h6>${data.testimonialsData.author} <span>- ${data.testimonialsData.job}</span></h6>
                                    </div>
                                </div>`
    })
}).catch(err => {
    console.log(err)
})


//Entertainment Section

let entertainment = document.querySelector('.entertainmentSlider .swiper-wrapper')


const fetchEntertainment = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/entertainment2.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}


fetchEntertainment().then(res => {
    res.map(data => {
        var swiper = new Swiper(".entertainmentSlider", {
            slidesPerView: 4,
            spaceBetween: 20,
            loop: true,
            autoplay: {
                delay: 3000,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                480: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 0,
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },
            }
        });
        entertainment.innerHTML += ` <div class="swiper-slide">
                    <img src="${data.img}" alt="entertainment">
                    <div class="text-box">
                        <h6>${data.entertainmentData.entertainment}</h6>
                        <h5>${data.entertainmentData.name}</h5>
                    </div>
                    <div class="hover-block animate__animated animate__fadeInUp">
                        <div class="hover-text">
                            <h6>${data.entertainmentData.entertainment}</h6>
                        <h5>${data.entertainmentData.name}</h5>
                            <p>${data.entertainmentData.description}</p>
                        </div>
                        <div class="discover-button">
                            <a href="#">Discover Now <i class="fa-solid fa-right-long"></i></a>
                        </div>
                    </div>
                </div>`
    })
}).catch(err => {
    console.log(err)
})


//News Section

let blogsBlock = document.querySelector('.our-blog-boxes')

const fetchNews = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/news.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}


fetchNews().then(res => {
    let latestNews = res.slice(res.length - 3, res.length).reverse()
    latestNews.map(data => {
        blogsBlock.innerHTML += ` <div class="our-blog-box">
                    <div class="img-box">
                        <a href="./single-blog.html?id=${data.id}">
                            <img src="${data.img}" alt="blog-image"/>
                        </a>
                    </div>
                    <div class="text-box">
                        <div class="subtitle-link">
                            <a href="./single-blog.html?id=${data.id}">${data.nowDate}</a>
                            <a href="./single-blog.html?id=${data.id}">${data.blogsData.event}</a>
                        </div>
                        <a class="text-box-title" href="./single-blog.html?id=${data.id}">${data.blogsData.title}</a>
                        <p>${data.blogsData.description}</p>
                        <a class="right-long" href="./single-blog.html?id=${data.id}"><i class="fa-solid fa-right-long"></i></a>
                    </div>
                </div>`
    })
}).catch(err => {
    console.log(err)
})
