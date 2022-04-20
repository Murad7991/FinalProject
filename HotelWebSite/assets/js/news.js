
let eventsBlock = document.querySelector('.events')
let recent = document.querySelector('.recent-news-boxes')
const fetchAllNews = async () => {
    let newArr = []
    const response = await fetch('https://murad-mentor-default-rtdb.firebaseio.com/news.json')
    const data = await response.json()
    for (let key in data) {
        newArr.push(data[key])
    }
    return newArr
}


fetchAllNews().then(res => {
    res.reverse().map(data => {
        eventsBlock.innerHTML += ` <div data-aos="fade-up" class="event-box">
                    <div class="event-box-img">
                        <img src="${data.img}" alt="room-img"/>
                    </div>
                    <div class="event-box-description">
                        <a href="./single-blog.html?id=${data.id}">${data.nowDate} / ${data.blogsData.event} </a>
                        <h2><a href="./single-blog.html?id=${data.id}">${data.blogsData.title}</a></h2>
                        <div class="event-box-services">
                            <p>${data.blogsData.description}</p>
                            <div class="read-more">
                                <a href="./single-blog.html?id=${data.id}">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>`
    })
}).catch(err => {
    console.log(err)
})

fetchAllNews().then(res => {
    let recentNews = res.slice(res.length-4, res.length).reverse()
    recentNews.map(data => {
        recent.innerHTML += `<div class="recent-news-box">
                            <div class="recent-news-box-img">
                                <img src="${data.img}"  alt="recent-news-img"/>
                            </div>
                            <div class="recent-news-title">
                                <a href="./single-blog.html?id=${data.id}">${data.nowDate} / ${data.blogsData.event} </a>
                                <h2><a href="./single-blog.html?id=${data.id}">${data.blogsData.title}</a></h2>
                            </div>
                        </div>`
    })
}).catch(err => {
    console.log(err)
})


//Subscribe send info

const subscribe = document.querySelector('#subscribe')

subscribe.addEventListener('click', () => {
    const email = document.querySelector('#email')
    if (email.value.trim().length < 9) {
        swal("Email adresinizi düzgün qeyd edin")
    } else {
        swal("Subscribed :)")
        email.value = ''
    }
})
